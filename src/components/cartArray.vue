<template></template>

<script>


export default {
  name: "cart",

  components: {},
  props: {
      
 
  },
  data() {
    return {
      cart: [1, 2, 3],
    };
  },
  mounted() {

    },

methods: {
    addtocart() {
    this.$emit('addcart')
    }
    
},



    
};
</script>