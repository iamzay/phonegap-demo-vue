import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Camera from './components/camera.vue'
import MainPage from './components/mainPage.vue'
import dialNumber from './components/dialNumber.vue'
import callLog from './components/callLog.vue'
import deviceInfo from './components/deviceInfo.vue'
import networkInfo from './components/networkInfo.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: MainPage, name: 'mainPage' },
  { path: '/camera', component: Camera, name:'camera',},
  { path: '/dial', component: dialNumber, name:'dialNumber'},
  { path: '/calllog', component: callLog, name: 'callLog'},
  { path: '/device', component: deviceInfo, name: 'deviceInfo'},
  { path: '/network', component: networkInfo, name: 'networkInfo'},
]
const router = new VueRouter({
  routes 
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
