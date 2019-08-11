<template>
  <v-layout wrap>
    <base-page-title :title="title"></base-page-title>
    <v-flex xs12 class="mb-6">
      <ul>
        <li>
          チェックリストは<a href="https://developer.mozilla.org/ja/docs/Web/API/Window/localStorage"
                     target="_blank">localStorage</a>
          を使用しているため、同一機種・同一ブラウザ内でのみ保存されます。
        </li>
      </ul>
    </v-flex>
    <v-layout align-center justify-start class="mb-3">
      <v-btn v-if="timeline" color="success" class="ma-0" @click="timeline=false">
        <v-icon class="mr-2">mdi-view-list</v-icon>
        参加店舗一覧を表示
      </v-btn>
      <v-btn v-else color="primary" class="ma-0" @click="timeline=true">
        <v-icon class="mr-2">mdi-chart-timeline</v-icon>
        タイムラインを表示
      </v-btn>
    </v-layout>
    <v-layout align-center justify-end class="mb-3">
      <span class="body-2">{{collection.total}}件の検索結果</span>
    </v-layout>
    <v-flex xs12 v-if="timeline" class="mt-3">
      <participant-timeline v-if="hasFavorite" :participantIds="favorites"></participant-timeline>
    </v-flex>
    <v-flex xs12 v-else>
      <participant-list :is-last-page="isLastPage"
                        :participants="participants"
                        @scroll="fetchNext">
      </participant-list>
    </v-flex>
  </v-layout>
</template>

<script>

import {mapActions} from 'vuex'
import BaseAreaSearchBox from '~/components/BaseAreaSearchBox.vue'
import BasePageTitle from '~/components/BasePageTitle.vue'
import ParticipantList from '~/components/ParticipantList.vue'
import ParticipantTimeline from '~/components/ParticipantTimeline.vue'

export default {
  components: {
    BaseAreaSearchBox,
    BasePageTitle,
    ParticipantList,
    ParticipantTimeline
  },
  head() {
    return {
      title: this.title
    }
  },
  data() {
    return {
      timeline: false,
      collection: [],
      participants: [],
    }
  },
  computed: {
    favorites: () => Object.keys(localStorage),
    hasFavorite: v => v.favorites.length,
    title: v => v.$route.params.year + 'チェックリスト',
    isLastPage: v => v.collection.to === v.collection.total || v.collection.total === 0
  },
  //SSRではlocalStorageを取得できないためmounted()を使用する
  async mounted() {
    //localStorage0件のときは422
    if (!this.hasFavorite) {
      return
    }
    const res = await this.$axios.get(
      process.env.NGA_API_URL + '/' + this.$route.params.year + '/participants/favorites',
      {params: {participantIds: this.favorites}}
    )

    this.collection = res.data
    this.participants = res.data.data
  },
  methods: {
    ...mapActions('loading', ['switchLoading']),
    async fetch(url, isConcat = false) {
      await this.switchLoading()
      const res = await this.$axios.get(url, {params: {participantIds: this.favorites}})
      this.collection = res.data
      this.participants = isConcat ? this.participants.concat(res.data.data) : res.data.data
      await this.switchLoading()
    },
    async fetchNext() {
      if (this.isLastPage) {return}
      await this.fetch(this.collection.next_page_url, true)
    },
  }
}
</script>
