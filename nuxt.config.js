import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + '日本酒ゴーアラウンド非公式ポータル',
    title: '',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: '毎年10月1日、日本酒の日に開催されるイベント「日本酒ゴーアラウンド（NGA）」の非公式ファンサイト。開催全都市の参加店舗情報および2018年度以降の参加店舗情報を提供。チェックリスト・タイムラインなど便利な機能もログインなしで利用可能。'
      },
      {hid: 'og:title', property: 'og:title', content: '日本酒ゴーアラウンド非公式ポータル'},
      {hid: 'og:description', property: 'og:description', content: '毎年10月1日、日本酒の日に開催されるイベント「日本酒ゴーアラウンド（NGA）」の非公式ファンサイト。開催全都市の参加店舗情報および2018年度以降の参加店舗情報を提供。'},
      {hid: 'og:type', property: 'og:type', content: 'website'},
      {hid: 'og:url', property: 'og:url', content: 'https://nga.website/'},
      {hid: 'og:image', property: 'og:image', content: 'https://nga.website/logo.jpg'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@achel_b8'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#F9F9F9',
    height: '4px'
  },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    ['@nuxtjs/google-analytics', {id: 'UA-123753740-1'}],
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    icons: {
      iconfont: 'mdiSvg',
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  env: {
    NGA_API_URL: process.env.NGA_API_URL
  }
}
