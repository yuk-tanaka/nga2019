<template>
  <v-btn
    :loading="isLoading"
    :disabled="isLoading"
    color="primary"
    class="subtitle-1"
    x-large
    @click="fetchLocation"
  >
    <v-icon class="mr-2">mdi-magnify</v-icon>
    <span class="">現在地から近い店を探す</span>
  </v-btn>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  components: {},
  props: {},
  data() {
    return {
      //エラーコード0～3
      errorMessages: [
        '原因不明のエラーが発生しました。',
        '位置情報の取得が許可されませんでした。',
        '電波状況などで位置情報が取得できませんでした。',
        '位置情報の取得に時間がかかり過ぎてタイムアウトしました。'
      ],
      option: {
        timeout: 10 * 1000, //10秒
        maximumAge: 0, //常に新情報を取得
        enableHighAccuracy: true //GPSを使用
      }
    }
  },
  computed: {
    ...mapGetters('loading', ['isLoading'])
  },
  methods: {
    async fetchLocation() {
      if (!navigator.geolocation) {
        alert('お使いの端末では位置情報を取得できません。')
      }
      navigator.geolocation.getCurrentPosition(
        position => this.$emit('fetch', position.coords.latitude, position.coords.longitude),
        err => alert('エラー：' + err.code + '　' + this.errorMessages[err.code]),
        this.option
      );
    }
  }
}
</script>
