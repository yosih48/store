<template>
  <v-container class="width: 850px ">
    <!-- <v-btn class="mr-12 mb-4">
      <router-link @click="onClick" to="/">go back</router-link></v-btn
    > -->

  
<!-- <v-layout col wrap=""> -->
  <v-row>
  <v-col cols="6" sm="5" >
    <v-sheet max-width="500px" dark>

        <v-responsive>
          <v-img
            :src="items[$route.params.id].src"
            aspect-ratio="1"
    
          >
          </v-img>
        </v-responsive>
    </v-sheet>
     
    </v-col>
    <v-col  cols="8" sm="4"  
    class="hidden-xs-and-down"
    >
      <v-sheet dark class="grey--text"> 

        <v-col class="pa-4 border headline">{{
          items[$route.params.id].title
        }}</v-col>

        <v-col class="pa-4 border title"
          >{{ items[$route.params.id].price }} ש"ח</v-col
        >
        <v-col class="pa-4 title">{{ items[0].description }}</v-col>
      </v-sheet>
    </v-col>
    <v-col  cols="5" sm="3" 
    class="">
      <v-card dark height="">
<v-card-text class="grey--text">
        <v-col>
            <v-row class="center card-text">
              <h2>סיכום הזמנה</h2>
            </v-row>
            <v-row class="card-text">
              <h2>מחיר:</h2>
              <v-spacer></v-spacer>
              <h2>{{ items[$route.params.id].price }} ש"ח</h2>
            </v-row>
            <v-row class="card-text">
              <h2>סטטוס:</h2>
              <v-spacer></v-spacer>
              <h2>{{ items[$route.params.id].price }}</h2>
            </v-row>
            <!-- <v-row class="card-text">
              <h2>כמות:</h2>
              <v-spacer></v-spacer>
              <h2>{{ items[$route.params.id].price }} ש"ח</h2>
            </v-row> -->
          </v-col>
</v-card-text>
        <v-card-actions class="mx-auto center">
           <v-btn
            class="mx-auto pa-5  green "
            @click="addToCart($route.params.id)"
            >להוסיף לעגלה</v-btn
          >
        </v-card-actions>

      </v-card>

        </v-col>
</v-row>
 <!-- </v-layout> -->
  </v-container>
</template>

<script>
export default {
  name: "product",

  components: {},

  props: {
    item: Array,
  },
  data() {
    return {};
  },
  computed: {
       // המוצרים מהFETCH
  product() {
      return this.$store.state.pruduct;
    },
    items() {
      return this.$store.state.items;
    },
    // עגלת הקניות של של הלקוח
    cart() {
      return this.$store.state.cart;
    },
     client() {
      return this.$store.state.client;
    },
  },
  mounted() {},
  methods: {
    addToCart() {
      console.log(this.product[this.$route.params.id].id.toString())
            for (let x = 0; x < this.cart.length; x++) {
        this.foundproductID = this.cart.some((item) => {
          return item.id === this.product[x].id;
        });
      }
      if (!this.foundproductID) {
        fetch(`http://localhost:5000/cart/add`, {
          method: "post",
          body: JSON.stringify({
            id: this.product[this.$route.params.id].id.toString() +this.client.toString(),
            clientID: this.client,
            itemID: this.product[this.$route.params.id].id,
            quantity: 1,
            newprice: this.product[this.$route.params.id].price
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((jsonObject) => {
         
            this.cart = jsonObject
        
            console.log("edit successfully", jsonObject.id);

          });
      }
    },
  },
};
</script>
<style scoped>

.card-text {
  border-bottom: 1px solid black;
  height: 60px;

  align-items: center;
}


.border {
  border-bottom: 1px solid black;
}
</style>
