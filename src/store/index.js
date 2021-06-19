import Vue from 'vue'
import Vuex from 'vuex'

import bonds from './bonds'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    bonds
  }
})
