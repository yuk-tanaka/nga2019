<template>
  <v-card>
    <v-card-title primary-title>
      <h2 class="headline">開催都市・エリアで絞り込み</h2>
    </v-card-title>
    <v-card-text>
      <v-layout wrap>
        <v-flex xs12>
          <v-combobox
            v-model="selectedCities"
            :items="cities"
            item-text="name"
            item-value="id"
            label="都市名を選択（複数選択可）"
            chips
            multiple
            @change="fetchAreas"
          ></v-combobox>
        </v-flex>
        <v-flex xs12 v-if="hasArea">
          <h3 class="title mb-2">地域名を選択</h3>
          <v-btn class="mb-2 mr-2" color="primary" small　@click="setAll">全選択</v-btn>
          <v-btn class="mb-2" color="error" small @click="unsetAll">全解除</v-btn>
          <v-layout row wrap>
            <v-flex xs6 sm4 md3 lg2 v-for="area in areas" :key="area.id">
              <v-checkbox
                v-model="selectedAreas"
                :label="area.name"
                :value="area.id"
                color="primary"
                multiple
              ></v-checkbox>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  components: {},
  props: {
    areasUrl: {type: String, required: true},
    citiesUrl: {type: String, required: true}
  },
  data() {
    return {
      areas: [],
      cities: [],
      selectedAreas: [],
      selectedCities: []
    }
  },
  computed: {
    hasArea: v => v.areas.length > 0,
    isSelectedCity: v => v.selectedCities.length > 0
  },
  watch: {
    selectedAreas() {
      this.$emit('input', this.selectedAreas)
    }
  },
  async created() {
    const res = await this.$axios.get(this.citiesUrl)
    this.cities = res.data
  },
  methods: {
    async fetchAreas() {
      //都市選択ない場合にgetすると422error
      if (!this.isSelectedCity) {
        this.areas = []
        this.selectedAreas = []
        return;
      }

      const res = await this.$axios.get(this.areasUrl,
        {params: {cityIds: this.selectedCities.map(cities => cities.id)}}
      )
      this.areas = res.data
      //選択されていない都市のareaを選択解除
      this.selectedAreas = this.selectedAreas.filter(selected => this.areas.find(area => area.id === selected))
    },
    setAll() {
      this.selectedAreas = this.areas.map(area => area.id)
    },
    unsetAll() {
      this.selectedAreas = []
    }
  }
}
</script>
