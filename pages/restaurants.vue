<template>
  <v-layout wrap>
    <base-page-title title="過去参加店舗一覧"></base-page-title>
    <v-flex xs12 class="mb-6">
      <ul>
        <li>2018年以降の日本酒ゴーアラウンド過去参加店舗のデータを表示します。</li>
        <li>旅先でうまい店を探すときに使用するのがおすすめ。</li>
        <li>営業時間、定休日は最新のデータではない可能性があるので、訪問の際は公式情報を参照してください。</li>
      </ul>
    </v-flex>
    <v-flex xs12 class="mb-6">
      <base-area-search-box
        :areas-url="areasUrl"
        :cities-url="citiesUrl"
        @input="handleAreaSearchBox">
      </base-area-search-box>
    </v-flex>
    <v-layout justify-end class="mb-3">
      <span class="body-2">{{collection.total}}件の検索結果</span>
    </v-layout>
    <v-flex xs12>
      <restaurant-list
        :is-last-page="isLastPage"
        :restaurants="restaurants"
        @scroll="fetchNext">
      </restaurant-list>
    </v-flex>
  </v-layout>
</template>

<script>

import {mapActions} from 'vuex'
import BaseAreaSearchBox from '~/components/BaseAreaSearchBox.vue'
import BasePageTitle from '~/components/BasePageTitle.vue'
import RestaurantList from '~/components/RestaurantList.vue'

export default {
  components: {
    BaseAreaSearchBox,
    BasePageTitle,
    RestaurantList
  },
  async asyncData({$axios}) {
    const res = await $axios.get(process.env.NGA_API_URL + '/restaurants/all')
    return {collection: res.data, restaurants: res.data.data}
  },
  head() {
    return {
      title: '過去参加店舗一覧'
    }
  },
  data() {
    return {
      areasUrl: process.env.NGA_API_URL + '/cities/areas',
      citiesUrl: process.env.NGA_API_URL + '/cities',
      restaurantsUrl: process.env.NGA_API_URL + '/restaurants',
      collection: [],
      restaurants: [],
      selectedAreas: []
    }
  },
  computed: {
    isSelectedArea: v => v.selectedAreas.length > 0,
    isLastPage: v => v.collection.to === v.collection.total
  },
  methods: {
    ...mapActions('loading', ['switchLoading']),
    async fetch(url, isConcat = false) {
      await this.switchLoading()
      const res = await this.$axios.get(url, {params: {areaIds: this.selectedAreas}})
      this.collection = res.data
      this.restaurants = isConcat ? this.restaurants.concat(res.data.data) : res.data.data
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
        this.fetch(this.restaurantsUrl)
      }
    }
  }
}
</script>
