<template>
  <div class="viewportsizer">
    <h1>{{ msg }}</h1>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Minimum</th>
          <th>Maximum</th>
        </tr>
      </thead>
      <tr>
        <th>Viewport</th>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>Size</th>
        <td></td>
        <td></td>
      </tr>
    </table>
    <h2>Output</h2>
<pre><code>@media screen and (min-width: $min-vp) {
  @if $y == 0 {
    #{$property}: $x;
  } @else {
    #{$property}: calc(#{$x} + #{$y});
  }
}

@media screen and (min-width: $max-vp) {
  #{$property}: $max-length;
}</code></pre>
  </div>
</template>

<script>
export default {
  name: 'ViewportSizer',
  props: {
    msg: String
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
