<template>
  <div>
    <div>Dag {{ day }}</div>
    <div>Energie: {{ energy }} Geld: {{ money }} Geluk: {{ joy }}</div>
    <h1>{{ header }}</h1>
    <button type="button" @click="left">{{ leftChoice.name }}</button>
    <p>{{ description }}</p>
    <button type="button" @click="right">{{ rightChoice.name }}</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState(['day', 'currentCard', 'energy', 'money', 'joy']),
    header() {
      return this.currentCard.name
    },
    description() {
      const { description } = this.currentCard
      return typeof description === 'function' ? description() : description
    },
    leftChoice() {
      return this.currentCard.choices[0]
    },
    rightChoice() {
      return this.currentCard.choices[1]
    },
  },
  methods: {
    left() {
      this.leftChoice.actions.forEach(action => {
        this.$store.dispatch(action)
      })
    },
    right() {
      this.rightChoice.actions.forEach(action => {
        this.$store.dispatch(action)
      })
    },
  },
}
</script>

<style></style>
