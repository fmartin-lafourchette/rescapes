<template>
  <v-app>
    <v-toolbar app class="primary secondary--text">
      <v-toolbar-title class="headline">
        <span class="font-weight-light">LaFourchette</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
