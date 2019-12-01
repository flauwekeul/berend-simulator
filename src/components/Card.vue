<template>
  <div
    class="card"
    :class="{ 'game-over': card.id === 'gameOver' }"
    :style="{ transform: randomRotation() }"
  >
    <slot />
  </div>
</template>

<script>
import { randomNumber } from '../utils'

export default {
  props: ['card'],
  methods: {
    randomRotation() {
      return `rotate(${randomNumber(-2, 2)}deg)`
    },
  },
}
</script>

<style>
.card {
  display: flex;
  align-items: center;
  width: 50%;
  height: calc(75vmin - var(--spacing-large));
  padding: var(--spacing-small);
  background-image: linear-gradient(
    to bottom right,
    var(--color-lightest) 50%,
    var(--color-light)
  );
  color: var(--color-dark);
  font-size: 6vmin;
  font-family: var(--font-stack-cursive);
  border: 2vmin solid var(--color-secondary-light);
  border-radius: var(--border-radius);
  box-shadow: 2vmin 2vmin 2vmin rgba(0, 0, 0, 0.2);
  text-align: center;
}
.card.game-over {
  background-image: none;
  background-color: var(--color-dark);
  color: var(--color-lightest);
}
</style>
