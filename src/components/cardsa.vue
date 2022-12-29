<template>
  <v-layout col wrap="">
    <v-flex
      xs12
      sm6
      md4
      lg3
      vn
      v-for="(pics, i) in $store.state.items"
      :key="i"
    >
      <v-card
        flat
        class="ma-3"
        min-height="390px"
        :key="i"
        dark
        max-width="300"
      >
        <v-responsive>
          <v-img
            :src="pics.src"
            aspect-ratio="1"
            width="230px"
            class="mx-auto mt-4"
          >
          </v-img>
        </v-responsive>
        <v-card-text class="">
          <div class="white--text text-truncate">
            <router-link
              class="white--text"
              :to="{ name: 'product', params: { id: pics.id } }"
              >{{ pics.title }}</router-link
            >
          </div>

          <div class="grey--text mt-3">{{ pics.price }} ש"ח</div>
        </v-card-text>

        <v-card-actions class="mx-auto center">
          <v-btn
            bottom
            color="success black--text "
            @click="addToCart(i)"
            v-bind="inCart"
            v-on="on"
          >
            <span>הוסף לעגלה</span>
            <v-icon small left>mdi-cart</v-icon>
          </v-btn>
        </v-card-actions>
        <!-- <v-alert v-if="inCart"
type="success"
>הפריט נוסף לעגלה</v-alert> -->
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "cards",

  components: {},

  props: {
    pics: Array,
  },

  data() {
    return {
      // cart: [],
      inCart: false,
    };
  },

  mounted() {},
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },

  methods: {
    addToCart(index) {
      // this.inCart = !this.inCart
      for (let i = 0; i < this.$store.state.items.length; i++) {
        if (this.$store.state.items[index] !== this.$store.state.cart[index]) {
          this.$store.state.cart.push(this.$store.state.items[index]);
          console.log("add to cart");
        } else {
          console.log("exist, not adding");
        }
      }
    },
    // addToCart(index) {
    //   fetch(`http://localhost:5000/cart/add`, {
    //     method: "post",
    //     body: JSON.stringify({
    //       clientID: this.$route.params.id,
    //       itemID: this.games[i].id,
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((jsonObject) => {
    //       console.log("edit successfully");
    //     });
    // },
  },
  watch: {},
};
</script>
<style>
.action {
  background-color: blue;
}
.center {
  display: flex;
  justify-content: center;
}
</style>
