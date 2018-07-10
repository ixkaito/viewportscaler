<template>
  <div class="viewportsizer">
    <h1>{{ title }}</h1>
    <table>
      <thead>
        <tr>
          <th><input type="text" v-model="property"></th>
          <th>Minimum</th>
          <th>Maximum</th>
        </tr>
      </thead>
      <tr>
        <th>Viewport</th>
        <td><input type="number" v-model="minV"> px</td>
        <td><input type="number" v-model="maxV"> px</td>
      </tr>
      <tr>
        <th>Size</th>
        <td><input type="number" v-model="minS"> px</td>
        <td><input type="number" v-model="maxS"> px</td>
      </tr>
    </table>
    <h2>Output</h2>
<pre><code>{{ property }}: {{ minS }}px;

@media screen and (min-width: {{ minV }}px) {
  @if $y == 0 {
    {{ property }}: #{$x};
  } @else {
    {{ property }}: calc(#{$x} + #{$y});
  }
}

@media screen and (min-width: {{ maxV }}px) {
  {{ property }}: {{ maxS }}px;
}</code></pre>
  </div>
</template>

<script>
export default {
  name: 'ViewportSizer',
  props: {
    title: String,
    property: String,
    minV: Number,
    maxV: Number,
    minS: Number,
    maxS: Number,
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
  border-radius: 3px;
  padding: 1em;
  text-align: left;
}

.viewportsizer {
  margin: auto;
  max-width: 640px;
}
</style>
