<template>
    <v-content>
        <Header
                :restaurant="restaurant"
                logo="./assets/lafourchette.svg"
        />
        <div class="circleWhite">
            <div class="circleGreen">
                <img src="../assets/circle-send.png" width="25" style="z-index:5;margin:13px 0 0 13px;"/>
            </div>
        </div>
        <v-card>
            <v-container
                    fluid
                    grid-list-lg
            >
                <div class="choose">Invitez vos convives à choisir leurs plats</div>
                <div style="text-align: center">
                    Ils recevront par email une invitation pour<br /> sélectionner leur plats<br /><br />
                    <div style="border:1px solid grey;border-radius: 5px;padding:10px;">
                        <div style="text-align: left; position: relative">
                            <strong>À  </strong>
                            <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="adresse@mail.com"
                                    style="display: inline-block"
                            ></v-text-field>
                            <img src="../assets/contact.png" style="position: absolute; top:20px; right: 5px;" />
                        </div>
                        <div><hr style="margin:0 -10px;" /></div>
                        <v-textarea
                                name="input-3-1"
                                label="Quelques mots pour vos convives"
                        ></v-textarea>
                    </div>
                    <br />
                    <br />
                    <div class="px-3">
                        <v-btn block color="primary" @click="validate()">ENVOYER L'INVITATION</v-btn>
                        <v-btn block flat style="color:#589442">PAS MAINTENANT</v-btn>
                    </div>
                </div>
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
      validate () {
        this.$router.push('End');
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
