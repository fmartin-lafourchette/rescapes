import Vue from 'vue'
import './plugins/vuetify'
import VueRouter from 'vue-router'
import App from './App.vue'
import CreditCard from './components/CreditCard.vue'
import BookYourMenu from './components/BookYourMenu.vue'
import InvitFriends from './components/InvitFriends.vue'
import End from './components/End.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
 iconfont: 'mdi'
})

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', component: BookYourMenu},
    {path: '/invitFriends', component: InvitFriends},
    {path: '/creditCard', component: CreditCard},
    {path: '/end', component: End}
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
