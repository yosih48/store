<template>
  <v-app class="">
    <v-main class="all">
      <v-layout align-center justify-center>
        <v-flex xs12 sm10 md10>
          <div>
            <h2 class="grey--text mb-4">הרשמה</h2>
            <v-subheader class="grey--text subtitle-1">שם מלא</v-subheader>
            <v-text-field
              class="input-style "
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
            ></v-text-field>
            <v-subheader class="grey--text subtitle-1"
              >כתובת דואר אלקטרוני</v-subheader
            >
            <v-text-field
              class="input-style "
               :rules="emailRules"
              full-width
              dense
              filled
              solo
              color="white"
              single-line
              v-model="email"
              label="דואל"
              type="email"
              background-color="white"
            ></v-text-field>
            <v-subheader class="grey--text subtitle-1">סיסמה</v-subheader>
            <v-text-field
            :type="show1 ? 'text' : 'password'"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            @click:append="show1 = !show1"
              class="input-style "
              color="white"
              full-width
              light
              dense
              solo
              filled
              background-color="white"
              single-line
              v-model="password"
              label="סיסמה"
            
            ></v-text-field>
            <v-subheader class="grey--text subtitle-1">אימות סיסמה</v-subheader>
            <v-text-field
            :type="show1 ? 'text' : 'password'"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            @click:append="show1 = !show1"
              class="input-style "
              color="white"
              full-width
              light
              dense
              solo
              filled
              background-color="white"
              single-line
              v-model="confirmPassword"
              label="אימות סיסמה"
             
            ></v-text-field>
            <v-btn color="success" @click="register"> הרשמה</v-btn>

            <p class="grey--text subtitle-1 mt-4">
              לקוח קיים?
              <router-link
                style="text-decoration: none; color: white"
                to="/login"
                >כניסה</router-link
              >
            </p>
          </div>
        </v-flex>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "register",
  props: {},
  data() {
    return {
              show1: false,
    
      password: 'Password',
            emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
        rules: {
          required: value => !!value || 'חובה.',
          min: v => v.length >= 4 || 'מינימום 4 תווים',
     
        },
      // dialog: false,
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },

  mounted() {},

  methods: {
    register() {
      fetch("http://localhost:5000/clients/add", {
        method: "POST",
        body: JSON.stringify({
          userName: this.username,
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error !== false) {
            console.log(data);
            alert("שגיאת רישום");
          } else if (this.password !== this.confirmPassword) {
            alert("סיסמאות אינם תואמות");
          } else {
            console.log("no error");
            alert("נרשמת בהצלחה");
            // window.location.reload();
            location.href = "http://localhost:8080/#/";
          }
        });
    },
  },
  computed: {},
};
</script>

<style>

</style>
