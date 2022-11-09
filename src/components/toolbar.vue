<template>
  <nav>
    <v-toolbar flat class="toolbar">
      <v-app-bar-nav-icon @click="onClick"> </v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>
          <router-link to="/login">התחברות והרשמה</router-link>
        </v-btn>

        <v-btn text>
           <router-link to="/cart">עגלת קניות</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
  </nav>
</template>

<script>
export default {
  data() {
    return {
   


    };
  },


  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
};
</script>
<style >
.toolbar {
  width: 1200px;
}
</style>
