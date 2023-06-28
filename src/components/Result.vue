<script setup>
import { RouterLink } from "vue-router";

const { numOfCorrect, length } = defineProps(["numOfCorrect", "length"]);
</script>

<template>
  <div class="results">
    <p>Your Results</p>
    <h1>{{ numOfCorrect }}/{{ length }}</h1>
    <RouterLink to="/quizes">Go Back</RouterLink>
  </div>
</template>

<style scoped>
.results {
  text-align: center;
  padding: 100px 0;
}
p {
  font-size: 15px;
}
h1 {
  font-size: 80px;
}
</style>
