<template>
  <v-layout column ma-12>
    <v-data-table
      :headers="headers"
      :items="employees"
      :items-per-page="5"
      class="elevation-2"
    >
      <template v-slot:top>
        <v-toolbar>
          <v-toolbar-title>Employee Records</v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-table>
  </v-layout>
</template>
<script>
export default {
  name: "Records",
  data: () => {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Date of Birth", value: "dob" },
        { text: "Department", value: "dept" },
        { text: "Designation", value: "desig" },
      ],
    };
  },
  computed: {
    employees() {
      return this.$store.getters.getEmployees;
    },
  },
};
</script>
