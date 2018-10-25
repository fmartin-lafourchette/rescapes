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
          <div class="title">
            <span class="secondary--text">
              {{ restaurant.name }}
            </span>
          </div>
        </v-card-title>
        <center>
            <div
                class="toolbar secondary ma-2 px-3"
            >
                <span>2 pers</span>
                <span class="primary--text mx-2">·</span>
                <span>Ven 26/10</span>
                <span class="primary--text mx-2">·</span>
                <span>12:30</span>
                <span class="primary--text mx-2">·</span>
                <span>Sans offre</span>
            </div>
        </center>
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
    width: 100%;
    text-align: center;
    margin-top: -50px;
  }
  .toolbar {
      font-size: 17px;
      height: 40px;
      margin: auto;
      line-height: 40px;
      text-align: center;
      width: fit-content;
      border-radius: 20px;
  }
</style>
