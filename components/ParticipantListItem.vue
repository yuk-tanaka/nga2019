<template>
  <v-card>
    <v-card-title primary-title>
      <v-layout align-center wrap>
        <v-flex xs9>
          <base-area-chip :area="participant.restaurant.area"></base-area-chip>
        </v-flex>
        <v-flex xs3 class="text-right">
          <participant-list-item-favorite :participant="participant"></participant-list-item-favorite>
        </v-flex>
        <v-flex xs12>
          <h3 class="title">{{participantName}}</h3>
        </v-flex>
        <v-flex xs12>
          <base-restaurant-sns-link :restaurant="participant.restaurant"></base-restaurant-sns-link>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text>
      <participant-list-item-information :participant="participant"></participant-list-item-information>
    </v-card-text>
    <v-card-actions>
      <v-layout align-end justify-center class="ma-3">
        <v-btn :href="showUrl" color="primary" nuxt>参加店舗詳細</v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
import BaseAreaChip from '~/components/BaseAreaChip.vue'
import ParticipantListItemInformation from '~/components/ParticipantListItemInformation.vue'
import BaseRestaurantSnsLink from '~/components/BaseRestaurantSnsLink.vue'
import ParticipantListItemFavorite from '~/components/ParticipantListItemFavorite.vue'

export default {
  components: {
    BaseAreaChip,
    BaseRestaurantSnsLink,
    ParticipantListItemFavorite,
    ParticipantListItemInformation
  },
  props: {
    participant: {type: Object, required: true}
  },
  computed: {
    participantName: v => v.participant.restaurant.name + ' × ' + v.participant.brewery.name,
    showUrl: v => v.$route.path + '/' + v.participant.id
  }
}
</script>
