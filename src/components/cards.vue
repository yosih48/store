<template>
  <v-layout col wrap="">
    <!-- <cartarr @addcart="addToCart(i)"></cartarr> -->
    <!-- <v-flex xs12 sm6 nd4 lg3 vn v-for="(pics, i) in productPics" :key="i"> -->
    <v-flex xs12 sm6 nd4 lg3 vn v-for="(pics, i) in pics" :key="i">
      <v-card
        flat
        class=" ma-3 "
      min-height="390px"
        :key="i"
        dark
        max-width="300"
      >
        <v-responsive >
          <v-img 
          :src="pics.src"
           aspect-ratio="1" 
           width="230px" 
           class="mx-auto mt-4">
          </v-img>
        </v-responsive>
        <v-card-text class="">
         
          <div class="white--text text-truncate">   <router-link :to="{ name: 'product', params: { id: pics.id }} ">{{ pics.title}}</router-link></div>
      
         
          <!-- <h1 @click="addToCart">{{title}}fdfdf</h1> -->
        </v-card-text>

      
        <v-card-actions class="mx-auto center">
          
          <v-btn  bottom color="success black--text " @click="addToCart(i)">
           
            <span>הוסף לעגלה</span>
            <v-icon small left>mdi-cart</v-icon>
          </v-btn>
         
        </v-card-actions>
   

      
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

import { eventBus } from "../main";

export default {
  name: "cards",

  components: {

},


  props: {
 msg: String,
    pics: Array,
    // cart: Array,
  


},

  data() {
    return {

   
  cart: []

      
      
    };
  },

  mounted() {
    

  
},

methods: {
  addToCart(index){
    this.cart.push(this.pics[index])
    // this.title = 'vue wizard'
   eventBus.$emit('insertToCart', this.cart)
    console.log(this.cart)
   
    }
  },
  watch: {},
};



</script>
<style>
.action {
  background-color: blue;

}
</style>
