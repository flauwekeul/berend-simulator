<template>
  <div class="card" :style="{ transform: randomRotation() }">
    <slot />
  </div>
</template>

<script>
import { randomNumber } from '../utils'

export default {
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
  width: 70%;
  height: calc(75vmin - var(--spacing-large));
  margin: var(--spacing-large) auto;
  padding: var(--spacing-small);
  /* background-color: var(--color-lightest); */
  background-image: linear-gradient(
    to bottom right,
    var(--color-lightest) 50%,
    var(--color-light)
  );
  color: var(--color-dark);
  font-size: 5vmin;
  border: 2vmin solid var(--color-secondary);
  border-radius: 1vmin;
  box-shadow: 2vmin 2vmin 2vmin rgba(0, 0, 0, 0.2);
  text-align: center;
}
</style>
