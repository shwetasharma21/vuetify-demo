<template>
  <v-layout justify-center>
    <v-row>
      <v-col class="ma-0">
        <v-form @submit.prevent="submit" class="mt-12">
          <v-text-field
            v-model="name"
            label="Name"
            solo
            class="ma-2 mt-0 mb-0"
            prepend-inner-icon="mdi-account"
          />
          <v-text-field
            v-model="email"
            label="Email"
            solo
            class="ma-2 mt-0 mb-0"
            prepend-inner-icon="mdi-email"
          />
          <v-menu
            v-model="menu"
            transition="scale-transition"
            :close-on-content-click="true"
            min-width="auto"
            offset-y
            :nudge-right="40"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dob"
                label="Date of Birth"
                readonly
                solo
                class="ma-2 mt-0 mb-0"
                v-bind="attrs"
                v-on="on"
                prepend-inner-icon="mdi-calendar"
              />
            </template>
            <v-date-picker v-model="dob" @input="menu = false" />
          </v-menu>
          <v-select
            v-model="dept"
            :items="depts"
            label="Department"
            solo
            class="ma-2 mt-0 mb-0"
            prepend-inner-icon="mdi-office-building"
          />
          <v-text-field
            v-model="desig"
            label="Designation"
            solo
            class="ma-2 mt-0 mb-0"
            prepend-inner-icon="mdi-account-tie"
          />
          <v-btn solo class="ma-2 mt-0 mb-0" type="submit">Submit</v-btn>
        </v-form>
      </v-col>
      <v-col class="ma-0 pa-0">
        <v-img
          :src="require('../assets/emp_img.png')"
          contain
          max-height="80%"
        />
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  name: "Create",
  data() {
    return {
      name: "",
      email: "",
      menu: "",
      dob: "",
      desig: "",
      dept: "",
      depts: ["IT", "Accounts", "HR"],
    };
  },
  methods: {
    submit() {
      const { name, email, dob, desig, dept } = this;
      const user = { name, email, dob, desig, dept };
      console.log(user);
      this.name = "";
      this.email = "";
      this.dob = "";
      this.desig = "";
      this.dept = "";
    },
  },
};
</script>

<style scoped></style>
