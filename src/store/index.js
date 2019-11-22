import Vue from 'vue'
import Vuex from 'vuex'
import cards from '../cards'

Vue.use(Vuex)

const pickRandom = array => array[Math.floor(Math.random() * array.length)]

const between0And100 = amount => Math.max(0, Math.min(100, amount))

export default new Vuex.Store({
  state: {
    day: 1,
    currentCard: cards.babyIsBorn,
    playedUniqueCardIds: new Set(['babyIsBorn']),
    energy: 100,
    money: 50,
    joy: 100,
    gender: null,
  },
  mutations: {},
  actions: {
    randomCard({ state, dispatch }) {
      dispatch({ type: 'incrementDay' })

      if (state.currentCard.unique) {
        dispatch({ type: 'markCardAsPlayed', card: state.currentCard })
      }

      const playableCardIds = Object.keys(cards).filter(
        id => !state.playedUniqueCardIds.has(id),
      )
      state.currentCard = cards[pickRandom(playableCardIds)]
    },
    pickCard({ state }, { id }) {
      state.currentCard = cards[id]
    },
    incrementDay({ state }) {
      state.day += 1
    },
    markCardAsPlayed({ state }, { card }) {
      state.playedUniqueCardIds.add(card.id)
    },
    setGender({ state }, { gender }) {
      state.gender = gender
    },
    updateEnergy({ state }, { amount }) {
      state.energy = between0And100(state.energy + amount)
    },
    updateMoney({ state }, { amount }) {
      state.money = between0And100(state.money + amount)
    },
    updateJoy({ state }, { amount }) {
      state.joy = between0And100(state.joy + amount)
    },
  },
  modules: {},
})
