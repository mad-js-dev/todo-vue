import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App.vue'
import MainPage from './components/04-Pages/MainPage.vue'
import LoginPage from './components/04-Pages/LoginPage.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: MainPage },
  { path: '/login', component: LoginPage }
]

const router = new VueRouter({
  mode:'history',
  routes
})

const store = new Vuex.Store({
  state: {
    count: 41 
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

store.commit('increment')
console.log(store.state.count) // -> 1

new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')
