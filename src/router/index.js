import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from "@/components/HelloWorld.vue";
import 'bootstrap/dist/css/bootstrap.css';
const routes = [
  { path: '/', component: HelloWorld },
  // { path: '/about', component: AboutView },
]
export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
