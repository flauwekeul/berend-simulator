import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const between0And100 = amount => Math.max(0, Math.min(100, amount))

export default new Vuex.Store({
  state: {
    energy: 100,
    money: 50,
    joy: 100,
  },
  mutations: {
    updateStat(state, { stat, amount }) {
      state[stat] = between0And100(state[stat] + amount)
    },
  },
  actions: {},
  modules: {},
})
