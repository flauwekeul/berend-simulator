import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const between0And100 = amount => Math.max(0, Math.min(100, amount))

export default new Vuex.Store({
  state: {
    energy: 100,
    money: 50,
    joy: 100,
    gender: null,
  },
  mutations: {
    setGender(state, { gender }) {
      state.gender = gender
    },
    updateEnergy(state, { amount }) {
      state.energy = between0And100(state.energy + amount)
    },
    updateMoney(state, { amount }) {
      state.money = between0And100(state.money + amount)
    },
    updateJoy(state, { amount }) {
      state.joy = between0And100(state.joy + amount)
    },
  },
  actions: {},
  modules: {},
})
