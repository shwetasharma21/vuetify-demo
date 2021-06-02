<template>
  <v-app>
    <v-app-bar dark class="flex-grow-0" fixed>
      <v-app-bar-title>Hello</v-app-bar-title>
      <v-spacer />
      <router-link to="/records" class="ma-2 white-link">Records</router-link>
      <router-link to="/create" class="ma-2 white-link">Create</router-link>
    </v-app-bar>
    <v-content class="mt-12">
      <router-view />
    </v-content>
  </v-app>
</template>

<style scoped>
.white-link {
  text-decoration: none;
  color: white;
}
</style>
