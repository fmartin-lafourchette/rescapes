<template>
    <v-img
      src="https://u.preprod.tfstatic.com/restaurant_photos/235/279235/169/612/le-bon-jour-entree-cf9b4.jpg"
      height="200px"
    >
      <v-layout
        column
        fill-height
      >
        <v-card-title>
          <v-btn dark icon>
            <v-icon>chevron_left</v-icon>
          </v-btn>
          <v-container class="title">
            <span class="secondary--text">
              {{ restaurant.name }}
            </span>
          </v-container>
        </v-card-title>
        <v-toolbar
            flat
            floating
        >
            <v-toolbar-title>2 pers</v-toolbar-title>
            <v-toolbar-title>Ven 26/10</v-toolbar-title>
            <v-toolbar-title>12:30</v-toolbar-title>
            <v-toolbar-title>Sans offre</v-toolbar-title>
        </v-toolbar>
      </v-layout>
      <v-card-text style="height: 100px; position: relative">
        <v-img src="./assets/lafourchette.svg"></v-img>
      </v-card-text>
    </v-img>
</template>

<script>
  export default {
    components: {
    },
    methods: {
    },
    data: () => ({
    }),
    props: {
        restaurant: Object,
        logo: String
    }
  }
</script>

<style scoped>
  .title {
    font-size: 24px;
    text-align: center;
    position: absolute;
  }
</style>
