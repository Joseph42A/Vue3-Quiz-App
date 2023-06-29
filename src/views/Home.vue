<script setup>
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const store = useCounterStore();
const { count } = storeToRefs(store);
</script>
<template>
  <div>
    <h1>Welcome to Quiz APP : {{ count }}</h1>
  </div>
</template>
