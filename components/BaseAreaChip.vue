<template>
  <v-chip :color="areaColor" text-color="white">
    <v-avatar :class="cityColor" class="mr-1">
      <span class="font-weight-medium">{{shortedCityName}}</span>
    </v-avatar>
    <span class="font-weight-medium">{{area.name}}</span>
  </v-chip>
</template>

<script>

export default {
  props: {
    area: {type: Object, required: true}
  },
  computed: {
    areaColor: v => v.area.color + ' lighten-1',
    cityColor: v => v.area.color + ' darken-4',
    //大阪以外は1文字目
    shortedCityName: v => v.area.city.name === '大阪' ? '阪' : v.area.city.name.slice(0, 1)
  }
}
</script>
