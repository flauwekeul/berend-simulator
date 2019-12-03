import Vue from 'vue'
import Vuex from 'vuex'
import * as cards from '../cards'
import { between0And100 } from '../utils'

Vue.use(Vuex)

const createState = () => ({
  day: 1,
  currentCard: cards.START,
  playedUniqueCardIds: new Set(),
  energy: 70,
  money: 70,
  joy: 40,
  statChanges: null,
})

const areStatsEqual = (stats1, stats2) =>
  stats1.energy === stats2.energy &&
  stats1.money === stats2.money &&
  stats1.joy === stats2.joy

const isAnyStat0 = ({ energy, money, joy }) =>
  energy === 0 || money === 0 || joy === 0

export default new Vuex.Store({
  state: createState(),
  mutations: {
    setCurrentCard(state, card) {
      state.currentCard = { ...card }
    },
  },
  actions: {
    // todo: move currentCard to end of cards list and pick random card weighted from start
    // e.g.: https://stackoverflow.com/a/44196624/660260
    nextCard({ state, commit, dispatch }, { id }) {
      if (isAnyStat0(state)) {
        return commit('setCurrentCard', cards.byId('gameOver'))
      }

      dispatch({ type: 'incrementDay' })

      if (state.currentCard.unique) {
        dispatch({ type: 'markCardAsPlayed', card: state.currentCard })
      }

      const currentCard = id
        ? cards.byId(id)
        : cards.random(cards.playable(state.playedUniqueCardIds))
      commit('setCurrentCard', currentCard)
    },
    startOver() {
      this.replaceState(createState())
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
