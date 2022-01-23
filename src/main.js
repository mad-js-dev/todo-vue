import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import MainPage from './components/04-Pages/MainPage.vue'
import LoginPage from './components/04-Pages/LoginPage.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)

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
  routes // short for `routes: routes`
})


new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
