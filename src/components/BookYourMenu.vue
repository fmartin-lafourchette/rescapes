<template>
  <v-content>
    <Header
      :restaurant="restaurant"
      logo="./assets/lafourchette.svg"
    />
    <div class="circleWhite">
        <div class="circleGreen">
            <img src="../assets/circle-validate.png" width="30" style="z-index:5;margin:11px 0 0 10px;"/>
        </div>
    </div>
    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <div class="choose">Choisissez ce que vous souhaitez manger</div>
        <div>
            <v-radio-group v-model="radioGroup" class="test">
                <v-radio
                        style="font-size:10px;"
                        v-for="n in 1"
                        :key="n"
                        :label="`Je commande pour l'ensemble de la table`"
                        :value="n"
                        color="primary"
                ></v-radio>
            </v-radio-group>
        </div>
        <v-layout row wrap>
          <template v-for="dish in restaurant.dishes" class="dish">
            <v-flex xs12 v-if="dish.header">
              <v-subheader class="section"
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
                    <v-img class="picture"
                      :src=dish.img
                      aspect-ratio=1
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
                    <span class="price">{{dish.price}}€</span>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </template>
        </v-layout>
      </v-container>
      <div class="px-3">
        <v-btn block color="primary" @click="validate()">Valider</v-btn>
        </div>
        <v-flex xs12>
            <div class="footer">
                <strong>Carte bancaire nécessaire</strong>
                <br />
                Confirmation immédiate - Service gratuit<br />
                Annulation gratuite jusqu'à 24h avant le repas<br />
                En cliquant sur "CONTINUER" j'accepte les conditions générales d'utilisation
            </div>
        </v-flex>
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
      validate () {
        this.$router.push('InvitFriends');
      }
    },
    data: () => ({
      restaurant: {
        name: 'Le bon jour',
        dishes: [
          { header: 'ENTREES . 5 choix' },
          {
            quantity: 0,
            name: 'Oeuf parfait et lentilles',
            description: 'descritpion',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg',
            price: 7
          }, {
            quantity: 0,
            name: 'Foie gras maison, toasts et confit d’oignons',
            description: 'descritpion',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg',
            price: 15
          }, {
            name: 'Millefeuille tomates aubergines mozzarella',
            description: 'descritpion',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg',
            price: 8
          }, {
            quantity: 0,
            name: 'Oeufs mayonnaise à l\'ancienne',
            description: 'descritpion',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg',
            price: 6
          }, {
            quantity: 0,
            name: 'Assiette de poireaux et vinaigrette mousseline, parmesan',
            description: 'descritpion',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg',
            price: 7
          },
          { header: 'PLATS . 5 choix' },
          {
            quantity: 0,
            name: 'Tartare de boeuf Charolais, au couteau, pommes grenailles et salade.',
            description: 'descritpion',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg',
            price: 17
          }, {
            quantity: 0,
            name: 'Tartare de dorade à l’aneth, mesclun.',
            description: 'descritpion',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg',
            price: 19
          }, {
            type: 'Plat',
            name: 'Entrecôte de boeuf "Angus" 300 Grs, os à moëlle, sauce poivre et pommes grenailles.',
            description: 'descritpion',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg',
            price: 25
          }, {
            quantity: 0,
            name: 'Pièce du boucher, sauce au bleu, purée maison.',
            description: 'descritpion',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg',
            price: 19
          }, {
            quantity: 0,
            name: 'Blanquette de volaille, riz basmati',
            description: 'descritpion',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg',
            price: 17
          },
          { header: 'DESSERTS . 5 choix' },
          {
            quantity: 0,
            name: 'Poire pochée au caramel de beurre salé et tuile',
            description: 'descritpion',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg',
            price: 8
          }, {
            quantity: 0,
            name: 'Mousse au chocolat et amandes effilées',
            description: 'descritpion',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg',
            price: 6
          },
          {
            quantity: 0,
            name: 'Tiramisu au cafe',
            description: 'descritpion',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg',
            price: 6
          }, {
            quantity: 0,
            name: 'Crème brulée à la vanille Bourbon',
            description: 'descritpion',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg',
            price: 8.50
          }, {
            quantity: 0,
            name: 'Café ou thé gourmand',
            description: 'descritpion',
            img: 'https://www.papillesetpupilles.fr/wp-content/uploads/2018/04/Salade-Cobb-1150x0.jpg',
            price: 7
          }
        ]
      }
    })
  }
</script>

<style scoped>
    .test >>> label {
        font-size:1.3em;
    }
  .circleWhite {
    background:#ffffff;
    border-radius:50%;
    width:60px;
    height:60px;
    position: absolute;
    top: 170px;
    z-index: 2;
    margin:0 auto;
    left:50%;
    margin-left: -30px;
  }

  .circleGreen {
    background:#589442;
    border-radius:50%;
    width:50px;
    height:50px;
    position: absolute;
    z-index: 3;
    margin:0 auto;
    left:50%;
    margin-left: -25px;
    top: 5px;
  }

  .v-card {
      border-radius: 5px;
  }

  div.choose {
      margin-top: 1.3em;
      margin-bottom: 1em;
      text-align: center;
      font-size: 1em;
      font-weight: bold;
  }

  .picture {
      border-radius: 5px;
      margin-left: 5px;
  }

  .section {
      color: black;
      font-size: 1.2em;
      padding: 0px;
  }

  .headline {
      font-weight: bold;
      font-size: 1em!important;
  }

  .actions {
      position: absolute;
      bottom: -5px;
      right: 5px;
      color: #589442;
      font-weight: bold;
  }

  .price {
      position: absolute;
      bottom: 13px;
      color: #589442;
      font-size: 1em;
  }

  .footer {
      margin-top: 15px;
      text-align: center;
      font-size: 0.8em;
  }
</style>
