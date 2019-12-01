<template>
  <div class="day">
    <span class="day__label">Dag</span>
    <span class="day__value">{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
  },
}
</script>

<style>
.day {
  width: 25%;
}
.day__label {
  margin-right: 1vmin;
}
.day__value {
  font-family: var(--font-stack-cursive);
  font-size: 13vmin;
  color: var(--color-light);
  line-height: 1;
}
</style>
