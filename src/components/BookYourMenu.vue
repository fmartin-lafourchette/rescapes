<template>
  <v-content>
    <v-img
      src="https://cdn.vuetifyjs.com/images/lists/ali.png"
      height="300px"
    >
      <v-layout
        column
        fill-height
      >
        <v-card-title>
          <v-btn dark icon>
            <v-icon>chevron_left</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-title class="white--text pl-5 pt-5">
          <h1 class="font-weight-light secondary--text">
            Réservez votre menu pour votre réservation à : "{{ restaurant.name }}"
          </h1>
        </v-card-title>
      </v-layout>
    </v-img>
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
              <v-card class="gray--text dish-card pa-0">
                <v-layout>
                  <v-flex xs5>
                    <v-img
                      :src=dish.img
                      height="100%"
                    ></v-img>
                  </v-flex>
                  <v-flex xs7>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">{{dish.name}}</div>
                        <div>{{dish.description}}</div>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn class="primary">Ajouter</v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex xs12>
          </template>
        </v-layout>
      </v-container>
    </v-card>
  </v-content>
</template>

<script>
  export default {
    data: () => ({
      restaurant: {
        name: 'Le déjeuner dans l\'herbe',
        dishes: [
          { header: 'Entrée' },
          {
            name: 'salade de choux',
            description: 'Une salade de choux',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg'
          }, {
            name: 'salade de crabes',
            description: 'Une salade de crabes',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg'
          }, {
            name: 'salade d\'endives',
            description: 'Une salade d\'endives',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg'
          },
          { header: 'Plat' },
          {
            type: 'Plat',
            name: 'Pâtes carbonara',
            description: 'des pâtes miam miam',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg'
          }, {
            type: 'Plat',
            name: 'Pizza Quatre fromages',
            description: 'pizza',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg'
          },
          { header: 'Dessert' },
          {
            type: 'Dessert',
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
  .dish-card {
    padding: 0;
    margin: 0;
  }
</style>
