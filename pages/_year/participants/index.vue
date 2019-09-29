<template>
  <v-layout wrap>
    <base-page-title :title="title"></base-page-title>
    <v-flex xs12 class="mb-6">
      <ul>
        <li>東京の開催時間が登録情報と異なる場合があります。詳細判明しだい更新します。</li>
        <li>情報が最新でない可能性がありますので、ご了承ください。</li>
      </ul>
    </v-flex>
    <v-flex xs12 class="mb-6">
      <base-area-search-box
        :areas-url="areasUrl"
        :cities-url="citiesUrl"
        @input="handleAreaSearchBox">
      </base-area-search-box>
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
      <participant-timeline v-if="isSelectedArea" :areaIds="selectedAreas"></participant-timeline>
      <p v-else>エリアを選択してください。</p>
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
  async asyncData({params, $axios}) {
    const res = await $axios.get(process.env.NGA_API_URL + '/' + params.year + '/participants/all')
    return {collection: res.data, participants: res.data.data}
  },
  head() {
    return {
      title: this.title
    }
  },
  data() {
    return {
      areasUrl: process.env.NGA_API_URL + '/' + this.$route.params.year + '/cities/areas',
      citiesUrl: process.env.NGA_API_URL + '/' + this.$route.params.year + '/cities',
      participantsUrl: process.env.NGA_API_URL + '/' + this.$route.params.year + '/participants',
      timeline: false,
      collection: [],
      participants: [],
      selectedAreas: []
    }
  },
  computed: {
    title: v => v.$route.params.year + '参加店舗一覧',
    isSelectedArea: v => v.selectedAreas.length > 0,
    isLastPage: v => v.collection.to === v.collection.total || v.collection.total === 0
  },
  methods: {
    ...mapActions('loading', ['switchLoading']),
    async fetch(url, isConcat = false) {
      await this.switchLoading()
      const res = await this.$axios.get(url, {params: {areaIds: this.selectedAreas}})
      this.collection = res.data
      this.participants = isConcat ? this.participants.concat(res.data.data) : res.data.data
      await this.switchLoading()
    },
    async fetchNext() {
      if (this.isLastPage) {return}
      await this.fetch(this.collection.next_page_url, true)
    },
    handleAreaSearchBox(areas) {
      this.selectedAreas = areas
      //area選択ない場合にgetすると422error
      if (this.isSelectedArea) {
        this.fetch(this.participantsUrl)
      }
    }
  }
}
</script>
