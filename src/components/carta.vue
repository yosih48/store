<template>
  <v-container class="container mx-auto">
    <!-- <v-btn class="mr-12 mb-4">
      <router-link @click="onClick" to="/">go back</router-link></v-btn> -->

    <links></links>
    <v-layout>
      <v-simple-table class="tr mr-16" dark>
        <template v-slot:default>
          <tbody>
            <!-- <tr height="100px" >  -->
            <tr height="100px" v-for="(item, index) in cart" :key="index">
              <td>
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
                  :to="{ name: 'product', params: { id: item.id } }"
                  >{{ item.title }}</router-link
                >
              </td>
              <td>{{ item.price }} ש"ח</td>
              <td>
                <v-responsive>
                  <v-select
                    v-model="item.optionSelected"
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
                  color=" "
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
  </v-container>
</template>

<script>
import links from "./cartLinks";
export default {
  name: "cart",

  created() {},
  components: {
    links,
  },
  props: {},
  data() {
    return {
      select: null,
      options: [1, 2, 3, 4, 5, 6, 7, 8],

      totalOriginalPrice: [],
      priceAfterSelected: [0],
      total: [],
      price: [],
    };
  },

  created() {},

  mounted() {
    console.log(this.client)
 
    this.price = this.$store.state.cart;
    this.totalOriginalPrice = this.$store.state.cart.reduce(
      (currentTotal, item) => {
        return item.price + currentTotal;
      },
      0
    );

    this.total = this.totalOriginalPrice;
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    items() {
      return this.$store.state.items;
    },
    client(){
  return  this.$store.state.client
}

  },

  methods: {
    // getCart() {
    //   fetch(`http://localhost:5000/cart/${this.client}`)
    //     .then((response) => response.json())
    //     .then((data) => {
      
    //       console.log(data);
    //     });
      
    // },


    onChange() {
      for (let i = 0; i < this.price.length; i++) {
        this.select = this.price[i].optionSelected;
        this.price[i].newprice = this.price[i].price * this.select;
      }

      this.priceAfterSelected = this.price.reduce((currentTotal, item) => {
        return item.newprice + currentTotal;
      }, 0);

      this.total = this.priceAfterSelected;
    },

    deleteProductFromCart(index) {
      this.total -=
        +this.$store.state.cart[index].price *
        this.$store.state.cart[index].optionSelected;

      this.$store.state.cart.splice(index, 1);
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
  width: 800px;
}

.card-text {
  border-bottom: 1px solid black;
  height: 130px;
}

.card-action {
  justify-content: center;
  align-items: center;
}

.hover:hover {
  text-decoration-line: underline;
}
</style>
