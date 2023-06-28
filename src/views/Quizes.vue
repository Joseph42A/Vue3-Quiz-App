<script setup>
import Card from "../components/Card.vue";
import { data } from "../data";
</script>

<template>
  <h1>Quizes</h1>
  <div class="quiz-container">
    <div class="quizes">
      <Card v-for="quiz in data" :key="quiz.id" :quiz="quiz" />
    </div>
  </div>
</template>

<style scoped>
.quiz-container {
  min-height: 80vh;
}
.quizes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
</style>
