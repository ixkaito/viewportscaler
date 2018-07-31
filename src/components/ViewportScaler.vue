<template>
  <div class="viewportscaler">
    <h1>{{ title }}</h1>
    <table>
      <thead>
        <tr>
          <th><input type="text" tabindex="1" v-model="property" placeholder="property"></th>
          <th>Minimum</th>
          <th>Maximum</th>
        </tr>
      </thead>
      <tr>
        <th>Viewport</th>
        <td><input type="number" tabindex="2" v-model="minV"> <span class="code">px</span></td>
        <td><input type="number" tabindex="4" v-model="maxV"> <span class="code">px</span></td>
      </tr>
      <tr>
        <th>Size</th>
        <td><input type="number" tabindex="3" v-model="minS"> <span class="code">px</span></td>
        <td><input type="number" tabindex="5" v-model="maxS"> <span class="code">px</span></td>
      </tr>
    </table>

    <h2>Sass</h2>
<pre class="monokai"><code class="scss"><span class="property">{{ property }}</span>: <span class="value">{{ minS }}</span><span class="unit">px</span>;
<template v-if="x && maxS">
@media screen and (min-width: {{ minV }}px) {<template v-if="y === 0">
  <span class="property">{{ property }}</span>: <span class="value">{{ x }}</span><span class="unit">vw</span>;
</template><template v-else>
  <span class="property">{{ property }}</span>: <span class="function">calc</span>(<span class="value">{{ x }}</span><span class="unit">vw</span> <span class="operator">{{ operator }}</span> <span class="value">{{ absY }}</span><span class="unit">px</span>);
</template>}

@media screen and (min-width: {{ maxV }}px) {
  <span class="property">{{ property }}</span>: <span class="value">{{ maxS }}</span><span class="unit">px</span>;
}</template></code></pre>
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
      let result = (this.maxS - this.minS) / (this.maxV - this.minV) * 100
      return Math.round(result * 1000) / 1000 // Do not use `result.toFixed(2)` becuase it will leave `.00`
    },
    y: function () {
      let result = (this.maxV * this.minS - this.minV * this.maxS) / (this.maxV - this.minV)
      return Math.round(result * 1000) / 1000 // Do not use `result.toFixed(2)` becuase it will leave `.00`
    },
    operator: function () {
      return this.y > 0 ? '+' : '-'
    },
    absY: function () {
      return Math.abs(this.y)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import 'variables';

h1 {
  text-align: center;
}

h2 {
  margin: 40px 0 0;
  text-align: center;
}

p {
  margin-top: 3em;
  padding: 0 1em;
}

input {
  background: $cloud;
  border: 0;
  border: 1px solid $dark-cloud;
  border-radius: 2px;
  font-family: monospace;
  font-size: 16px;
  padding: 0.4em 0.6em;
  width: calc(100% - 2em);
}

input[type="number"] {
  margin-right: 0.5em;
  padding-right: 0.4em;
  width: calc(100% - 4em);
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

.code {
  font-family: monospace;
}

.monokai {
  background: $monokai-background;
  color: $monokai-foreground;

  .scss {

    .property { color: $monokai-cyan; }
    .function { color: $monokai-cyan; }
    .operator { color: $monokai-purple; }
    .value { color: $monokai-purple; }
    .unit { color: $monokai-magenta; }
  }
}

</style>
