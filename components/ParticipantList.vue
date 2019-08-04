<template>
  <v-container grid-list-lg class="pa-0">
    <v-layout fill-height fluid wrap>
      <v-flex xs12 sm6 md4 v-for="participant in participants" :key="participant.id">
        <participant-list-item :participant="participant"></participant-list-item>
      </v-flex>
    </v-layout>
    <base-scroll :isLastPage="isLastPage" @scroll="scroll"></base-scroll>
  </v-container>
</template>

<script>
import BaseScroll from '~/components/BaseScroll.vue'
import ParticipantListItem from '~/components/ParticipantListItem.vue'

export default {
  components: {
    BaseScroll,
    ParticipantListItem
  },
  props: {
    isLastPage: {type: Boolean, required: true},
    participants: {type: Array, required: true}
  },
  methods: {
    scroll() {
      this.$emit('scroll')
    }
  }
}
</script>
