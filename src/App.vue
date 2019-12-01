<template>
  <main class="main">
    <div class="stats">
      <Day :value="day" />
      <Stat name="energy" :value="energy" class="stat" />
      <Stat name="money" :value="money" class="stat" />
      <Stat name="joy" :value="joy" class="stat" />
    </div>
    <div class="cards">
      <button type="button" class="choose-left" @click="left">
        {{ leftChoice.name }}
      </button>
      <Card :card="currentCard">{{ description }}</Card>
      <button type="button" class="choose-right" @click="right">
        {{ rightChoice.name }}
      </button>
    </div>
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
  --color-primary: rgb(238, 108, 77);
  --color-secondary: rgb(106, 199, 253);
  --color-secondary-light: rgb(173, 225, 255);

  --color-lightest: rgb(225, 254, 255);
  --color-light: rgb(186, 207, 207);
  --color-grey: rgb(61, 90, 128);
  --color-dark: rgb(32, 38, 48);
  --color-shadow: rgba(255, 255, 255, 0.08);

  --font-stack-sans-serif: 'Rubik', sans-serif;
  --font-stack-cursive: 'Lobster Two', cursive;

  --spacing-small: 3vmin;
  --spacing-large: 5vmin;

  --border-radius: 1vmin;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0 var(--spacing-large);
  background-color: var(--color-dark);
  font-family: var(--font-stack-sans-serif);
  font-size: 3vmin;
  line-height: 1.4;
  color: var(--color-lightest);
}

button {
  width: 25%;
  height: 12vmin;
  border: none;
  padding: 0 3vmin;
  background-color: var(--color-grey);
  color: var(--color-secondary);
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  outline: none;
  transition: 400ms all;
}
button:hover {
  background-color: var(--color-secondary);
  color: var(--color-dark);
  width: calc(25% + 2.3vmin); /* magic value */
}

.choose-left {
  margin-left: -2vmin;
  margin-right: var(--spacing-large);
  border-radius: 999px var(--border-radius) var(--border-radius) 999px;
}
.choose-left:hover {
  margin-left: -4vmin;
}

.choose-right {
  margin-left: var(--spacing-large);
  margin-right: -2vmin;
  border-radius: var(--border-radius) 999px 999px var(--border-radius);
}
.choose-right:hover {
  margin-right: -4vmin;
}

.main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 90vmin;
  margin-left: auto;
  margin-right: auto;
}

.stats {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  padding: 1vmin var(--spacing-small);
  background-color: var(--color-shadow);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
}

.stat {
  flex: 1;
  height: 10vmin;
}

.cards {
  display: flex;
  flex: 1;
  align-items: center;
  margin-top: var(--spacing-small);
  background-color: var(--color-shadow);
  border-radius: var(--border-radius) var(--border-radius) 0 0;
}
</style>
