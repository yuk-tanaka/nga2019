<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-icon class="mr-2" small>mdi-glass-cocktail</v-icon>
      <span class="font-weight-bold">{{breweryName}}</span>
    </v-flex>
    <v-flex xs12 v-if="hasSakeShop">
      <v-icon class="mr-2" small>mdi-basket</v-icon>
      <base-google-link :name="participant.brewery.sake_shop.name"
                        :object="participant.brewery.sake_shop">
      </base-google-link>
    </v-flex>
    <v-flex xs12>
      <base-google-link :object="participant.restaurant"></base-google-link>
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
import BaseGoogleLink from './BaseGoogleLink'

export default {
  components: {
    BaseGoogleLink
  },
  props: {
    participant: {type: Object, required: true}
  },
  computed: {
    breweryName: v => v.participant.brewery.prefecture + '・' + v.participant.brewery.name,
    formattedDistance: v => Math.round(v.participant.distance).toLocaleString(),
    hasSakeShop: v => Object.keys(v.participant.brewery.sake_shop).length > 0
  }
}
</script>
