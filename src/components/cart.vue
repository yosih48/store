<template>
  <!-- <v-main> -->

  <v-container class="mx-auto">
    <!-- <v-btn class="mr-12 mb-4">
      <router-link @click="onClick" to="/">go back</router-link></v-btn> -->

    <links v-if="this.userCart.length > 0"></links>
    <h2 v-if="this.userCart.length > 0" class="grey--text mb-7">עגלת קניות</h2>
    <v-layout v-if="this.userCart.length > 0" class="">
      <v-simple-table 
      class="mr-16 simple-table-color"
      dense
      light>
        <template v-slot:default>
          <tbody>
        
            <tr
              height=""
              class="white--text tr"
              v-for="(item, index) in userCart"
              :key="index"
            >
              <td class="">
                <v-responsive>
                  <v-img
                    :src="item.src"
                    aspect-ratio="1"
                    width="80px"
                    max-height="80"
                    class="mx-auto"
                  >
                  </v-img>
                </v-responsive>
              </td>

              <td class="hover">
                <router-link
                  class="white--text"
                  style="text-decoration: none"
                  :to="{ name: 'product', params: { id: item.itemID } }"
                  >{{ item.title }}</router-link
                >
              </td>
              <td>{{ item.price }} ש"ח</td>
              <td>
                <v-responsive>
                  <v-select
                    background-color="white"
                    v-model="item.quantity"
                    :items="options"
                    label="1"
                    single-line
                    @change="onChange(index)"
                  >
                  </v-select>
                </v-responsive>
              </td>
              <td>
                <v-btn
                  text
                  bottom
                  color=" white"
                  @click="deleteProductFromCart(index)"
                >
                  <v-icon small>mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-card
        dark
        class="mr-7"
        max-width="300"
        min-width="350"
        max-height="200"
      >
        <v-card-text class="center card-text">
          <v-col>
            <v-row class="center">
              <h2>סכום ביניים:</h2>
            </v-row>
            <v-row class="mt-11 center">
              <h2>{{ total }} ש"ח</h2>
            </v-row>
          </v-col>
        </v-card-text>
        <v-card-actions class="mx-auto center mt-2">
          <v-btn bottom color="success black--text " width="300">
            <router-link
              class="black--text"
              style="text-decoration: none"
              to="/shipping"
              ><span>לתשלום</span></router-link
            >
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
    <v-layout v-else>
      <v-col>
      <v-col>
     <goBackButton></goBackButton>
      </v-col>
      <v-col>
      <h2 class="grey--text mb-7">עגלת קניות</h2>
      <v-btn bottom color="success black--text " width="350" height="40">
        העגלה שלכם ריקה...
        <router-link style="color: black" to="/">חזרה</router-link>
      </v-btn>
      </v-col>
      </v-col>
    </v-layout>
  </v-container>
  <!-- </v-main>  -->
</template>

<script>
import links from "./cartLinks";
import  goBackButton from "./goback";
export default {
  name: "cart",

  created() {},
  components: {
    links,
    goBackButton
  },
  props: {},
  data() {
    return {
      select: null,
      options: [1, 2, 3, 4, 5, 6, 7, 8],

      totalOriginalPrice: [],
      priceAfterSelected: [0],
      total: [],

      userCart: [],
    };
  },

  created() {},

  mounted() {
    this.getCart();
  },
  computed: {
    client() {
      return this.$store.state.client;
    },
    items() {
      return this.$store.state.items;
    },
  },

  methods: {
    getCart() {
      fetch(`http://localhost:5000/cart/${this.client}`)
        .then((response) => response.json())
        .then((data) => {
          this.userCart = data;

          console.log(this.userCart);
          for (let i = 0; i < this.userCart.length; i++) {
            this.userCart[i].src = this.$store.state.items[i].src;
          }

          this.totalOriginalPrice = this.userCart.reduce(
            // this.total = this.userCart.reduce(
            (currentTotal, item) => {
              return item.newprice + currentTotal;
            },
            0
          );

          this.total = this.totalOriginalPrice;
        });
    },

    onChange(index) {
      for (let i = 0; i < this.userCart.length; i++) {
        this.select = this.userCart[i].quantity;
        this.userCart[i].newprice = this.userCart[i].price * this.select;
      }

      this.priceAfterSelected = this.userCart.reduce((currentTotal, item) => {
        return item.newprice + currentTotal;
      }, 0);

      this.total = this.priceAfterSelected;
      this.updateCart(index);
      // this.getCart();
    },
    updateCart(index) {
      console.log(index);
      console.log(this.userCart[index].id);
      fetch(`http://localhost:5000/cart/`, {
        method: "put",
        body: JSON.stringify({
          id: this.userCart[index].id,
          clientID: this.client,
          itemID: this.userCart[index].itemID,
          quantity: this.userCart[index].quantity,
          newprice: this.userCart[index].price * this.userCart[index].quantity,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((jsonObject) => {});
    },

    deleteProductFromCart(index) {
      fetch(`http://localhost:5000/cart/${this.userCart[index].id}`, {
        method: "delete",
      })
        .then((response) => response.json())
        .then((jsonObject) => {
          this.getCart();
        });
    },
  },

  watch: {},
};
</script>

<style>
.container {
  width: 1200px;
}

.tr {
  /* width: 800px; */


  background-color: #1E1E1E;
}
.simple-table-color {
  background-color: #263238 !important;

}
.card-text {
  border-bottom: 1px solid black;
  height: 130px;
}
   tr:hover {
  background-color: #1E1E1E !important;
   
     }

.card-action {
  justify-content: center;
  align-items: center;
}

.hover:hover {
  text-decoration-line: underline;
}
</style>
