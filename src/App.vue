<template>
  <div id="app">
    <img class="logo" src="./assets/images/logo.svg">
    <ViewportScaler title="ViewportScaler" property="font-size"/>
    <footer class="footer">
      <p class="copyright">© 2018 <a href="https://github.com/ixkaito">Kite</a></p>
    </footer>
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

a {
  color: $blue;

  &:hover {
    text-decoration: none;
  }
}

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

.footer {
  border-top: 1px solid $dark-cloud;
  margin-top: 4em;

  .copyright {
    text-align: center;
  }
}
</style>
