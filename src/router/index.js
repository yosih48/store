import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/LoginView.vue'
import cart from '../views/CartView.vue'
import product from '../views/ProductView.vue'
import shipping from '../views/shipView.vue'
import order from '../components/order'
import register from '../components/register'
import personal from '../components/personalArea'
import payment from '../components/payment'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: login,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/cart",
    name: "cart",
    component: cart,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/order",
    name: "order",
    component: order,
  },
  {
    path: "/shipping",
    name: "shipping",
    component: shipping,
  },
  {
    path: "/product/:id",
    name: "product",
    component: product,
  },
  {
    path: "/personal",
    name: "personal",
    component: personal,
  },
  {
    path: "/payment",
    name: "payment",
    component: payment,
  },

];

const router = new VueRouter({
  routes
})

export default router
