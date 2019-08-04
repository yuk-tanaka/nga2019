<template>
  <v-container grid-list-lg class="pa-0">
    <v-layout fill-height fluid wrap>
      <v-flex xs12 sm6 md4 v-for="restaurant in restaurants" :key="restaurant.id">
        <restaurant-list-item :restaurant="restaurant"></restaurant-list-item>
      </v-flex>
    </v-layout>
    <base-scroll :isLastPage="isLastPage" @scroll="scroll"></base-scroll>
  </v-container>
</template>

<script>
import BaseScroll from '~/components/BaseScroll.vue'
import RestaurantListItem from '~/components/RestaurantListItem.vue'

export default {
  components: {
    BaseScroll,
    RestaurantListItem
  },
  props: {
    isLastPage: {type: Boolean, required: true},
    restaurants: {type: Array, required: true}
  },
  methods: {
    scroll() {
      this.$emit('scroll')
    }
  }
}
</script>
