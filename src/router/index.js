import { createRouter, createWebHistory } from 'vue-router';

import Addition from '../components/calculator/SumComp.vue';
import substraction from '../components/calculator/SubComp.vue';
import multiplication from '../components/calculator/MulComp.vue';
import division from '../components/calculator/DivComp.vue';
import PageNotFound from '../components/calculator/PageNotFound.vue';



const routes = [
  {
    path: '/sum/:num1/:num2',
    name: 'SumComp',
    component: Addition
  },
  {
    path: '/sub/:num1/:num2',
    name: 'SubComp',
    component: substraction
  },
  {
    path: '/mul/:num1/:num2',
    name: 'MulComp',
    component: multiplication
  },
  {
    path: '/div/:num1/:num2',
    name: 'paymentComp',
    component: division
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router;
