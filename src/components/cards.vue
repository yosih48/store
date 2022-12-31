<template>
  <v-layout col wrap="">
    <v-flex xs12 sm5 md4 lg3 vn v-for="(item, i) in product" :key="i">
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
            :src="item.src"
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
              :to="{ name: 'product', params: { id: item.id } }"
              >{{ item.title }}</router-link
            >
          </div>

          <div class="grey--text mt-3">{{ item.price }} ש"ח</div>
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

      inCart: false,
      // product: [],
      clientID: 3,
      // userCart: [],
      foundproductID: false,
    };
  },

  mounted() {
    // this.getPruducts();
    // this.getCart();

  },
  computed: {
    // המוצרים מהFETCH
   product() {
      return this.$store.state.pruduct;
    },
    // ID של הלקוח
    client() {
      return this.$store.state.client;
    },
    items() {
      return this.$store.state.items;
    },
    // עגלת הקניות של הלקוח 
    cart() {
      return this.$store.state.cart;
    },
  },

  methods: {
    // getPruducts() {
    //   fetch("http://localhost:5000/product/register")
    //     .then((response) => response.json())
    //     .then((jsonObject) => {
    //       // this.product = jsonObject;
    //       this.$store.state.pruduct = jsonObject
    //       // for (let i = 0; i < this.product.length; i++) {
    //       //   this.product[i].src = this.$store.state.items[i].src;
    //       // }
        
    //       console.log(this.product);
        
    //     });
    // },
 

    addToCart(i) {
      console.log(i);
    console.log(this.$store.state.pruduct)
      // for (let x = 0; x < this.userCart.length; x++) {
      //   this.foundproductID = this.userCart.some((item) => {
      //     return item.id === this.product[i].id;
      //   });
      // }
      for (let x = 0; x < this.cart.length; x++) {
        this.foundproductID = this.cart.some((item) => {
          return item.id === this.product[i].id;
        });
      }
      if (!this.foundproductID) {
        fetch(`http://localhost:5000/cart/add`, {
          method: "post",
          body: JSON.stringify({
            id: this.product[i].id.toString() +this.client.toString(),
            clientID: this.client,
            itemID: this.product[i].id,
            quantity: 1,
            newprice: this.product[i].price
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((jsonObject) => {
            this.userCart = jsonObject;
            this.cart = jsonObject
        
            console.log("edit successfully", jsonObject.id);

          });
      }
    },
    // getCart() {
    //   fetch(`http://localhost:5000/cart/${this.client}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       this.$store.state.cart = data;

    //       console.log(this.userCart);
    //       console.log(this.cart);
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
