<template>
  <v-carousel
    cycle
    height="500"
    hide-delimiter-background
    show-arrows
    delimiter-icon="mdi-minus"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="color" height="100%">
        <v-row class="fill-height" align="center">
          <v-row class="size ma-16">
            <v-col class="colpic">
              <div class="text-h4">
                <v-img
                  :src="slide.src"
                  aspect-ratio="1"
                  max-height="300"
                  max-width="400"
                  class="mr-8"
                >
                </v-img>
              </div>
            </v-col>
            <v-col>
              <div class="text-h4">
                {{ slide.title }}
              </div>
            </v-col>
            <!-- <product :item="close"></product> -->
          </v-row>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import product from "./product";
import vueImages from "vue-images";

export default {
  name: "carousel",

  components: {
    product,
    vueImages,
  },
  props: {},
  data() {
    return {
      color: "grey darken-2",

      pics: ["https://picsum.photos/id/11/500/300"],

      slides: [
        {
          title: "מצלמת Canon EOS 80D DSLR",
          src: require("../assets/carouselPics/camera.jpg"),
        },

        {
          title: "מושב גיימרים Dragon Olympus Chair",
          src: require("../assets/carouselPics/chair.jpg"),
        },

        {
          title: "Sony PlayStation 5 825GB Blu-ray סוני",
          src: require("../assets/carouselPics/playstation.jpg"),
        },
      ],
    };
  },
};
</script>
<style scoped>
.size {
  height: 350px;
  width: 10px;
  align-items: center;
  background-color: #263238;
  color: aliceblue;
}

.colpic {
  width: 100px;
  justify-content: center;
}

.fill-height {
  border: 1px solid black;
}
</style>
