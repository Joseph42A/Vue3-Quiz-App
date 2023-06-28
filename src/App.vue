<script setup>
import { RouterView } from "vue-router";
import Header from "./components/layout/Header.vue";
</script>

<template>
  <div>
    <Header />
    <main class="container">
      <RouterView />
    </main>
    <footer>footer</footer>
  </div>
</template>

<style>
.container {
  width: 80%;
  margin: 1rem auto;
  max-width: 1220px;
}

footer {
  background-color: bisque;
  padding: 2rem;
}
</style>
