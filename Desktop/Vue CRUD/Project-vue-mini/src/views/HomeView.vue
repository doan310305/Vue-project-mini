<script setup>
import { ref,onMounted, computed } from 'vue';
const users = ref([]);
const txtsearch = ref('');
onMounted(() => {
  (async ()=>{
    const res =await fetch('https://jsonplaceholder.typicode.com/users');
    const data =await res.json();
    users.value = data;
  } )();
    
});
const filterUser = computed(()=>{
  return users.value.filter(item =>item.name.toUpperCase().indexOf(txtsearch.value.toUpperCase())!==-1||item.email.toUpperCase().indexOf(txtsearch.value.toUpperCase())!==-1);
});
</script>

<template>
  <main style="color:#000; padding:2rem;">
  <input type="text" placeholder="Nhap ten" v-model="txtsearch">
  <div class="group-card">
    <div class="card-item" v-for="user in filterUser">
      <h2>{{user.name}}</h2>
      <p>{{user.email}}</p>
    </div>
    <div class="card-item">
      <h2>xin chao</h2>
      <p>item2</p>
    </div>
    
  </div>
  </main>
</template>
<style>
input{
  border-radius: 50px;
  width:100%;
  padding: .6rem 1rem;
  border: none;
  outline: none;
  background-color: rgb(236, 233, 233);

}
.group-card{
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.card-item{
  padding: 0.8rem;
  border-radius: 8px;
  background-color: rgb(191, 117, 117);
  color:#fff;
  cursor:pointer;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.2);
}
.card-item:hover{
  background-color: rgb(129, 32, 32);
  transition: all 0.3s ease;
}
</style>
