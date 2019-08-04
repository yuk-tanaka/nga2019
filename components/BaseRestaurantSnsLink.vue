<template>
  <div class="sns-link">
    <template v-if="restaurant.web">
      <v-btn :href="restaurant.web" color="green" target="_blank" icon small text>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </template>
    <template v-if="restaurant.twitter">
      <v-btn :href="restaurant.twitter" color="light-blue" target="_blank" icon small text>
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
    </template>
    <template v-if="restaurant.facebook">
      <v-btn :href="restaurant.facebook" color="indigo" target="_blank" icon small text>
        <v-icon>mdi-facebook-box</v-icon>
      </v-btn>
    </template>
    <template v-if="restaurant.tabelog">
      <v-btn :href="restaurant.tabelog" color="amber" target="_blank" icon small text>
        <v-icon>mdi-silverware-fork-knife</v-icon>
      </v-btn>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    restaurant: {type: Object, required: true}
  }
}
</script>
