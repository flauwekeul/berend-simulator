import Vue from 'vue'
import Vuex from 'vuex'
import cards from '../cards'
import { between0And100, pickRandom } from '../utils'

Vue.use(Vuex)

const randomPlayableCard = (playedUniqueCardIds = new Set()) => {
  const playableCardIds = Object.keys(cards).filter(
    id => !playedUniqueCardIds.has(id),
  )
  return cards[pickRandom(playableCardIds)]
}

export default new Vuex.Store({
  state: {
    day: 1,
    currentCard: cards.tinder1,
    playedUniqueCardIds: new Set(),
    energy: 70,
    money: 70,
    joy: 40,
  },
  mutations: {},
  actions: {
    // todo: move currentCard to end of cards list and pick random card weighted from start
    // e.g.: https://stackoverflow.com/a/44196624/660260
    nextCard({ state, dispatch }, { id }) {
      dispatch({ type: 'incrementDay' })

      if (state.currentCard.unique) {
        dispatch({ type: 'markCardAsPlayed', card: state.currentCard })
      }

      state.currentCard = id
        ? cards[id]
        : randomPlayableCard(state.playedUniqueCardIds)
      console.log(state.currentCard.id)
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
