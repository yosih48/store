<template>
 
    <v-container class=" width: 850px container" >
     
      <v-btn class="mr-12 mb-4">  <router-link @click="onClick" to="/">go back</router-link></v-btn>
   
      <v-row >
     
        <v-col 
        cols="5"
        class="mr-12 ">
          <v-card >
            <v-img
              :src="items[$route.params.id].src"
              aspect-ratio="1"
              width="500px"
              height="400"
              class="mx-auto"
            >
            </v-img>
     
          </v-card>
        </v-col>
        <v-col 
       class="col1 color: grey darken-3 white--text"
        >
          <v-row    class="pa-4 border headline">{{items[$route.params.id].title}}</v-row>
          <!-- <v-row    class="pa-4 border headline">{{$route.params.id}}</v-row> -->
          <v-row
          class="pa-4  border title"
          
          >{{items[$route.params.id].price}} ש"ח</v-row>
          <v-row    class="pa-4 mt-10 title">{{items[0].description}}</v-row>
        </v-col>
        <v-col class="col3 color: grey darken-3 white--text">
          <v-row class="border"><v-col >מחיר:</v-col><v-spacer></v-spacer><v-col>{{items[$route.params.id].price}}</v-col></v-row>
          <v-row class="border"><v-col>סטטוס:</v-col><v-spacer></v-spacer><v-col>{{items[$route.params.id].price}}</v-col></v-row>
          <v-row class="border"><v-col>כמות:</v-col><v-spacer></v-spacer><v-col>{{items[$route.params.id].price}}</v-col></v-row>
        
          <v-row class="">
        
            <v-btn class="mx-auto pa-5 green mt-3">להוסיף לעגלה</v-btn>
       
          </v-row>
        </v-col>
      </v-row>
      <v-row></v-row>
      <!-- <div>
            <div v-for="(item, i) in items"
            :key="i"
            >{{item}}</div>
            <div></div>
            
        
        </div> -->
   
    </v-container>
</template>

<script>



export default {
    name: "product",

  components: {
  

  },

    
  props: {
    item: Array,
  },
  data() {
    return {
    

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
    };
},
mounted() {
  
   
},
 



};
</script>
<style scoped>
.col1{
  max-width: 270px;
   margin-right: 25px;
}
.col3{
max-width: 220px;
   margin-right: 45px;
   max-height: 210px;
}

.container{
  width: 1200px;
 
}

.border{
  border-bottom: 1px solid black;
}

</style>