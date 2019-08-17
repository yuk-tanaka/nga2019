<template>
  <span>
    <v-icon class="mr-2" small v-if="!name">mdi-map-marker</v-icon>
    <a :href="googleUrl"
       class="font-weight-medium"
       target="_blank">
      {{name || object.address}}
    </a>
  </span>
</template>

<script>
export default {
  props: {
    name: {type: String, default: null},
    object: {type: Object, required: true},
  },
  computed: {
    googleUrl: v => v.object.google_url || 'https://maps.google.co.jp/maps/search/' + v.object.address
  }
}
</script>
