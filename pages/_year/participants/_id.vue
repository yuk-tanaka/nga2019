<template>
  <v-layout wrap>
    <base-page-title :title="title"></base-page-title>
    <v-flex xs12 class="mb-6">
      <v-card>
        <v-card-title primary-title>
          <v-flex xs12>
            <h2 class="headline">{{participantName}}</h2>
          </v-flex>
          <v-flex xs12>
            <base-restaurant-sns-link :restaurant="participant.restaurant"></base-restaurant-sns-link>
          </v-flex>
        </v-card-title>
        <v-card-text class="grey--text text--darken-4">
          <section class="mb-4">
            <h3 class="title mb-2">開催情報</h3>
            <v-flex xs12>
              <span class="mr-2"><v-icon class="mr-2" small>mdi-clock-outline</v-icon></span>
              <span class="font-weight-medium">{{participant.business_hours}}</span>
            </v-flex>
            <v-flex xs12>
              <span class="mr-2"><v-icon class="mr-2" small>mdi-tag</v-icon></span>
              <span class="font-weight-medium">{{areaName}}</span>
            </v-flex>
          </section>
          <section class="mb-4">
            <h3 class="title mb-2">店舗情報</h3>
            <base-restaurant-information :restaurant="participant.restaurant"></base-restaurant-information>
          </section>
          <section class="mb-4">
            <h3 class="title mb-2">酒蔵情報</h3>
            <v-layout wrap>
              <v-flex xs12>
                <v-icon class="font-weight-medium mr-2" small>mdi-glass-cocktail</v-icon>
                {{participant.brewery.name}}
              </v-flex>
              <v-flex xs12>
                <v-icon class="mr-2" small>mdi-domain</v-icon>
                {{participant.brewery.company_name}}
              </v-flex>
              <v-flex xs12>
                <v-icon class="mr-2" small>mdi-map-marker</v-icon>
                <a :href="'https://maps.google.co.jp/maps?q=' + participant.brewery.company_name"
                   class="font-weight-medium" target="_blank">
                  {{participant.brewery.address}}
                </a>
              </v-flex>
              <v-flex xs12>
                <v-icon class="mr-2" small>mdi-home</v-icon>
                <a :href="participant.brewery.web" target="_blank">{{participant.brewery.web}}</a>
              </v-flex>
            </v-layout>
          </section>
        </v-card-text>
        <v-card-actions>
          <v-layout justify-space-between>
            <v-btn :disabled="cantPrev" :to="prevUrl" color="primary" nuxt text>
              <v-icon class="mr-1" small>mdi-arrow-left-thick</v-icon>
              前へ
            </v-btn>
            <v-btn :to="nextUrl" color="primary" nuxt text>
              次へ
              <v-icon class="ml-1" small>mdi-arrow-right-thick</v-icon>
            </v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

import BasePageTitle from '~/components/BasePageTitle.vue'
import BaseRestaurantInformation from '~/components/BaseRestaurantInformation.vue'
import BaseRestaurantSnsLink from '~/components/BaseRestaurantSnsLink.vue'

export default {
  components: {
    BasePageTitle,
    BaseRestaurantInformation,
    BaseRestaurantSnsLink
  },
  async asyncData({error, params, $axios}) {
    const res = await $axios.get(process.env.NGA_API_URL + '/participants/' + params.id).catch(err => err.response)
    //id=404を想定
    if (res.status !== 200) {
      error({statusCode: res.status, message: res.data.message});
      return;
    }
    return {participant: res.data}
  },
  head() {
    return {
      title: this.participantName
    }
  },
  computed: {
    cantPrev: v => Number(v.$route.params.id) === 1,
    prevUrl: v => '/2019/participants/' + (Number(v.$route.params.id) - 1).toString(),
    nextUrl: v => '/2019/participants/' + (Number(v.$route.params.id) + 1).toString(),
    participantName: v => v.participant.restaurant.name + ' × ' + v.participant.brewery.name,
    areaName: v => v.participant.restaurant.area.name + '（' + v.participant.restaurant.area.city.name + '）',
    title: v => v.$route.params.year + '参加店舗一覧',
  }
}
</script>
