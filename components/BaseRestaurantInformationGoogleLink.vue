<template>
  <span>
    <v-icon class="mr-2" small>mdi-map-marker</v-icon>
    <a :href="googleUrl"
       class="font-weight-medium"
       target="_blank">
      {{restaurant.address}}
    </a>
  </span>
</template>

<script>
export default {
  props: {
    restaurant: {type: Object, required: true}
  },
  computed: {
    googleUrl: v => v.restaurant.google_url || 'https://maps.google.co.jp/maps/search/' + v.restaurant.address
  }
}
</script>
