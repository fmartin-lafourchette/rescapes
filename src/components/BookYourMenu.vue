<template>
  <v-content>
    <Header
      :restaurant="restaurant"
      logo="./assets/lafourchette.svg"
    />
    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <template v-for="dish in restaurant.dishes">
            <v-flex xs12 v-if="dish.header">
              <v-subheader
                :key="dish.header"
              >
                {{ dish.header }}
              </v-subheader>
            </v-flex>
            <v-flex xs12 sm6 md3 v-if="!dish.header">
              <v-card
                class="gray--text mt-3"
              >
                <v-layout>
                  <v-flex xs5>
                    <v-img
                      :src=dish.img
                      height="100%"
                    ></v-img>
                  </v-flex>
                  <v-flex xs7>
                    <v-card-title primary-title>
                      <div class="text-truncate">
                        <div class="headline">{{dish.name}}</div>
                        <div>{{dish.description}}</div>
                      </div>
                    </v-card-title>
                    <v-card-actions class="actions">
                    <v-btn
                      flat
                      icon
                      @click="decrement(dish)"
                      color="primary"
                    >
                      -
                    </v-btn>
                    <span class="primary-text mx-3">{{dish.quantity}}</span>
                    <v-btn
                      flat
                      icon
                      v-on:click="increment(dish)"
                      color="primary"
                    >
                      +
                    </v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </template>
        </v-layout>
      </v-container>
    </v-card>
  </v-content>
</template>

<script>
  import Header from './Header.vue';

  export default {
    components: {
      Header
    },
    methods: {
      decrement (dish) {
        dish.quantity && dish.quantity--
      },
      increment (dish) {
        dish.quantity++
      },
    },
    data: () => ({
      restaurant: {
        name: 'Le bon jour',
        dishes: [
          { header: 'Entrée' },
          {
            quantity: 0,
            name: 'salade de choux',
            description: 'Une salade de choux',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg'
          }, {
            quantity: 0,
            name: 'salade de crabes',
            description: 'Une salade de crabes',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg'
          }, {
            name: 'salade d\'endives',
            description: 'Une salade d\'endives',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg'
          }, {
            quantity: 0,
            name: 'salade de choux',
            description: 'Une salade de choux',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg'
          }, {
            quantity: 0,
            name: 'salade de crabes',
            description: 'Une salade de crabes',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg'
          }, {
            quantity: 0,
            name: 'salade d\'endives',
            description: 'Une salade d\'endives',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg'
          },
          { header: 'Plat' },
          {
            quantity: 0,
            name: 'Pâtes carbonara',
            description: 'des pâtes miam miam',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg'
          }, {
            quantity: 0,
            name: 'Pizza Quatre fromages',
            description: 'pizza',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg'
          }, {
            type: 'Plat',
            name: 'Pâtes carbonara',
            description: 'des pâtes miam miam',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg'
          }, {
            quantity: 0,
            name: 'Pizza Quatre fromages',
            description: 'pizza',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg'
          },
          { header: 'Dessert' },
          {
            quantity: 0,
            name: 'Panna cota',
            description: 'Le seul dessert disponible',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg'
          }, {
            quantity: 0,
            name: 'Panna cota',
            description: 'Le seul dessert disponible',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg'
          }
        ]
      }
    })
  }
</script>

<style scoped>
  .title {
    font-size: 24px;
    text-align: center;
  }
</style>
