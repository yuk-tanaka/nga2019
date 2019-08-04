<template>
  <v-layout wrap>
    <v-flex xs12>
      <base-restaurant-information-google-link :restaurant="restaurant"></base-restaurant-information-google-link>
    </v-flex>
    <v-flex xs12>
      <v-icon class="mr-2" small>mdi-phone</v-icon>
      <span class="font-weight-medium"><a :href="'tel:'+restaurant.tel">{{restaurant.tel}}</a></span>
    </v-flex>
    <v-flex xs12>
      <h4 class="subtitle-1">
        <v-icon class="mr-2" small>mdi-calendar-clock</v-icon>
        営業時間
      </h4>
      <span v-html="businessHours" class="font-weight-medium"></span>
    </v-flex>
  </v-layout>
</template>

<script>
import BaseRestaurantInformationGoogleLink from './BaseRestaurantInformationGoogleLink'

export default {
  components: {
    BaseRestaurantInformationGoogleLink
  },
  props: {
    restaurant: {type: Object, required: true}
  },
  computed: {
    businessHours: v => v.restaurant.business_hours || '取得データなし',
    googleUrl: v => v.restaurant.google_url || 'https://maps.google.co.jp/maps/search/' + v.restaurant.address
  }
}
</script>
