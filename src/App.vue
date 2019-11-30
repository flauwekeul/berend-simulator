<template>
  <main class="main">
    <div class="stats">
      <Day :value="day" />
      <Stat name="energy" :value="energy" class="stat" />
      <Stat name="money" :value="money" class="stat" />
      <Stat name="joy" :value="joy" class="stat" />
    </div>
    <button type="button" @click="left">{{ leftChoice.name }}</button>
    <div class="cards">
      <Card>{{ description }}</Card>
    </div>
    <button type="button" @click="right">{{ rightChoice.name }}</button>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import Stat from './components/Stat'
import Day from './components/Day'
import Card from './components/Card'

export default {
  name: 'app',
  components: { Stat, Day, Card },
  computed: {
    ...mapState(['day', 'currentCard', 'energy', 'money', 'joy']),
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

<style>
:root {
  --color-primary: rgba(238, 108, 77, 1);
  --color-secondary: rgb(106, 199, 253);

  --color-lightest: rgb(225, 254, 255);
  --color-light: rgb(186, 207, 207);
  --color-grey: rgba(61, 90, 128, 1);
  --color-dark: rgb(32, 38, 48);
  --color-shadow: rgba(255, 255, 255, 0.08);

  --spacing-small: 3vmin;
  --spacing-large: 5vmin;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0 var(--spacing-large);
  background-color: var(--color-dark);
  font-family: 'Rubik', sans-serif;
  font-size: 3vmin;
  line-height: 1.4;
  color: var(--color-lightest);
}

.main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 75vmin;
  margin-left: auto;
  margin-right: auto;
}

.stats {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  padding: 1vmin var(--spacing-small);
  background-color: var(--color-shadow);
  border-radius: 0 0 1vmin 1vmin;
}

.stat {
  flex: 1;
  height: 10vmin;
}

.cards {
  flex: 1;
  margin-top: var(--spacing-small);
  background-color: var(--color-shadow);
  border-radius: 1vmin 1vmin 0 0;
  overflow: hidden;
}
</style>
