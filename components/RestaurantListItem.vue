<template>
  <v-card>
    <v-card-title primary-title>
      <v-layout wrap>
        <v-flex xs12>
          <base-area-chip :area="restaurant.area"></base-area-chip>
        </v-flex>
        <v-flex xs12>
          <restaurant-list-item-year-chip :participants="restaurant.participants"></restaurant-list-item-year-chip>
        </v-flex>
        <v-flex xs12>
          <h3 class="title">
            {{restaurant.name}}
            <v-chip
              v-if="restaurant.is_closed"
              color="red lighten-4"
              class="ml-3"
              label
              small>
              <span class="font-weight-medium">閉業</span>
            </v-chip>
          </h3>
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
import RestaurantListItemYearChip from '~/components/RestaurantListItemYearChip.vue'

export default {
  components: {
    BaseAreaChip,
    BaseRestaurantInformation,
    BaseRestaurantSnsLink,
    RestaurantListItemYearChip
  },
  props: {
    restaurant: {type: Object, required: true}
  },
}
</script>
