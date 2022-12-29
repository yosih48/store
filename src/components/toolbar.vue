<template>
  <v-app-bar dark app height="80">
    <v-container class="py-0 fill-height">
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down item_size">
        <v-btn text>
          <v-icon>mdi-account-circle</v-icon>

          <router-link
            v-if="this.client === null"
            class="white--text"
            style="text-decoration: none"
            to="/login"
            >התחברות והרשמה</router-link
          >
          <!-- <router-link
            v-else-if="this.client !== null"
            class="white--text"
            style="text-decoration: none"
            to="/login"
            >{{ this.users[0].userName }}</router-link
          > -->

          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn text dark v-bind="attrs" v-on="on">
                  {{ clientName }}
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :to="item.to"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-btn>
        <v-btn text>
          <v-icon>mdi-cart</v-icon>
          <router-link
            class="white--text"
            style="text-decoration: none"
            to="/cart"
            >עגלת קניות ({{ this.userCart.length }})</router-link
          >
        </v-btn>

        <!-- <v-btn v-for="item in menu" :key="item.icon" :to="item.to" :icon="item.icon"  text>{{
          item.title
        }}  
        </v-btn> -->
      </v-toolbar-items>

      <div class="hidden-md-and-up">
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark icon v-bind="attrs" v-on="on">
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="item in menu" :key="item.icon" :to="item.to">
              <v-list-item-icon>
                <v-icon small>mdi-{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      clientName: "",

      items: [
        { title: "איזור אישי", to: "/personal" },
        { title: "יציאה", to: "/login" },
      ],
      sidebar: false,
      drawer: false,
      users: [],
      userCart: [],
      menu: [
        { to: "/personal", title: "איזור אישי", icon: "account" },
        { to: "/cart", title: `עגלת קניות (2) `, icon: "cart" },
      ],
    };
  },
  mounted() {
    this.getUsers();
    this.getCart();
  },
  computed: {
    client() {
      return this.$store.state.client;
    },
  },

  methods: {
    onClick() {
      this.$emit("btn-click");
    },
    getUsers() {
      fetch(`http://localhost:5000/clients/${this.client}`)
        .then((response) => response.json())
        .then((data) => {
          this.users = data;
          this.clientName = this.users[0].userName;
        });
    },
    getCart() {
      fetch(`http://localhost:5000/cart/${this.client}`)
        .then((response) => response.json())
        .then((data) => {
          this.userCart = data;
          console.log(this.userCart);

          // this.totalOriginalPrice = this.userCart.reduce(
          //   // this.total = this.userCart.reduce(
          //   (currentTotal, item) => {
          //     return item.newprice + currentTotal;
          //   },
          //   0
          // );

          // this.total = this.totalOriginalPrice;
        });
    },
  },
  watch: {},
};
</script>
<style>
.item_size {
  max-width: 800px;
}
</style>
