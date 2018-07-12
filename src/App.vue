<template>
  <div id="app">
    <img class="logo" src="./assets/images/logo.svg">
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

<style lang="scss">
@import 'components/variables';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark-gray; // #2c3e50;
  margin-top: 60px;
}

.logo {
  display: block;
  margin: auto;
}
</style>
