<template>
  <main class="main">
    <div class="stats">
      <Day :value="day" />
      <Stat name="energy" :value="energy" class="stat" />
      <Stat name="money" :value="money" class="stat" />
      <Stat name="joy" :value="joy" class="stat" />
    </div>
    <button type="button" @click="left">{{ leftChoice.name }}</button>
    <p>{{ description }}</p>
    <button type="button" @click="right">{{ rightChoice.name }}</button>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import Stat from './components/Stat'
import Day from './components/Day'

export default {
  name: 'app',
  components: { Stat, Day },
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

  --color-light: rgb(225, 254, 255);
  --color-grey: rgba(61, 90, 128, 1);
  --color-dark: rgb(32, 38, 48);
}

body {
  margin: 0 5vmin;
  background-color: var(--color-dark);
  font-family: 'Rubik', sans-serif;
  font-size: 4vmin;
  line-height: 1.4;
  color: var(--color-light);
}

.main {
  max-width: 90vmin;
  margin-left: auto;
  margin-right: auto;
}

.stats {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  padding: 1vmin 4vmin;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 0 0 1vmin 1vmin;
}

.stat {
  flex: 1;
  height: 10vmin;
}
</style>
