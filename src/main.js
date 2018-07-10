import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  computed: {
    foo: function () {
      return this.minS + this.maxS
    }
  }
}).$mount('#app')
