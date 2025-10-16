<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const txtSearch = ref('');
const users = ref([]); // Sửa thành mảng rỗng

onMounted(
  (async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    users.value = data;
  }
));


const filteredUsers = computed(() => {
  return users.value.filter(item =>
    item.name.toUpperCase().includes(txtSearch.value.toUpperCase()) ||
    item.email.toUpperCase().includes(txtSearch.value.toUpperCase())
  );
});

const router = useRouter();
</script>

<template>
  <main style="color: #000; padding: 2rem;">
    <input type="text" placeholder="Search..." v-model="txtSearch" />
    <div class="group-card">
      <div class="card-item" v-for="user in filteredUsers" :key="user.id">
        <div @click="router.push({ path: `/todo/${user.id}` })">
          <h2>{{ user.name }}</h2>
          <i>{{ user.email }}</i>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
input {
  width: 100%;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  border: none;
  background: white;
}
.group-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  margin-top: 2px;
}
.card-item {
  background: rgb(75, 74, 72);
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  color: white;
  cursor: pointer;
}
.card-item:hover {
  background: rgb(100, 100, 100);
  transform: translateY(-5px);
  transition: all 0.3s ease;

}

</style>