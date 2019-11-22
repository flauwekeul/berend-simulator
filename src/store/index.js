import Vue from 'vue'
import Vuex from 'vuex'
import cards from '../cards'
import { between0And100, pickRandom } from '../utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    day: 1,
    currentCard: cards.ajaxWins, // todo: random card?
    playedUniqueCardIds: new Set(['babyIsBorn']),
    energy: 70,
    money: 20,
    joy: 70,
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
    updateStats({ state }, { energy = 0, money = 0, joy = 0 }) {
      state.energy = between0And100(state.energy + energy)
      state.money = between0And100(state.money + money)
      state.joy = between0And100(state.joy + joy)
    },
  },
  modules: {},
})
