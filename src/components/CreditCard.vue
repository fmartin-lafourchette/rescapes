<template>
    <v-content>
        <Header
                :restaurant="restaurant"
                logo="./assets/lafourchette.svg"
        />
        <div class="circleWhite">
            <div class="circleGreen">
                <img src="../assets/circle-credit.png" width="30" style="z-index:5;margin:13px 0 0 10px;"/>
            </div>
        </div>
        <v-card>
            <v-container
                    fluid
                    grid-list-lg
                    style="background-color: #F3F3F5"
            >
                <div class="choose">
                    <img src="../assets/card.png" style="position: absolute;top:33px;" /> <span style="display: inline-block;margin-left:30px;margin-top: -5px;">Carte bancaire nécessaire</span>
                </div>
                <div>
                    Cette réservation est soumise à une empreinte bancaire d'un montant de {{ total }} €.<br />
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
                <v-btn block color="primary" @click="validate()">TERMINER ET PARTAGER</v-btn>
            </div>
            <div class="px-3" style="text-align: center;font-size: 0.9em;">
                <br />
                Opération sécurisée
                <br /><br />
                <font style="color:darkgrey;">En cliquant sur "TERMINER ET PARTAGER" vous acceptez les conditions générales de réservation du restaurant.</font>
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
    props: {
        total: Object
    },
    methods: {
      validate () {
        this.$router.push('InvitFriends');
      },
      increment (dish) {
        dish.quantity++
      },
    },
    data: () => ({
        total: 0,
        restaurant: {
            name: 'Le Bon Jour'
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
