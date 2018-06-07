<template>
  <div id="app">
    <img src="./assets/images/logo.png">
    <ViewportSizer title="ViewportSizer"/>
  </div>
</template>

<script>
import ViewportSizer from './components/ViewportSizer.vue'

export default {
  name: 'app',
  components: {
    ViewportSizer
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
