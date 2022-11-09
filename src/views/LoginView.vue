<template>
 

  <v-content>
    
    <Login></Login>
  </v-content>
 

</template>
<script>
import Login from "../components/login";
import button from "../components/goback";

export default {
  name: "login",

  components: {
    Login,
    button
  },
};
</script>
