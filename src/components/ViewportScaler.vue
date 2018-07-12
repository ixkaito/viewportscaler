<template>
  <div class="viewportscaler">
    <h1>{{ title }}</h1>
    <table>
      <thead>
        <tr>
          <th><input type="text" tabindex="1" v-model="property" placeholder="font-size"></th>
          <th>Minimum</th>
          <th>Maximum</th>
        </tr>
      </thead>
      <tr>
        <th>Viewport</th>
        <td><input type="number" tabindex="2" v-model="minV"> px</td>
        <td><input type="number" tabindex="4" v-model="maxV"> px</td>
      </tr>
      <tr>
        <th>Size</th>
        <td><input type="number" tabindex="3" v-model="minS"> px</td>
        <td><input type="number" tabindex="5" v-model="maxS"> px</td>
      </tr>
    </table>
    <h2>Sass</h2>
<pre><code>{{ property }}: {{ minS }}px;

@media screen and (min-width: {{ minV }}px) {<template v-if="y === 0">
  {{ property }}: {{ x }}vw;
</template><template v-else>
  {{ property }}: calc({{ x }}vw + {{ y }}px);
</template>}

@media screen and (min-width: {{ maxV }}px) {
  {{ property }}: {{ maxS }}px;
}</code></pre>
  </div>
</template>

<script>
export default {
  name: 'ViewportScaler',
  props: {
    title: String,
    property: String,
    minV: Number,
    maxV: Number,
    minS: Number,
    maxS: Number,
  },
  computed: {
    x: function () {
      return (this.maxS - this.minS) / (this.maxV - this.minV) * 100
    },
    y: function () {
      return (this.maxV * this.minS - this.minV * this.maxS) / (this.maxV - this.minV)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import 'variables';

h2 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;

}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

table {
  border-collapse: collapse;
  width: 100%;
}

thead {

  th, td {
    border-bottom: 2px solid $dark-cloud;
  }
}

th, td {
  border-bottom: 1px solid $dark-cloud;
  min-width: 150px;
  padding: 0.5em 1em;
  text-align: left;
}

pre {
  background: $cloud;
  border-radius: 4px;
  padding: 1em;
  text-align: left;
}

.viewportscaler {
  margin: auto;
  max-width: 640px;
}
</style>
