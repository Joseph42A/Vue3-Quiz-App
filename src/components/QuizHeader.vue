<script setup>
const { questionStatus, barPercentage } = defineProps([
  "questionStatus",
  "barPercentage",
]);
console.log(barPercentage);
</script>

<template>
  <header>
    <h4>Question {{ questionStatus }}</h4>
    <div class="bar">
      <div class="completion" :style="{ width: barPercentage }"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  margin-top: 20px;
}
header h4 {
  font-size: 30px;
}

.bar {
  width: 300px;
  height: 50px;
  border: 3px solid bisque;
}
.completion {
  height: 100%;
  background-color: bisque;
  transition: width 0.5s ease-in-out;
}
</style>
