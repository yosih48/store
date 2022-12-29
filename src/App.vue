<template>
  <v-app id="inspire" >
    <toolbar ></toolbar>

    <v-main class="all ">
    <!-- <v-main > -->
      <v-container fluid >
        <router-view></router-view>
      </v-container> 
    </v-main>

    <v-footer></v-footer>
  </v-app>
</template>




<script>
import toolbar from "./components/toolbar";

import home from "./views/HomeView";
import login from "./views/LoginView";
import cart from "./views/CartView";
import product from "./views/ProductView";
import Shipping from "./views/shipView";

export default {
  name: "App",
  components: {
    toolbar,
    home,
    login,
    cart,
    product,
    Shipping,
  },
  data: () => ({}),



  watch: {},
};
</script>
<style >
.all {
  direction: rtl;
  background-color: #263238;
}








.cart-button {
  display: flex;
  align-items: flex-end;
}




</style>
