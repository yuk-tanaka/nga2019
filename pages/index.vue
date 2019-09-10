<template>
  <v-layout wrap>
    <base-page-title :title="title"></base-page-title>
    <v-flex xs12 class="mb-6">
      <figure>
        <v-img src="/logo.jpg" max-width="476"></v-img>
        <figcaption>
          <a href="http://blog.livedoor.jp/manjigatame3/" target="_blank">&copy;日本酒卍固め</a>
        </figcaption>
      </figure>
    </v-flex>
    <v-flex xs12 class="mb-6">
      <h2 class="headline mb-1">概要</h2>
      <p>
        このページは、<span class="font-weight-bold">2019-10-01</span>の<span class="font-weight-bold">日本酒の日</span>に開催されるイベント、
        「日本酒ゴーアラウンド2019」の<span class="font-weight-bold">非公式</span>情報サイトです。
      </p>
      <ul>
        <li>エリアを横断した
          <nuxt-link to="/2019/participants">店舗情報の検索</nuxt-link>
        </li>
        <li>会員登録なく利用できる
          <nuxt-link to="/2019/favorites">チェックリスト</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/2019//participants">営業時間のタイムライン表示</nuxt-link>
        </li>
        <li>位置情報を利用した
          <nuxt-link to="/2019/nearby">近隣店舗の検索</nuxt-link>
        </li>
        <li>2018年度以降の全国の
          <nuxt-link to="/restaurants">過去参加店舗の検索</nuxt-link>
        </li>
      </ul>
      <p>
        などの機能を提供しています。
      </p>
      <p>
        2019年度の参加店舗情報に関しては、情報公開しだい随時登録します。
      </p>
    </v-flex>
    <v-flex xs12 class="mb-6">
      <h2 class="headline">注意事項など</h2>
      <ul>
        <li>当サイトは<span class="font-weight-bold">非公式のファンサイト</span>であり、イベント運営団体、関係者とは一切関係ございません。</li>
        <li>最新情報、イベント参加方法などは<a href="http://blog.livedoor.jp/manjigatame3/" target="_blank">運営公式</a>をご参照ください。
        <li>データはWebクローラーおよび各種APIにて自動収集を行っております。情報に誤りがある場合は
          <nuxt-link to="/inquiry">お問い合わせ</nuxt-link>
          ください。
        </li>
        <li>機能面での不具合、ご希望、苦情、その他ご意見も同様に
          <nuxt-link to="/inquiry">お問い合わせ</nuxt-link>
          を受け付けております。
        </li>
        <li>
          <a href="https://caniuse.com/#feat=promises" target="_blank">InternetExplorerは動作未対応です。</a>
          <a href="https://www.google.com/intl/ja_ALL/chrome/" target="_blank">Chrome</a> など、他のブラウザから閲覧するようにしてください。
          <ul>
            <li>
              Microsoftも<a href="https://blogs.technet.microsoft.com/jpieblog/2018/07/18/internet-explorer-support/"
                           target="_blank">こう言っていますし、</a>
              IEご利用中の方は、ブラウザの乗り換えをおすすめします。
            </li>
          </ul>
        </li>
        <li>当サイトのテキスト・画像の無断転載・無断複製を禁じます。引用を行う場合は、引用元を明示してください。</li>
        <li>当日はのみすぎてぶっ倒れないように。これは主に自分への戒め。</li>
        <li>そしてめっちゃ水のみましょう。ビールは水ではない。これも戒め。</li>
      </ul>
    </v-flex>
    <v-flex xs12 class="mb-6">
      <h2 class="headline">リンク</h2>
      <ul>
        <li><a href="http://blog.livedoor.jp/manjigatame3/" target="_blank">日本酒卍固め</a></li>
        <li><a href="https://nga-osaka.com/" target="_blank">日本酒ゴーアラウンド大阪</a></li>
        <li><a href="http://www.ne.jp/asahi/nga/guide/" target="_blank">私家版日本酒ゴーアラウンド大阪2017参加ガイド</a></li>
        <li><a href="http://morohaku.jp/article/186364090.html" target="_blank">
          もろはく 日本酒ゴーアラウンド2019札幌参加店</a>
        </li>
        <li><a href="https://www.facebook.com/NGASENDAI/" target="_blank">
          <v-icon color="primary" small>mdi-facebook-box</v-icon>
          日本酒ゴーアラウンド仙台</a>
        </li>
        <li><a href="https://www.facebook.com/sakeome1001/" target="_blank">
          <v-icon color="primary" small>mdi-facebook-box</v-icon>
          日本酒ゴーアラウンド東京版</a>
        </li>
        <li><a href="https://www.facebook.com/ngashizuoka/" target="_blank">
          <v-icon color="primary" small>mdi-facebook-box</v-icon>
          日本酒ゴーアラウンド静岡</a>
        </li>
        <li><a
          href="https://www.facebook.com/%E6%97%A5%E6%9C%AC%E9%85%92%E3%82%B4%E3%83%BC%E3%82%A2%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89%E5%90%8D%E5%8F%A4%E5%B1%8B-1879686945686854/"
          target="_blank">
          <v-icon color="primary" small>mdi-facebook-box</v-icon>
          日本酒ゴーアラウンド名古屋</a></li>
        <li><a
          href="https://www.facebook.com/pages/category/Event/%E6%97%A5%E6%9C%AC%E9%85%92%E3%82%B4%E3%83%BC%E3%82%A2%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%892019%E4%BA%AC%E9%83%BD%E7%89%88-301221853760343/"
          target="_blank">
          <v-icon color="primary" small>mdi-facebook-box</v-icon>
          日本酒ゴーアラウンド2019京都版</a></li>
        <li>
          <v-icon color="primary" small>mdi-facebook-box</v-icon>
          <a href="https://www.facebook.com/NGA.KOBE/" target="_blank"><i
          class="fab fw fa-facebook"></i>日本酒ゴーアラウンド神戸</a></li>
        <li>
          <v-icon color="primary" small>mdi-facebook-box</v-icon>
          <a href="https://www.facebook.com/pages/category/Event/%E6%97%A5%E6%9C%AC%E9%85%92%E3%82%B4%E3%83%BC%E3%82%A2%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89%E5%A7%AB%E8%B7%AF-436461490096086/" target="_blank"><i
          class="fab fw fa-facebook"></i>日本酒ゴーアラウンド姫路</a></li>
        <li>
          <v-icon color="primary" small>mdi-facebook-box</v-icon>
          <a href="https://www.facebook.com/NGAOKYAMA/" target="_blank"><i
          class="fab fw fa-facebook"></i>日本酒ゴーアラウンド岡山</a></li>
        <li>
          <v-icon color="primary" small>mdi-facebook-box</v-icon>
          <a href="https://www.facebook.com/pages/category/Event/%E6%97%A5%E6%9C%AC%E9%85%92%E3%82%B4%E3%83%BC%E3%82%A2%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89%E6%9D%BE%E6%B1%9F-2320886404658462/" target="_blank"><i
          class="fab fw fa-facebook"></i>日本酒ゴーアラウンド松江</a></li>
        <li><a href="https://ja-jp.facebook.com/sake1001hiroshima/" target="_blank">
          <v-icon color="primary" small>mdi-facebook-box</v-icon>
          日本酒ゴーアラウンド広島</a></li>
        <li><a href="https://www.facebook.com/%E6%97%A5%E6%9C%AC%E9%85%92%E3%82%B4%E3%83%BC%E3%82%A2%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89%E9%AB%98%E7%9F%A5-603294853496197/" target="_blank">
          <v-icon color="primary" small>mdi-facebook-box</v-icon>
          日本酒ゴーアラウンド高知</a></li>
        <li><a href="https://www.facebook.com/NGA2017FUKUOKA/" target="_blank">
          <v-icon color="primary" small>mdi-facebook-box</v-icon>
          日本酒ゴーアラウンド福岡</a>
        </li>
      </ul>
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
      titleTemplate: null,
      title: this.title
    }
  },
  data() {
    return {
      title: '日本酒ゴーアラウンド非公式ポータル2019'
    }
  },
  created() {

  }
}
</script>
