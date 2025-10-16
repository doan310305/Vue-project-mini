<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <header>
    <img class="logo" width="60" height="60" src="/Users/user/Desktop/Vue CRUD/Project-vue-mini/src/assets/logo.svg" >
    <div class="btn-main">
      <RouterLink to="/">Go to Home</RouterLink>
    </div>
    <div class="btn-action">
      <RouterLink to="/create">Go to Home</RouterLink>
    </div>
  </header> 
  <router-view></router-view>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}
btn-main {
  background-color: #42b983;
  color: rgb(129, 32, 32);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
}
</style>

