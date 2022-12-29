<template>
  <v-container class="width: 850px ">
    <!-- <v-btn class="mr-12 mb-4">
      <router-link @click="onClick" to="/">go back</router-link></v-btn
    > -->

    <!-- <v-row>
    
      <v-col cols="12"  md="4"   class="mr-12">
        <v-card>
          <v-img
            :src="items[$route.params.id].src"
            aspect-ratio="1"
            max-width="500px"
            max-height="400"
            class="mx-auto"
          >
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12"  md="3"  class="col1 color: grey darken-3 white--text">
        <v-row class="pa-4 border headline">{{
          items[$route.params.id].title
        }}</v-row>
       
        <v-row class="pa-4 border title"
          >{{ items[$route.params.id].price }} ש"ח</v-row
        >
        <v-row class="pa-4 mt-5 title">{{ items[0].description }}</v-row>
      </v-col >
      <v-col cols="12"  md="3" class="col3 color: grey darken-3 white--text">
        <v-row class="border"
          ><v-col>מחיר:</v-col><v-spacer></v-spacer
          ><v-col>{{ items[$route.params.id].price }}</v-col></v-row
        >
        <v-row class="border"
          ><v-col>סטטוס:</v-col><v-spacer></v-spacer
          ><v-col>{{ items[$route.params.id].price }}</v-col></v-row
        >
        <v-row class="border"
          ><v-col>כמות:</v-col><v-spacer></v-spacer
          ><v-col>{{ items[$route.params.id].price }}</v-col></v-row
        >

        <v-row class="">
          <v-btn class="mx-auto pa-5 green mt-3"  @click="addToCart($route.params.id)">להוסיף לעגלה</v-btn>
        </v-row>
      </v-col>
    </v-row> -->
<v-layout>
<v-row>
  <v-col cols="12" md="4">
    <v-sheet max-width="500px" dark>

        <v-responsive>
          <v-img
            :src="items[$route.params.id].src"
            aspect-ratio="1"
            max-width="400px"
            max-height="400px"
          >
          </v-img>
        </v-responsive>
    </v-sheet>
     
    </v-col>
    <v-col cols="5" md="4">
      <v-sheet dark> 

        <v-col class="pa-4 border headline">{{
          items[$route.params.id].title
        }}</v-col>

        <v-col class="pa-4 border title"
          >{{ items[$route.params.id].price }} ש"ח</v-col
        >
        <v-col class="pa-4 mt-5 title">{{ items[0].description }}</v-col>
      </v-sheet>
    </v-col>
    <v-col cols="8" md="3" class="">
      <v-sheet  max-width="500px" dark>

        <v-row class="border"
          ><v-col>מחיר:</v-col><v-spacer></v-spacer
          ><v-col>{{ items[$route.params.id].price }}</v-col></v-row
        >
        <v-row class="border"
          ><v-col>סטטוס:</v-col><v-spacer></v-spacer
          ><v-col>{{ items[$route.params.id].price }}</v-col></v-row
        >
        <v-row class="border"
          ><v-col>כמות:</v-col><v-spacer></v-spacer
          ><v-col>{{ items[$route.params.id].price }}</v-col></v-row
        >

        <v-row class="">
          <v-btn
            class="mx-auto pa-5 green mt-3"
            @click="addToCart($route.params.id)"
            >להוסיף לעגלה</v-btn
          >
        </v-row>
      </v-sheet>
        </v-col>
 </v-row>
 </v-layout>
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
    items() {
      return this.$store.state.items;
    },
  },
  mounted() {},
  methods: {
    addToCart(index) {
      this.$store.state.cart.push(this.items[index]);
    },
  },
};
</script>
<style scoped>
.col1 {
  max-width: 270px;
  margin-right: 25px;
}
.col3 {
  max-width: 500px;

 
}




.border {
  border-bottom: 1px solid black;
}
</style>
