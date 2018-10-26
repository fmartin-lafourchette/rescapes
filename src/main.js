import Vue from 'vue'
import './plugins/vuetify'
import VueRouter from 'vue-router'
import App from './App.vue'
import CreditCard from './components/CreditCard.vue'
import Intro from './components/Intro.vue'
import BookYourMenu from './components/BookYourMenu.vue'
import InvitFriends from './components/InvitFriends.vue'
import Register from './components/Register.vue'
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
    {path: '/', component: Intro},
    {name: 'BookYourMenu', path: '/BookYourMenu', component: BookYourMenu, props: {isInvite: false}},
    {name: 'bookYourMenuFriend', path: '/bookYourMenuFriend', component: BookYourMenu, props: {isInvite: true}},
    {path: '/register', component: Register},
    {name:'InvitFriends',path: '/invitFriends', component: InvitFriends},
    {name: 'CreditCard', path: '/creditCard', component: CreditCard, props: true},
    {name: 'End', path: '/end', component: End}
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
