import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import config from '@/config/weather';

Vue.use(Vuex);

const state = {
  weatherResponse: {},
  isWeatherDataRecived: false,
  weatherFetchError: {},
};

const actions = {
  requestWeather({ commit }, param) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${config.API_URL}?lat=${param.lat}&lon=${param.lon}&key=${config.API_KEY}`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        withCredentials: false,
        method: 'GET',
      })
        .then((resp) => {
          commit('weatherResponseSuccess', resp.data.data[0]);
          resolve(resp.data);
        })
        .catch((error) => {
          commit('weatherResponseError', error);
          reject(error);
        });
    });
  },
};

const mutations = {
  weatherResponseSuccess(state, payload) {
    state.weatherResponse = payload;
    state.isWeatherDataRecived = true;
  },
  weatherResponseError(state, payload) {
    state.weatherFetchError = payload;
    state.isWeatherDataRecived = false;
  },
};

const getters = {
  weatherData: (state) => state.weatherResponse,
  isWeatherDataRecived : (state) => state.isWeatherDataRecived,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
