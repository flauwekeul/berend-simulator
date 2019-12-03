<template>
  <div>
    <svg
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      v-if="name === 'energy'"
    >
      <use class="icon__background" xlink:href="#icon-lightning" />
      <use
        class="icon__bar"
        xlink:href="#icon-lightning"
        :style="{ clipPath }"
      />
    </svg>
    <svg
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      v-if="name === 'money'"
    >
      <use class="icon__background" xlink:href="#icon-euro" />
      <use class="icon__bar" xlink:href="#icon-euro" :style="{ clipPath }" />
    </svg>
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" v-if="name === 'joy'">
      <use class="icon__background" xlink:href="#icon-heart" />
      <use class="icon__bar" xlink:href="#icon-heart" :style="{ clipPath }" />
    </svg>
    <div class="change" v-if="changeFor('energy')">
      {{ changeFor('energy') }}
    </div>
    <div class="change" v-if="changeFor('money')">
      {{ changeFor('money') }}
    </div>
    <div class="change" v-if="changeFor('joy')">
      {{ changeFor('joy') }}
    </div>
    <div class="label" v-if="name === 'energy'">
      <span class="label__value">{{ value }}</span> energie
    </div>
    <div class="label" v-if="name === 'money'">
      <span class="label__value">{{ value }}</span> geld
    </div>
    <div class="label" v-if="name === 'joy'">
      <span class="label__value">{{ value }}</span> geluk
    </div>
  </div>
</template>

<script>
// todo: split into several components

import { mapState } from 'vuex'
import { LARGE, MEDIUM, SMALL } from '../cards/stat-deltas'

export default {
  props: { name: String, value: Number },
  computed: {
    ...mapState(['statChanges']),
    clipPath() {
      return `inset(${100 - this.value}% 0 0 0)`
    },
  },
  methods: {
    changeFor(stat) {
      return (
        this.name === stat &&
        this.statChanges &&
        {
          [SMALL]: '!',
          [MEDIUM]: '!!',
          [LARGE]: '!!!',
        }[Math.abs(this.statChanges[stat])]
      )
    },
  },
}
</script>

<style>
.icon {
  width: 100%;
  height: 100%;
}

.icon__background {
  color: var(--color-grey);
}

.icon__bar {
  clip-path: inset(0 0 0 0);
  color: var(--color-primary);
  transition: clip-path 1s ease-in-out;
}

.label {
  opacity: 0;
  position: relative;
  width: 75%;
  margin: 0 auto;
  transition: 400ms all;
  background-color: var(--color-grey);
  color: var(--color-light);
  padding: 1vmin;
  text-align: center;
  border-radius: 1vmin;
  font-size: 2.5vmin;
}
.label::before {
  content: '';
  display: block;
  position: absolute;
  bottom: 100%;
  left: calc(50% - 1vmin);
  width: 0;
  height: 0;
  border-left: 1vmin solid transparent;
  border-right: 1vmin solid transparent;
  border-bottom: 1vmin solid var(--color-grey);
}
.icon:hover ~ .label {
  opacity: 1;
  margin-top: 1vmin;
}
.label__value {
  color: var(--color-primary);
}

.change {
  animation: glow 800ms infinite alternate-reverse;
  color: var(--color-primary);
  font-family: var(--font-stack-cursive);
  font-size: 5vmin;
  line-height: 1;
  text-align: center;
  text-shadow: 0 0 1vmin currentColor;
  position: absolute;
  bottom: -1.5vmin;
  right: 5vmin;
}

@keyframes glow {
  0% {
    color: var(--color-primary);
  }
  100% {
    color: var(--color-lightest);
  }
}
</style>
