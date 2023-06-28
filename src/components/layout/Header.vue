<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><RouterLink to="/" active-class>Home</RouterLink></li>
        <li><RouterLink to="/quizes" active-class>Quizes</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
nav {
  background-color: bisque;
  padding: 2rem;
}
ul {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  list-style: none;
}
a {
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
}
.router-link-exact-active {
  /* text-transform: uppercase; */
  text-decoration: underline;
}
</style>
