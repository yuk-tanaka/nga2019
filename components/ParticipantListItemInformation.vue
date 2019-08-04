<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-icon class="mr-2" small>mdi-glass-cocktail</v-icon>
      <span class="font-weight-bold">{{breweryName}}</span>
    </v-flex>
    <v-flex xs12>
      <base-restaurant-information-google-link :restaurant="participant.restaurant"></base-restaurant-information-google-link>
    </v-flex>
    <v-flex xs12>
      <v-icon class="mr-2" small>mdi-clock-outline</v-icon>
      <span class="font-weight-medium">{{participant.business_hours}}</span>
    </v-flex>
    <v-flex xs12 v-if="participant.distance">
      <v-icon class="mr-2" small>mdi-run</v-icon>
      <span class="font-weight-medium">{{formattedDistance}} m</span>
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
    participant: {type: Object, required: true}
  },
  computed: {
    breweryName: v => v.participant.brewery.prefecture + '・' + v.participant.brewery.name,
    formattedDistance: v => Math.round(v.participant.distance).toLocaleString()
  }
}
</script>
