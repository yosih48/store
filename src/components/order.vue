<template>
  <v-content>
    <links></links>
    <v-layout>
      <v-col>
        <v-sheet dark>
          <v-col class="border">
            <h2 class="grey--text mb-3">כתובת למשלוח</h2>
            <h4 class="grey--text mb-1">{{ users[0].address }}</h4>
            <h4 class="grey--text mb-1">{{ users[0].zip }}</h4>
            <h4 class="grey--text">טלפון: {{ users[0].phone }}</h4>
          </v-col>
          <v-col class="border">
            <h2 class="grey--text ">שיטת תשלום</h2>
          </v-col>
          <v-col>
            <h2 class="grey--text">מוצרים בהזמנה</h2>
            <v-simple-table>
              <thead>
                <tr>
                  <th class=""></th>
                  <th class="text-center">מוצר</th>
                  <th class="">סכום</th>
                  <th class="">כמות</th>
                  <th class="">הסרת מוצר</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  height="100px"
                  v-for="(item, index) in userCart"
                  :key="index"
                >
                  <td>
                    <v-responsive>
                      <v-img
                        aspect-ratio="1"
                        width="80px"
                        max-height="80"
                        class="mx-auto"
                      >
                      </v-img>
                    </v-responsive>
                  </td>

                  <td class="hover">
                    <div class="white--text text-truncate">
                      <router-link
                        class="white--text"
                        style="text-decoration: none"
                        :to="{ name: 'product', params: { id: item.id } }"
                        >{{ item.title }}</router-link
                      >
                    </div>
                  </td>

                  <td>{{ item.price * item.quantity }} ש"ח</td>

                  <td>
                    <!-- <v-responsive>
                  <v-select
                    v-model="item.quantity"
                    :items="options"
                    label="1"
                    single-line
                    @change="onChange(index)"
                  >
                  </v-select>
                </v-responsive> -->
                    {{ item.quantity }}
                  </td>

                  <td>
                    <v-btn
                      text
                      bottom
                      color=" "
                      @click="deleteProductFromCart(index)"
                    >
                      <v-icon small>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-col>
          <v-row flat solo> </v-row>
        </v-sheet>
      </v-col>
      <v-col>
      <v-card dark class="" max-width="350" min-width="350" height="340">
        <v-card-text class="center grey--text caption">
          <v-col>
            <v-row class="center card-text">
              <h2>סיכום הזמנה</h2>
            </v-row>
            <v-row class="card-text">
              <h2>סה"כ מוצרים:</h2>
              <v-spacer></v-spacer>
              <h2>{{ totalAmount }} ש"ח</h2>
            </v-row>
            <v-row class="card-text">
              <h2>דמי משלוח:</h2>
              <v-spacer></v-spacer>
              <h2>30 ש"ח</h2>
            </v-row>
            <v-row class="card-text">
              <h2>סה"כ לתשלום:</h2>
              <v-spacer></v-spacer>
              <h2>{{ totalAmount + 30 }} ש"ח</h2>
            </v-row>
          </v-col>
        </v-card-text>
        <v-card-actions class="mx-auto center">
          <v-btn bottom color="success black--text " width="300"
           @click="addToOrder()">
            <router-link
              class="black--text"
              style="text-decoration: none"
              to="/payment"
              ><span>ביצוע הזמנה</span></router-link
            >
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-col>
    </v-layout>
  </v-content>
</template>
<script>
import links from "./cartLinks";

export default {
  name: "order",

  components: {
    links,
  },

  data() {
    return {
      userCart: [],
      users: [],
      totalAmount: null,
    };
  },

  mounted() {
    this.getCart();
    this.getclients();
  },
  computed: {
    client() {
      return this.$store.state.client;
    },
  },
  methods: {
 randomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
},

    getCart() {
      fetch(`http://localhost:5000/cart/${this.client}`)
        .then((response) => response.json())
        .then((data) => {
          this.userCart = data;
          console.log(data);
          console.log(this.userCart);
          this.totalAmount = this.userCart.reduce((currentTotal, item) => {
            return item.newprice + currentTotal;
          }, 0);
        });
    },
    getclients() {
      fetch(`http://localhost:5000/clients/${this.client}`)
        .then((response) => response.json())
        .then((data) => {
          this.users = data;
          console.log(this.users);
       


        });
    },
     addToOrder() {

   const randomString = this.randomString(8);
  
    
        fetch(`http://localhost:5000/orders/add`, {
          method: "post",
          body: JSON.stringify({
     
            order_id: randomString,
         sum_price: this.totalAmount,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((jsonObject) => {
           jsonObject;
        
            console.log("edit successfully", jsonObject.id);

          });
    
    },
  },
};
</script>
<style scoped>
.card-text {
  border-bottom: 1px solid black;
  height: 60px;

  align-items: center;
}
.border {
  border-bottom: 1px solid black;
}
</style>
