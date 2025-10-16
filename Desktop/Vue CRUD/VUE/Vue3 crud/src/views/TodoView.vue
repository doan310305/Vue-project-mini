<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const user = ref(null);

onMounted(async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`);
  user.value = await res.json();
});

</script>

<template>
  <main style="color:#000; padding:2rem;">
    <div class="card-item" v-if="user">
      <h2>{{ user.email }}</h2>
      <h3>{{ user.name }}</h3>
      <h4>{{ user.phone }}</h4>
    </div>
    <div v-else>Loading...</div>
  </main>
</template>
