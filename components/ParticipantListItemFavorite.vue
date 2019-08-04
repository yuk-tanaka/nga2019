<template>
  <v-btn :color="color" icon text @click="handleClick">
    <v-icon>mdi-heart</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    participant: {type: Object, required: true}
  },
  data() {
    return {
      isChecked: null
    }
  },
  computed: {
    color: v => v.isChecked ? 'pink' : 'grey lighten-1'
  },
  mounted() {
    this.isChecked = !!Object.keys(localStorage).find(val => parseInt(val) === this.participant.id)
  },
  methods: {
    handleClick() {
      this.isChecked ? this.remove() : this.check()
    },
    check() {
      this.isChecked = true
      localStorage.setItem(this.participant.id, 'true')
    },
    remove() {
      this.isChecked = false
      localStorage.removeItem(this.participant.id);
    }
  }
}
</script>
