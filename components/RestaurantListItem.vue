<template>
  <v-card>
    <v-card-title primary-title>
      <v-layout wrap>
        <v-flex xs12>
          <base-area-chip :area="restaurant.area"></base-area-chip>
        </v-flex>
        <v-flex xs12>
          <v-chip
            v-for="participant in restaurant.participants"
            :key="participant.year"
            color="blue lighten-4"
            class="font-weight-medium mr-3"
            label
            small>
            <span class="font-weight-medium">{{participant.year}}</span>
          </v-chip>
        </v-flex>
        <v-flex xs12>
          <h3 class="title">{{restaurant.name}}</h3>
        </v-flex>
        <v-flex xs12>
          <base-restaurant-sns-link :restaurant="restaurant"></base-restaurant-sns-link>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text>
      <base-restaurant-information :restaurant="restaurant"></base-restaurant-information>
    </v-card-text>
  </v-card>
</template>

<script>
import BaseAreaChip from '~/components/BaseAreaChip.vue'
import BaseRestaurantInformation from '~/components/BaseRestaurantInformation.vue'
import BaseRestaurantSnsLink from '~/components/BaseRestaurantSnsLink.vue'

export default {
  components: {
    BaseAreaChip,
    BaseRestaurantInformation,
    BaseRestaurantSnsLink
  },
  props: {
    restaurant: {type: Object, required: true}
  },
}
</script>
