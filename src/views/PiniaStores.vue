<script setup>
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const store = useCounterStore();
const { count, doubleCount } = storeToRefs(store);
const { increment } = store;
console.log(doubleCount);
</script>

<template>
  <h1>{{ count }} - {{ doubleCount }}</h1>
  <button @click="increment">+</button>
  <button @click="count--">-</button>
</template>
