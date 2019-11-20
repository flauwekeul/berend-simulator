<template>
  <div>Energie: {{ energy }} Geld: {{ money }} Geluk: {{ joy }}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  computed: mapState(['energy', 'money', 'joy']),
}
</script>

<style></style>
