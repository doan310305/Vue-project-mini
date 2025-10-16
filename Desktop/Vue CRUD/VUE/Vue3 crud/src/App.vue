<script setup>

import { RouterLink,RouterView } from 'vue-router'
;
</script>

<template>

  <main>
    
    <header>
      <div class="wrapper">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">
  <img src="@/assets/logo.svg" alt="Logo" height="32" />
</RouterLink>
    

    <div class="d-flex align-items-center gap-3">
    <RouterLink class="Home text-white" to="/">Home</RouterLink>
       
    <RouterLink class="Todo text-white" to="/create">Create</RouterLink>
    
    </div>
      
   
  </div>
  
</nav>
  <RouterView />
  


      </div>
    </header>
  </main>
</template>



