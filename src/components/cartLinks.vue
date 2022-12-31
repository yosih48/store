<template>
  <div class=" ">
    <v-breadcrumbs large divider :items="items" class="mr-13"> </v-breadcrumbs>

  </div>
</template>

<script>
export default {
  name: "links",

  data: () => ({
    items: [
      {
        text: "עגלת קניות",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "כתובת למשלוח",
        disabled: false,
        to: {
          name: "shipping",
          path: "/shipping",
        },
      },
      {
        text: "ביצוע הזמנה",
        disabled: false,
        to: {
          name: "order",
          path: "/order",
        },
      },
    ],
  }),
};
</script>

<style scoped>
.v-breadcrumbs >>> a {
  color: white;
}
</style>
