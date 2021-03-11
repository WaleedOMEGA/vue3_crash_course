import { createRouter, createWebHistory } from "vue-router";
import { PhotoApp } from '../components/PhotoApp.vue'
import { PhotoView } from '../components/PhotoView.vue'
const routes = [
 {
  name: 'root',
  path: '/',
  component: PhotoApp,
  children:[
    {
      name:'photos',
      path:'/albums/:id',
      component:PhotoView
    }
  ]
 }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
