<template>
    <v-container class="">
  <v-layout>
    <v-row>
      <v-col cols="3">
          <v-layout align-center justify-center>
              <v-flex xs12 sm10 md10>
                  <div>
                <h1 class="grey--text mb-4">איזור אישי</h1>
                <h2 class="grey--text mb-4">פרטים אישיים</h2>
              <v-subheader class="grey--text subtitle-1">שם משתמש</v-subheader>
              <v-text-field
                :rules="[rules.required]"
                class="input-style"
                full-width
                color="white"
                single-line
                v-model="username"
                label="שם מלא"
                type="text"
                dense
                filled
                solo
                background-color="white"
                required
              ></v-text-field>
              <v-subheader class="grey--text subtitle-1"
                >כתובת דוא"ל</v-subheader
              >
              <v-text-field
                class="input-style"
               :rules="emailRules"
                full-width
                dense
                filled
                solo
                color="white"
                single-line
                v-model="email"
                label="עיר"
                type="email"
                background-color="white"
              ></v-text-field>
           
              <v-subheader class="grey--text subtitle-1">כתובת</v-subheader>
              <v-text-field
                :rules="[rules.required]"
                class="input-style"
                full-width
                color="white"
                single-line
                v-model="address"
                label="שם מלא"
                type="text"
                dense
                filled
                solo
                background-color="white"
                required
              ></v-text-field>
           
                  <v-subheader class="grey--text subtitle-1">מיקוד</v-subheader>
                  <v-text-field
                    type="number"
                    :rules="[rules.required]"
                    class="input-style"
                    color="white"
                    full-width
                    light
                    dense
                    solo
                    filled
                    background-color="white"
                    single-line
                    v-model="zip"
                    label="מספר טלפון"
                  ></v-text-field>
            
              <v-subheader class="grey--text subtitle-1"
                >מספר טלפון</v-subheader
              >
              <v-text-field
                :rules="[rules.required]"
                class="input-style"
                full-width
                color="white"
                single-line
                v-model="phone"
                label="שם מלא"
                type="text"
                dense
                filled
                solo
                background-color="white"
                required
              ></v-text-field>
             
              <v-btn color="success" @click="updateClient">עדכון פרטים</v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-col>
      <v-col cols="8" class="mt-16">
        <h2 class="grey--text">ההזמנות שלי</h2>
    <v-simple-table
      fixed-header
      height="300px"
      class="table mx-auto text-center"
      calculate-widths
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="">מספר הזמנה</th>
            <th class="">תאריך הזמנה</th>
            <th class="">סכום הזמנה</th>
            <th class="">פרטי הזמנה</th>
            <th class="">ביטול הזמנה</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in orders" :key="i">
            <td>{{ item.order_id }}</td>

            <td>{{ item.order_date }}</td>
            <td>{{ item.sum_price }}</td>
            <td><v-btn>פרטים</v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
      </v-col>
    </v-row>
  </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "personal",
  props: {},
  data() {
      return {
            emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
  orders:[],
      username: [],
      email: [],
      password: [],
      confirmPassword: [],
      address: [],
      city: [],
      zip: [],
        phone: [],
      users:[],
      rules: {
        required: (value) => !!value || "חובה",
        // min: v => v.length >= 8 || 'Min 8 characters',
    },
   
    };
  },

  mounted() {
      this.getUsers();
    this.getOrders()
  },
  computed: {

    client() {
      return this.$store.state.client;
    },
  },
  methods: {
    getUsers() {
      fetch(`http://localhost:5000/clients/${this.client}`)
        .then((response) => response.json())
          .then((data) => {
     
         for (let x = 0; x < data.length; x++) {
            this.users.push(data[x]);
  console.log(this.users)
            this.username =
              this.users[x].userName;
            this.email =
             this.users[x].email;
        
       
            this.address =
             this.users[x].address;
            this.zip =
             this.users[x].zip;
            this.phone =
             this.users[x].phone;
       
       
          }
        });
    },
      updateClient() {
        console.log(this.$store.state.client)
      fetch(`http://localhost:5000/clients/`, {
        method: "put",
        body: JSON.stringify({
          id: this.$store.state.client,
        //   id: 1,
          userName: this.username,
        
          email: this.email,
        //   password: this.password,

          address: ` ${this.address},  ${this.city}`,
          zip: this.zip,
          phone: this.phone,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((jsonObject) => {
          jsonObject;
        });
      },
      getOrders() {
         fetch("http://localhost:5000/orders/register")
        .then((response) => response.json())
        .then((data) => {
          this.orders= data;
          console.log(this.orders);
        });
    },
  },

};
</script>

<style></style>
