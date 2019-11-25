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
        :style="{ clipPath: `inset(${value}% 0 0 0)` }"
      />
    </svg>
    <svg
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      v-if="name === 'money'"
    >
      <use class="icon__background" xlink:href="#icon-euro" />
      <use
        class="icon__bar"
        xlink:href="#icon-euro"
        :style="{ clipPath: `inset(${value}% 0 0 0)` }"
      />
    </svg>
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" v-if="name === 'joy'">
      <use class="icon__background" xlink:href="#icon-heart" />
      <use
        class="icon__bar"
        xlink:href="#icon-heart"
        :style="{ clipPath: `inset(${value}% 0 0 0)` }"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: { name: String, value: Number },
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
</style>
