<script setup>
import {  useRoute,useRouter } from 'vue-router';
import TheWelcome from '../components/TheWelcome.vue';
import { ref,computed,onMounted } from 'vue';
import '../assets/about.scss';
const router = useRouter();
const route = useRoute();
console.log(route.name);
console.log(route.path);
const count = ref(10);
const handleIncrease = (data) => {
  count.value = count.value + data.value;
};

const categoryProduct=ref("Iphone");
const todos =ref([]);
const products=ref([
  {id:1,
    name:"Iphone 14",
    category:"Iphone",
    price:42000
  },
  {id:2,
    name:"Iphone 13",
    category:"Iphone",
    price:35500
  },
  {id:3,
    name:"Iphone 12",
    category:"Iphone",
    price:20000
  },
  {id:4,
    name:"Chicken Rice",
    category:"Food",
    price:3000
  },
  {id:5,
    name:"Beef Noodle",
    category:"Food",
    price:5000
  }
  ,{id:6,
    name:"Pork Rice",
    category:"Food",
    price:2000
  }
]);

const handleChangeCategoryProduct=(value) => {
 categoryProduct.value = value; 
  console.log("value",value);
};
const filteredProducts = computed(() => {
  return products.value.filter(item => item.category === categoryProduct.value
  );
});
onMounted(() => {
  console.log(fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => todos.value = json));
});
</script>

<template>
  <div class="about">
    <button  @click="router.push({name:'user'})"> click vao day</button>
     <!-- <RouterLink to="/about/user">About User</RouterLink> -->
    {{ console.log("Xin Chao Trong Template") }}
  </div>
  <router-view></router-view>
  <TheWelcome :count ="count" @handle-increase ="handleIncrease"/>

  <button @click="handleChangeCategoryProduct('Iphone')">Hien Thi Iphone</button>
  <button @click="handleChangeCategoryProduct('Food')">Hien Thi Food</button>


  <div v-if="categoryProduct ==='Food' ">Hien Thi Danh Sach Food </div>
  <div v-else-if="categoryProduct ==='Iphone' ">Hien Thi Danh Sach Iphone </div>
  <div v-for="product in filteredProducts" >
    <div>
      <div>{{ product.name }}</div>
      <div>Price: {{ product.price }}</div>
    </div>
  </div>

   <div v-for="todo in todos">
    {{ todo.title }}
    {{ todo.name }}
   </div>
</template>