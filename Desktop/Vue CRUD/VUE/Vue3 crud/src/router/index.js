import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from '../views/Students/View.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      children:[{
      path:'user',
      name:'user',
      component: () => import('../views/AboutUser.vue'),
      }]
    },
    {
      path: '/student',
      name: 'student',
      component: StudentView,
    },
    {
      path: '/todo/:id',
      name: 'todo',
      component: () => import('../views/TodoView.vue'),
    
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateView.vue'),
    }

  ],
})

export default router
