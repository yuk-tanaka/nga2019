<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app fixed temporary>
      <v-list nav>
        <v-list-item to="/" link nuxt>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>TOP</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/2019/participants" link nuxt>
          <v-list-item-action>
            <v-icon>mdi-view-list</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>2019参加一覧</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/2019/favorites" link nuxt>
          <v-list-item-action>
            <v-icon>mdi-cards-heart</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>2019チェックリスト</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/2019/nearby" link nuxt>
          <v-list-item-action>
            <v-icon>mdi-near-me</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>2019近い店を探す</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/restaurants" link nuxt>
          <v-list-item-action>
            <v-icon>mdi-store</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>過去参加店舗</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/inquiry" link nuxt>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>お問い合わせ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="blue darken-1" app dark fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link tag="v-toolbar-title" to="/">NGA非公式2019</router-link>
      <v-spacer/>
    </v-app-bar>
    <v-content>
      <v-container justify-center>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<style>
a {
  text-decoration: none;
}

a:hover {
  color: #F44336;
}

.container {
  max-width: 1200px;
}
</style>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  }
}
</script>
