<template>
  <v-app id="inspire">
    <!-- <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    name="email"
                    label="email"
                    type="email"
                    v-model="email"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
    
                <v-btn color="success" @click="login"> התחבר</v-btn>
                <v-spacer></v-spacer>
   <v-row >
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
         הירשם
        </v-btn>
      </template>
     <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
             
              >
                <v-text-field
                  label="user name"
                  v-model="usernamea"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
          v-model="emaila"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                    v-model="passworda"
                  required
                ></v-text-field>
              </v-col>
         
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="register(); dialog = false"
  
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main> -->

    <v-main class="all">
<v-layout align-center justify-center>
  <v-flex xs12 sm8 md10>
<div>
  <h1>sasasasa</h1>
  dsdsds
  <h2 class="grey--text mb-4">כניסה</h2>
  <v-subheader class="grey--text subtitle-1 ">כתובת דואר אלקטרוני</v-subheader>
      <v-text-field
      class="input-style "
      :rules="emailRules"
      full-width
      filled
      color="white"
      single-line
      v-model="email"
        label="דואל"
        type="email"
      dense
      solo
        background-color="white"
       
      ></v-text-field>
      <v-subheader class="grey--text subtitle-1">סיסמה</v-subheader>
      <v-text-field
      :type="show1 ? 'text' : 'password'"
      @click:append="show1 = !show1"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
       :rules="passwordRules"
         
      class="input-style "
      color="white"
      
      full-width
      light
      filled
      dense
      solo
      background-color="white"
      single-line
      v-model="password"
        label="סיסמה"
    
      ></v-text-field>
      <v-btn color="success" @click="login"> התחבר</v-btn>
      
      <p class="grey--text subtitle-1 mt-4">עדיין לא רשום? <router-link  style="text-decoration: none; color: white;" to="/register">הרשמה</router-link></p>
   
   
  </div>

</v-flex>
</v-layout>

    </v-main>
   
  </v-app>
   

</template>


<script>
export default {
  name: "login",
  props: {
    source: String,
  },
  data() {
    return {
      show1: false,
       emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
         passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 4) || 'Password must be at least 4 characters'
      ],
        password: 'Password',
        // rules: {
        //   required: value => !!value || 'חובה',
        //   // min: v => v.length >= 8 || 'Min 8 characters',
     
        // },

      // dialog: false,
        username:"",
      email: "",
      password: "",
 
      access: false,
     
      userID : null,
   
    };
  },

  mounted() {
    this.getUsers();
  },

  methods: {
    login() {
      fetch("http://localhost:5000/clients/login", {
        method: "POST",
        body: JSON.stringify({
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
            alert("כתובת מייל או סיסמה לא נכונים");
          } else {
            console.log("no error");
            this.userID = data.id
            this.$store.state.client= data.id
      location.href = "http://localhost:8080/#/";
       
          }
        });
    },


    getUsers() {
      fetch("http://localhost:5000/clients/register")
        .then((response) => response.json())
        .then((data) => {
          this.$store.state.users = data;
          console.log(this.users);
        });
    },
  },
  computed: {
users(){
  return  this.$store.state.users
},
client(){
  return  this.$store.state.client
}
  },
};
</script>

<style>
.all{
  background-color: #263238;
}
.input-style{
 
width: 500px;
}

</style>
