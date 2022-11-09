<template>
  <v-app id="inspire"  >
    <!-- <v-container fluid class="all"> -->
     
      <!-- <v-navigation-drawer
      v-model="drawer"
      app
      class="indigo deep-purple accent-4 drawer"
      dark
      >
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn block> Logout </v-btn>
          </div>
        </template>
      </v-navigation-drawer> -->
      <v-app-bar dark app height="100px">
        <toolbar @btn-click="drawer = !drawer" class="mx-auto"></toolbar>
      </v-app-bar>
 <v-main class="all">
  <v-container  fluid>

    <router-view></router-view>
  </v-container>
 </v-main>
    <!-- </v-container> -->
  
    <v-footer></v-footer>
  </v-app>
</template>




<script>
import toolbar from "./components/toolbar";

import home from "./views/HomeView";
import login from "./views/LoginView";
import cart from "./views/CartView";
import product from "./views/ProductView";

export default {
  name: "App",
  components: {
  
    toolbar,
    home,
    login,
    cart,
    product
  },
  data: () => ({
    drawer: false,
    group: null,
    i

  
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style >
.all {
  direction: rtl;
  background-color: #263238;
}
.main {
  background-color: #263238;
  width: 1200px;
}

.nav {
  background-color: grey darken-2;
}

h3 {
  color: white;
}

.center {
  display: flex;
  justify-content: center;
  /* align-items: center; */
}

.cart-button {
  display: flex;
  align-items: flex-end;
}

.drawer {
  direction: rtl;
}
</style>
