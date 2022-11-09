<template>
  <v-container>
    <v-btn class="mr-12 mb-4">
      <router-link @click="onClick" to="/">go back</router-link></v-btn
    >
    <!-- <v-btn @click="onclick"  class="mr-12 mb-4">click</v-btn> -->
    <v-simple-table class="tr mr-16" dark>
      <template v-slot:default>
        <tbody>
          <tr height="100px" v-for="item in newcart" :key="item.title">
            <!-- <tr height="100px"> -->
            <td>
              <v-responsive>
                <v-img
                  :src="item.src"
                  aspect-ratio="1"
                  width="80px"
                  max-height="80"
                  class="mx-auto mt-4"
                >
                </v-img>
              </v-responsive>
            </td>
            <td>{{ item.title }}</td>
            <td>{{ item.price }} ש"ח</td>
            <td>
              <v-responsive>
                <v-select :items="options" v-model="selected"> </v-select>
              </v-responsive>
            </td>
            <td>
              <v-btn text bottom color=" ">
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
            </td>
            <td></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import { eventBus } from "../main";
export default {
  name: "cart",

  created() {},
  components: {},
  props: {
    source: String,
    pics: Array,

    cart: Array,
  },
  data() {
    return {
      items: [
        {
          id: 0,
          title: "Samsung Galaxy S20 PLUS SM-G985F/DS 128GB 8GB RAM סמסונג",
          src: require("../assets/itemsPics/samsung.jpg"),
          price: 119.9,
          description:
            "מכשיר זה הנו מכשיר חדש ומקורי וכולל עברית מלאה, עדכוני FOTA ו 12 חודשי אחריות.",
        },
        {
          id: 1,
          title:
            "מחשב גיימינג Intel i5 10600KF, כ.מסך RTX3070 iChill x4 C30704-08D6X, זכרון 16GB, כונן 1T SSD, לוח BioStar Z490A-Silver ATX - דגם ITS009",
          src: require("../assets/itemsPics/gaming.jpg"),
          price: 120,
        },
        {
          id: 2,
          title: "מצלמת Canon EOS 80D DSLR",
          src: require("../assets/itemsPics/camera.jpg"),
          price: 8415,
        },
        {
          id: 3,
          title: "מושב גיימרים Dragon Olympus Chair",
          src: require("../assets/itemsPics/chair.jpg"),
          price: 7415,
        },
        {
          id: 4,
          title: "Sony PlayStation 5 825GB Blu-ray סוני",
          src: require("../assets/itemsPics/playstation.jpg"),
          price: 6815,
        },
        {
          id: 5,
          title: "מצלמת Canon EOS 80D DSLR",
          src: require("../assets/itemsPics/camera.jpg"),
          price: 5415,
        },
      ],
      selected: "",
      options: [1, 2, 3, 4, 5, 6, 7, 8],
      newcart: [],
      car: [],
    };
  },
  computed: {},
  created() {
    eventBus.$on("insertToCart", (data) => {
      this.newcart = data;
      console.log(this.newcart);
      // this.title = data
      // console.log(data)
    });
  },

  mounted() {},

  methods: {
    // onclick(){
    //   // this.car = this.items
    //   console.log(this.newcart)
    // }
  },
};
</script>

<style>
.tr {
  width: 800px;
}
</style>
