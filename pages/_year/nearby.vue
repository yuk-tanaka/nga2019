<template>
  <v-layout wrap>
    <base-page-title :title="title"></base-page-title>
    <v-flex xs12 class="mb-6">
      <ul>
        <li>利用には位置情報サービスをONにする必要があります。</li>
        <li>GPSを利用しない場合、計測結果が実際の位置と大幅にずれる可能性があります。</li>
        <li>計測される距離は目的地までの直線距離を示すものです。実際の移動距離とは異なります。</li>
      </ul>
    </v-flex>
    <v-flex xs12 class="mb-6">
      <v-layout justify-center class="ma-4">
        <nearby-search-button @fetch="handleNearbySearchButton"></nearby-search-button>
      </v-layout>
    </v-flex>
    <v-flex v-if="hasParticipants" xs12 class="mb-6">
      <participant-list :is-last-page="isLastPage"
                        :participants="participants"
                        @scroll="fetchNext">
      </participant-list>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapActions} from 'vuex'
import BasePageTitle from '~/components/BasePageTitle.vue'
import NearbySearchButton from '../../components/NearbySearchButton';
import ParticipantList from '~/components/ParticipantList.vue'

export default {
  components: {
    BasePageTitle,
    NearbySearchButton,
    ParticipantList
  },
  head() {
    return {
      title: this.title
    }
  },
  data() {
    return {
      collection: [],
      participants: []
    }
  },
  computed: {
    hasParticipants: v => v.participants.length > 0,
    title: v => v.$route.params.year + '近い店を探す',
    isLastPage: v => v.collection.to === v.collection.total || v.collection.total === 0
  },
  methods: {
    ...mapActions('loading', ['switchLoading']),
    async handleNearbySearchButton(latitude, longitude) {
      const res = await this.$axios.get(
        process.env.NGA_API_URL + '/' + this.$route.params.year + '/participants/nearby',
        {params: {latitude: latitude, longitude: longitude}}
      )
      this.collection = res.data
      this.participants = res.data.data
    },
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
