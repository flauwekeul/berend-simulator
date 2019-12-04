import Vue from 'vue'
import Vuex from 'vuex'
import * as cards from '../cards'
import { between0And100, index, move, shuffle } from '../utils'

Vue.use(Vuex)

const createState = () => ({
  day: 1,
  cards: shuffle(cards.DRAWABLE),
  currentCard: cards.START,
  energy: 50,
  money: 50,
  joy: 20,
  statChanges: null,
})

const areStatsEqual = (stats1, stats2) =>
  stats1.energy === stats2.energy &&
  stats1.money === stats2.money &&
  stats1.joy === stats2.joy

export default new Vuex.Store({
  state: createState(),
  mutations: {
    setCurrentCard(state, card) {
      state.currentCard = { ...card }

      // move card to bottom of stack
      const cardIndex = index(state.cards, card.id)
      state.cards = move(state.cards, cardIndex, state.cards.length - 1)
    },
  },
  actions: {
    nextCard({ state, commit, dispatch }, { id }) {
      if (state.energy === 0 || state.money === 0 || state.joy === 0) {
        return commit('setCurrentCard', cards.byId('gameOver'))
      }

      dispatch({ type: 'incrementDay' })

      if (state.currentCard.unique) {
        dispatch({ type: 'removeCardFromDeck', card: state.currentCard })
      }

      const currentCard = id
        ? cards.byId(id)
        : cards.random(state.cards.slice(0, 3))
      commit('setCurrentCard', currentCard)
    },
    startOver() {
      this.replaceState(createState())
    },
    incrementDay({ state }) {
      state.day += 1
    },
    removeCardFromDeck({ state }, { card }) {
      const cardIndex = index(state.cards, card.id)
      // mutates state.cards in-place, but doesn't seem to be a problem
      state.cards.splice(cardIndex, 1)
    },
    updateStats({ state }, { energy = 0, money = 0, joy = 0 }) {
      state.energy = between0And100(state.energy + energy)
      state.money = between0And100(state.money + money)
      state.joy = between0And100(state.joy + joy)
    },
    showStatChanges({ state }, { energy, money, joy }) {
      if (
        state.statChanges &&
        areStatsEqual(state.statChanges, { energy, money, joy })
      ) {
        return
      }

      state.statChanges = { energy, money, joy }
    },
  },
  modules: {},
})
