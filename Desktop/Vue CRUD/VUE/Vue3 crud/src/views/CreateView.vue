<script setup>
 import { reactive } from 'vue';
const todoData = reactive({
    email: '',
    name: '',
    phone: '',
    website: ''
});
const handleCreateNewData = async ()=>{
    console.log(todoData)
}
</script>

<template>
<main style="color:#000; padding:2rem;">
    <h1 style="font:bold">
        Create Todo
    </h1>
    <div class="form-group">
        <input type="text" placeholder="Enter Your Email!" v-model="todoData.email"  />
    </div>
    <div class="form-group">
        <input type="text" placeholder="Enter Your Username!" v-model="todoData.name"  />
    </div>
    <div class="form-group">
        <input type="text" placeholder="Enter Your Phone!" v-model="todoData.phone" />
    </div>
    <div class="form-group">
        <input type="text" placeholder="Enter Your Website!" v-model="todoData.website"  />
    </div>
    <div class="btn-main" @click="handleCreateNewData" > create new</div>
</main>
</template>
<style>
.form-group {
  margin-top: 1rem;

}
input{
    width: 100%;
    padding: 0.6rem 1.2rem;
    border-radius: 10px;
    border:none;
    background: bisque;

}
input:focus{
    outline:none;
    border:2px solid rgb(100, 100, 146);
}
.btn-main{
    margin-top:1rem;
    background: rgb(75, 74, 72);
    padding: 0.7rem 2rem;
    border-radius:15px;
    color:white;
    text-align:center;
    cursor:pointer;
}
</style>