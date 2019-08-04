<template>
  <v-layout wrap>
    <base-page-title title="お問い合わせ"></base-page-title>
    <v-flex xs12 class="mb-6">
      <p>当サイト・当サイト管理者へのお問い合わせは以下のいずれかよりお願いします。</p>
      <dl>
        <dd>Twitter</dd>
        <dt class="mb-2">
          <v-icon class="mr-2" small>mdi-twitter</v-icon>
          <a href="https://twitter.com/achel_b8" target="_blank">@achel_b8</a>
        </dt>
        <dd>Email</dd>
        <dt class="mb-2">
          <v-img src="/email.png" max-width="200"></v-img>
        </dt>
      </dl>
    </v-flex>
  </v-layout>
</template>

<script>
import BasePageTitle from '~/components/BasePageTitle.vue'

export default {
  components: {
    BasePageTitle
  },
  head() {
    return {
      title: 'お問い合わせ'
    }
  }
}
</script>
