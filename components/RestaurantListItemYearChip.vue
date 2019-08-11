<template>
  <div>
    <v-chip
      v-for="participant in participants"
      :key="participant.year"
      color="blue lighten-4"
      class="font-weight-medium mr-3"
      label
      small>
      <span class="font-weight-medium">{{participant.year}}</span>
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    participants: {type: Array, required: true}
  }
}
</script>
