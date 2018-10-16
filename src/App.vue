<template>
  <div id="app">
    <loading v-if="isConnecting"/> 
    <router-view></router-view>
  </div>
</template>

<script>
import loading from './components/loading.vue'
import mainPage from './components/mainPage.vue'

export default {
  name: 'app',
  components: {
    loading,
    mainPage,
  },
  data () {
    return {
      isConnecting: true,
    }
  },
  methods: {
    onDeviceReady () {
      this.isConnecting = false
    },
  },
  created () {
    document.addEventListener('deviceready', this.onDeviceReady, false)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
