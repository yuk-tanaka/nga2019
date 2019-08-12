<template>
  <v-layout justify-center v-if="!isLastPage">
    <mugen-scroll :handler="handleMugenScroll" :should-handle="!isLoading" class="pt-3 pb-10">
      <v-btn color="primary" small text @click="handleMugenScroll">次のデータの読み込みが開始されないときはクリック</v-btn>
    </mugen-scroll>
  </v-layout>
</template>

<script>
import {mapGetters} from 'vuex'
import MugenScroll from 'vue-mugen-scroll'

export default {
  components: {
    MugenScroll
  },
  props: {
    isLastPage: {type: Boolean, required: true},
  },
  computed: {
    ...mapGetters('loading', ['isLoading'])
  },
  methods: {
    handleMugenScroll() {
      this.$emit('scroll')
    }
  }
}
</script>
