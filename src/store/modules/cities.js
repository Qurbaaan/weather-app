import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import config from '@/config/cities';

Vue.use(Vuex);

const state = {
  citiesResponse: {},
  isCitiesDataRecived: false,
  citiesFetchError: {},
};
const actions = {
  requestCities({ commit }) {
    return new Promise((resolve, reject) => {
      axios({
        url: config.url,
        headers:config.headers,
        "params":{
          "countryIds":"PK",
          "limit":"10"
        },
        method: 'GET',
      })
        .then((resp) => {
          commit('citiesResponseSuccess', resp.data);
          resolve(resp.data);
        })
        .catch((error) => {
          commit('citiesResponseError', error);
          reject(error);
        });
    });
  },
};

const mutations = {
  citiesResponseSuccess(state, payload) {
    state.citiesResponse = payload;
    state.isCitiesDataRecived = true;
  },
  citiesResponseError(state, payload) {
    state.citiesFetchError = payload;
    state.isCitiesDataRecived = false;
  },
};

const getters = {
  citiesData: (state) => state.citiesResponse,
  isCitiesDataRecived : (state) => state.isCitiesDataRecived,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
