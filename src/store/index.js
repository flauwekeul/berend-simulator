import Vue from 'vue'
import Vuex from 'vuex'
import cards from '../cards'

Vue.use(Vuex)

const pickRandom = array => array[Math.floor(Math.random() * array.length)]

const between0And100 = amount => Math.max(0, Math.min(100, amount))

export default new Vuex.Store({
  state: {
    currentCard: cards.babyIsBorn,
    playedUniqueCardIds: new Set(['babyIsBorn']),
    energy: 100,
    money: 50,
    joy: 100,
    gender: null,
  },
  mutations: {
    nextCard(state) {
      if (state.currentCard.unique) {
        state.playedUniqueCardIds.add(state.currentCard.id)
      }

      const playableCardIds = Object.keys(cards).filter(
        id => !state.playedUniqueCardIds.has(id),
      )
      state.currentCard = cards[pickRandom(playableCardIds)]
    },
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
