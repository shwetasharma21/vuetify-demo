<template>
  <v-app>
    <v-app-bar dark class="flex-grow-0" fixed>
      <b>Employee Management System</b>
      <v-spacer />
      <router-link to="/create" class="ma-2 white-link">Create</router-link>
      <router-link to="/records" class="ma-2 white-link">Records</router-link>
      <v-app-bar-nav-icon>
        <a href="https://github.com/shwetasharma21">
          <v-img
            :src="require('./assets/github.svg')"
            max-height="40"
            class="ma-2"
          />
        </a>
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-main class="mt-12">
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
.white-link {
  text-decoration: none;
  color: white;
}
</style>
