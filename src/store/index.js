import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    // הID של הלקוח
    client: 1,
    
    items: [
      {
        id: 0,
        title: "Samsung Galaxy S20 PLUS SM-G985F/DS 128GB 8GB RAM סמסונג",
        src: require("../assets/itemsPics/samsung.jpg"),
        price: 10,
        description:
          "מכשיר זה הנו מכשיר חדש ומקורי וכולל עברית מלאה, עדכוני FOTA ו 12 חודשי אחריות.",
        optionSelected: 1,
        newprice: null,
      },
      {
        id: 1,
        title:
          "מחשב גיימינג Intel i5 10600KF, כ.מסך RTX3070 iChill x4 C30704-08D6X, זכרון 16GB, כונן 1T SSD, לוח BioStar Z490A-Silver ATX - דגם ITS009",
        src: require("../assets/itemsPics/gaming.jpg"),
        price: 20,
        optionSelected: 1,
        newprice: null,
      },
      {
        id: 2,
        title: "מצלמת Canon EOS 80D DSLR",
        src: require("../assets/itemsPics/camera.jpg"),
        price: 8415,
        optionSelected: 1,
        newprice: null,
      },
      {
        id: 3,
        title: "מושב גיימרים Dragon Olympus Chair",
        src: require("../assets/itemsPics/chair.jpg"),
        price: 7415,
        optionSelected: 1,
        newprice: null,
      },
      {
        id: 4,
        title: "Sony PlayStation 5 825GB Blu-ray סוני",
        src: require("../assets/itemsPics/playstation.jpg"),
        price: 6815,
        optionSelected: 1,
        newprice: null,
      },
      {
        id: 5,
        title: "מצלמת Canon EOS 80D DSLR",
        src: require("../assets/itemsPics/camera.jpg"),
        price: 5415,
        optionSelected: 1,
        newprice: null,
      },
    ],
// עגלת הקניות של הלקוח
    cart: [],
    // המוצרים מהFETCH
    pruduct: [],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
