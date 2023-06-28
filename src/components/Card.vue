<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { quiz } = defineProps(["quiz"]);

const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`);
};
</script>

<template>
  <div class="card" @click="navigateToQuiz">
    <p>{{ quiz.name }}</p>
  </div>
</template>

<style scoped>
.card {
  background-color: orange;
  padding: 1rem 2rem;
}
</style>
