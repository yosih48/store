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

  mounted() {
        this.getPruducts() 
  },
  computed: {
       // המוצרים מהFETCH
  product() {
      return this.$store.state.pruduct;
    },
      items() {
      return this.$store.state.items;
    },
   
   
  },
  methods: {
    getPruducts() {
      fetch("http://localhost:5000/product/register")
        .then((response) => response.json())
        .then((jsonObject) => {
         
          this.$store.state.pruduct = jsonObject
          for (let i = 0; i < this.product.length; i++) {
            this.product[i].src = this.$store.state.items[i].src;
          }
        
          console.log(this.product);
        
        });
    }, },


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
