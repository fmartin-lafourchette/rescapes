<template>
  <v-app>
    <v-toolbar app class="primary secondary--text">
      <v-toolbar-title class="headline">
        <img class="mt-1" src="./assets/lafourchette.svg" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
