<template>
  <v-content>
    <links></links>
    <!-- <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              ref="address"
              v-model="address"
              :rules="[
                () => !!address || 'This field is required',
                () =>
                  (!!address && address.length <= 25) ||
                  'Address must be less than 25 characters',
                addressCheck,
              ]"
              label="רחוב, בניין ומספר בית"
              placeholder="Snowy Rock Pl"
              counter="25"
              required
            ></v-text-field>
            <v-text-field
              ref="city"
              v-model="city"
              :rules="[() => !!city || 'This field is required', addressCheck]"
              label="עיר"
              placeholder="El Paso"
              required
            ></v-text-field>

            <v-text-field
              ref="zip"
              v-model="zip"
              :rules="[() => !!zip || 'This field is required']"
              label="מיקוד"
              required
              placeholder="79938"
            ></v-text-field>

            <v-text-field ref="טלפון" v-model="phone" label="טלפון" required>
            </v-text-field>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn class="mx-auto" color="primary" text @click="submit">
              מעבד לביצוע הזמנה
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row> -->
    <v-layout align-center justify-center>
      <v-flex xs12 sm10 md10>
        <div>
          <h2 class="grey--text mb-4">כתובת למשלוח</h2>
          <v-subheader class="grey--text subtitle-1"
            >רחוב, מספר בית ודירה</v-subheader
          >
          <v-text-field
               :rules="[rules.required]"
            class="input-style"
            full-width
            color="white"
            single-line
            v-model="address"
            label="רחוב מספר בית ודירה"
            type="text"
            dense
            filled
            solo
            background-color="white"
         required
          ></v-text-field>
          <v-subheader class="grey--text subtitle-1">עיר</v-subheader>
          <v-text-field
            class="input-style"
                :rules="[rules.required]"
            full-width
            dense
            filled
            solo
            color="white"
            single-line
            v-model="city"
            label="עיר"
            type="text"
            background-color="white"
          ></v-text-field>
          <v-subheader class="grey--text subtitle-1">מיקוד</v-subheader>
          <v-text-field
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
            label="מיקוד"
          ></v-text-field>
          <v-subheader class="grey--text subtitle-1">מספר טלפון</v-subheader>
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
            v-model="phone"
            label="מספר טלפון"
          ></v-text-field>
          <v-btn color="success" @click="register">מעבר להזמנה</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-content>
</template>
<script>
import links from "./cartLinks";

export default {
  name: "shipping",

  components: {
    links,
  },

  props: {},

  data() {
    return {
         rules: {
          required: value => !!value || 'חובה',
          // min: v => v.length >= 8 || 'Min 8 characters',
     
        },
      errorMessages: "",

      address: null,
      city: null,
 phone: null,
      zip: null,

      formHasErrors: false,
    };
  },

  mounted() {},
  computed: {
     client() {
      return this.$store.state.client;
    },
    // form() {
    //   return {
    //     name: this.name,
    //     address: this.address,
    //     city: this.city,
    //     state: this.state,
    //     zip: this.zip,
    //     country: this.country,
    //   };
    // },
  },
  methods: {

    register() {
      this.updateClient()
  location.href = "http://localhost:8080/#/order";
    },
       updateClient() {
   
      fetch(`http://localhost:5000/clients/`, {
        method: "put",
        body: JSON.stringify({
          id: this.client,
     
          address: ` ${this.address},  ${this.city}`,
          zip: this.zip,
          phone: this.phone

        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((jsonObject) => {jsonObject});
    },



    // addressCheck() {
    //   this.errorMessages =
    //     this.address && !this.name ? `Hey! I'm required` : "";

    //   return true;
    // },
    // resetForm() {
    //   this.errorMessages = [];
    //   this.formHasErrors = false;

    //   Object.keys(this.form).forEach((f) => {
    //     this.$refs[f].reset();
    //   });
    // },
    // submit() {
    //   this.formHasErrors = false;

    //   Object.keys(this.form).forEach((f) => {
    //     if (!this.form[f]) this.formHasErrors = true;

    //     this.$refs[f].validate(true);
    //   });
    // },
  },
  watch: {
    // name() {
    //   this.errorMessages = "";
    // },
  },
};
</script>
<style scoped>
.form {
}
</style>
