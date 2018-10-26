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
                    style="background-color: #F3F3F5"
            >
                <div class="choose">
                    <img src="../assets/card.png" style="position: absolute;top:28px;" /> <span style="display: inline-block;margin-left:30px;margin-top: -5px;">Carte bancaire nécessaire</span>
                </div>
                <div>
                    Cette réservation est soumise à une empreinte bancaire d'un montant de x€.<br />
                    Aucun montant n'est débité imédiatement.<br /><br />
                    <div style="text-align: center">
                        <a href="" style="color:black;font-size:0.8em;">En savoir plus</a>
                    </div>
                </div>
            </v-container>
            <v-container>
                <div class="detail" style="font-weight: bold;">DETAILS DE LA CARTE</div>
                <div style="padding:10px;border:1px solid #CCCCCC;border-radius:5px;margin:10px 0;">
                    <template>
                        <v-form v-model="valid">
                            <v-text-field
                                    v-model="name"
                                    :rules="nameRules"
                                    label="Numéro de la carte"
                                    required
                            ></v-text-field>
                            <v-text-field
                                    v-model="name"
                                    :rules="nameRules"
                                    label="Titulaire de la carte"
                                    required
                            ></v-text-field>
                            <div style="width:50%;">
                                <v-text-field
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Date expiration"
                                        required
                                ></v-text-field>
                            </div>
                            <div style="width:50%;">
                                <v-text-field
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Code de sécurité"
                                        required
                                ></v-text-field>
                            </div>
                        </v-form>
                    </template>
                </div>
            </v-container>
            <div class="px-3">
                <v-btn block color="primary" @click="validate()">TERMINER LA RESERVATION</v-btn>
            </div>
            <div class="px-3" style="text-align: center;font-size: 0.9em;">
                <br />
                Opération sécurisée
                <br /><br />
                <font style="color:darkgrey;">En cliquant sur "TERMINER LA RESERVATION" vous acceptez les conditions générales de réservation du restaurant.</font>
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
            </div>
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
      validate () {
        this.$router.push('end');
      },
      increment (dish) {
        dish.quantity++
      },
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


    div.choose {
        margin-top: 1em;
        margin-bottom: 1em;
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
    }

    .price {
        position: absolute;
        bottom: 13px;
        color: #589442;
        font-size: 0.9em;
    }

    .footer {
        margin-top: 15px;
        text-align: center;
        font-size: 0.8em;
    }
</style>
