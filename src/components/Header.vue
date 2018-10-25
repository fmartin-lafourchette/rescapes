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
            height="40px"
            class="toolbar secondary ma-2"
        >
            <span>2 pers</span>
            <span class="primary--text mx-2">·</span>
            <span>Ven 26/10</span>
            <span class="primary--text mx-2">·</span>
            <span>12:30</span>
            <span class="primary--text mx-2">·</span>
            <span>Sans offre</span>
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
  .toolbar {
      font-size: 20px;
      border-radius: 20px;
  }
</style>
