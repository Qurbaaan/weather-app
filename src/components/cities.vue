<template>
  <div>
    <h1>Weather List</h1>
    <div v-if="this.$store.getters.isCitiesDataRecived" class="cities-list">
      <b-list-group>
        <b-list-group-item  v-for="(obj, index) in cities.data" :key="index">
          <router-link style="display: block;" :to="`/weather/${obj.city}?lat=${obj.latitude}&lon=${obj.longitude}`">
              {{obj.city}}
          </router-link>
        </b-list-group-item>
      </b-list-group>
    </div>
    <div v-else class="cities-list">loading ...</div>
  </div>
</template>

<script>
export default {
  computed: {
    cities() {
      return this.$store.getters.citiesData;
    },
  },
  created() {
    this.$store.dispatch("requestCities");
  },
  methods: {
  }
};
</script>

<style scoped>
.cities-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #429ea6;
  margin-top: 100px;
}

.cities-list__city {
  font-size: 20px;
  margin: 0;
}

.cities-list__temp {
  display: flex;
  align-items: flex-start;
  color: #16f4d0;
  font-size: 200px;
  font-weight: 200;
  margin: 0;
}

.cities-list__temp span {
  font-size: 30px;
  font-weight: 400;
  margin-top: 35px;
}

.cities-list__status {
  font-size: 20px;
  margin: 0;
}
</style>