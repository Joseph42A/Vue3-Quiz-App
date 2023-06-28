<script setup>
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import Result from "../components/Result.vue";
import { data } from "../data";
import { useRoute } from "vue-router";
import { computed, ref, watch } from "vue";

const curQueIdx = ref(0);
const numOfCorrectAnswers = ref(0);
const route = useRoute();
const id = parseInt(route.params.id);
const quiz = data.find((q) => q.id === id);

const questionStatus = computed(
  () => `${curQueIdx.value + 1}/${quiz.questions.length}`
);
const barPercentage = computed(
  () => `${(curQueIdx.value / quiz.questions.length) * 100}%`
);

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numOfCorrectAnswers.value++;
  }
  if (curQueIdx.value < quiz.questions.length) {
    curQueIdx.value++;
  }
};
</script>

<template>
  <div class="main">
    <QuizHeader
      :barPercentage="barPercentage"
      :questionStatus="questionStatus"
    />
    <div>
      <Question
        :question="quiz.questions[curQueIdx]"
        @selectOption="onOptionSelected"
        v-if="curQueIdx < quiz.questions.length"
      />
    </div>
    <Result
      v-if="curQueIdx >= quiz.questions.length"
      :numOfCorrect="numOfCorrectAnswers"
      :length="quiz.questions.length"
    />
  </div>
</template>

<style scoped>
.main {
  min-height: 83vh;
}
</style>
