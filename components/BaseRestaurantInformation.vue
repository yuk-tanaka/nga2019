<template>
  <v-layout wrap>
    <v-flex xs12>
      <base-google-link :object="restaurant"></base-google-link>
    </v-flex>
    <v-flex xs12>
      <v-icon class="mr-2" small>mdi-phone</v-icon>
      <span class="font-weight-medium"><a :href="'tel:'+restaurant.tel">{{restaurant.tel}}</a></span>
    </v-flex>
    <v-flex xs12 class="mt-2">
      <h4 class="subtitle-1">
        <v-icon class="mr-2" small>mdi-calendar-clock</v-icon>
        営業時間
      </h4>
      <span v-html="businessHours" class="font-weight-medium"></span>
    </v-flex>
  </v-layout>
</template>

<script>
import BaseGoogleLink from './BaseGoogleLink'

export default {
  components: {
    BaseGoogleLink
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
