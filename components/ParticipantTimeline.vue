<template>
  <no-ssr>
    <div>
      <GChart
        v-if="hasData"
        :data="timelineData"
        :options="options"
        :settings="settings"
        type="Timeline"
      />
      <p v-else-if="isLoading">
        loading…
      </p>
    </div>
  </no-ssr>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import {GChart} from 'vue-google-charts'

export default {
  components: {
    GChart
  },
  props: {
    //どちらか必須 TODO 共通化処理まとめた上でcomponent分割
    areaIds: {type: Array, required: false},
    participantIds: {type: Array, required: false}
  },
  data() {
    return {
      header: ['地域', '店舗', '開店時間', '閉店時間'],
      timelineData: [],
      options: {
        hAxis: {
          format: 'HH:mm'
        },
        height: 1000
      },
      settings: {
        packages: ['timeline']
      }
    }
  },
  watch: {
    areaIds(ids) {
      this.fetch(ids)
    }
  },
  computed: {
    ...mapGetters('loading', ['isLoading']),
    hasData: v => v.timelineData.length > 1 //header含め2以上
  },
  mounted() {
    this.timelineData.push(this.header)
    this.fetch(this.areaIds)
  },
  methods: {
    ...mapActions('loading', ['switchLoading']),
    async fetch(areaIds) {
      this.timelineData = []
      this.timelineData.push(this.header)

      if ((!areaIds && !this.participantIds) || (areaIds && !areaIds.length)) {
        return
      }
      await this.switchLoading()
      const res = await this.$axios.get(
        process.env.NGA_API_URL + '/' + this.$route.params.year + '/participants/timeline',
        {params: {areaIds: areaIds, participantIds: this.participantIds}}
      )

      //時刻をDateに変換
      res.data.data.forEach(item => {
        this.timelineData.push([
          item.areaName,
          item.name,
          new Date(item.opened_at),
          new Date(item.closed_at)
        ])
        if (item.opened_at_after_break && item.closed_at_after_break) {
          this.timelineData.push([
            item.areaName,
            item.name,
            new Date(item.opened_at_after_break),
            new Date(item.closed_at_after_break)
          ])
        }
      })
      await this.switchLoading()
    }
  }
}
</script>
