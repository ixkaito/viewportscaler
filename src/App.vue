<template>
  <div id="app">
    <img src="./assets/images/logo.svg">
    <ViewportScaler title="ViewportScaler" property="font-size"/>
  </div>
</template>

<script>
import ViewportScaler from './components/ViewportScaler.vue'

export default {
  name: 'app',
  components: {
    ViewportScaler
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
