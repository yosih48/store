<template>
  <v-content class="mx-auto mt-5 main">
    <carousel class="hidden-sm-and-down"></carousel>

    <v-main class="mx-auto">
      <cards  :pics="items" ></cards> 
      
    </v-main>
  </v-content>
</template>

<script>
import carousel from "../components/carousel";
import cards from "../components/cards";
export default {
  name: "Home",

  components: {
    carousel,
    cards,
  },
data(){
  return{
    items: [
        {
          id: 0,
          title: "Samsung Galaxy S20 PLUS SM-G985F/DS 128GB 8GB RAM סמסונג",
          src: require("../assets/itemsPics/samsung.jpg"),
          price: 119.9,
          description: "מכשיר זה הנו מכשיר חדש ומקורי וכולל עברית מלאה, עדכוני FOTA ו 12 חודשי אחריות."
        },
        {id: 1,
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

      cart: [

      ]
  };
  
},


  
};
</script>
