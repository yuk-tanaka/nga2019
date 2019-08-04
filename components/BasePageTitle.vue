<template>
  <v-flex xs12 class="mt-4 mb-4">
    <h1 class="display-1">{{title}}</h1>
  </v-flex>
</template>

<script>
export default {
  props: {
    title: {type: String, required: true}
  }
}
</script>
