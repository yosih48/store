<template>
 <v-container>
    <carousel class="hidden-sm-and-down"></carousel>

   <v-main>
      <cards></cards>
      </v-main>
  </v-container>
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
  data() {
    return {};
  },

  methods: {},
};
</script>
