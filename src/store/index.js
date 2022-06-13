import Vue from 'vue'
import Vuex from 'vuex'

import cities from './modules/cities'
import weather from './modules/weather'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cities,
    weather
  }
})