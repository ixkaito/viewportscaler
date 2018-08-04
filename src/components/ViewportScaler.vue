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

    <h2>Output Style</h2>
    <div class="output-style">
      <p>
        <strong>Indentation:</strong>
        <select tabindex="6" v-model="indentation">
          <option value="spaces" selected="selected">Spaces</option>
          <option value="tabs">Tabs</option>
        </select>
      </p>
      <p>
        <strong>Tab size:</strong>
        <input class="tab-size" type="number" tabindex="7" v-model="tabSize">
      </p>
    </div>

    <h2>Sass</h2>
<pre class="monokai" :style="{tabSize: tabSize}"><code class="scss"><span class="property">{{ property }}</span>: <span class="value">{{ minS }}</span><span class="unit">px</span>;
<template v-if="x && maxS">
@media screen and (min-width: {{ minV }}px) {<template v-if="y === 0">
<span class="indent" v-html="indent" /><span class="property">{{ property }}</span>: <span class="value">{{ x }}</span><span class="unit">vw</span>;
</template><template v-else>
<span class="indent" v-html="indent" /><span class="property">{{ property }}</span>: <span class="function">calc</span>(<span class="value">{{ x }}</span><span class="unit">vw</span> <span class="operator">{{ operator }}</span> <span class="value">{{ absY }}</span><span class="unit">px</span>);
</template>}

@media screen and (min-width: {{ maxV }}px) {
<span class="indent" v-html="indent" /><span class="property">{{ property }}</span>: <span class="value">{{ maxS }}</span><span class="unit">px</span>;
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
    indentation: {
      type: String,
      default: 'spaces'
    },
    tabSize: {
      type: Number,
      default: 2
    }
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
    },
    indent: function () {
      let space = '<span class="space">&#032;</span>'
      let tab = '<span class="tab">&#009;</span>'
      return this.indentation == 'spaces' ? space.repeat(this.tabSize) : tab
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
  padding: 0 1em;
}

input,
select {
  background: $cloud;
  border: 0;
  border: 1px solid $dark-cloud;
  border-radius: 2px;
  box-sizing: border-box;
  font-family: monospace;
  font-size: 16px;
  line-height: 20px;
  height: 32px;
  padding: 6px 0.6em;
}

input {
  width: 100%;

  &[type="number"] {
    margin-right: 0.5em;
    padding-right: 0.4em;
    width: calc(100% - 2em);
  }

  &.tab-size {
    width: 3em;
    margin-left: 0.5em;
  }
}

select {
  margin: 0 0.5em;
  text-transform: capitalize;

  option {
    text-transform: capitalize;
  }
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
  tab-size: 4;
  text-align: left;
}

.viewportscaler {
  margin: auto;
  max-width: 640px;
}

.code {
  font-family: monospace;
}

.output-style {
  border-bottom: 1px solid $dark-cloud;
  border-top: 1px solid $dark-cloud;
  display: flex;
  margin-top: 2em;
  padding: 0.5em 0;

  p {
    margin: 0;
    width: 50%;
  }
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

.indent {
  display: inline-block;
  border-left: 1px dotted #46484a;
  box-sizing: border-box;

  /deep/ .space {
    background: url(../assets/images/space.svg) no-repeat center center;
  }

  /deep/ .tab {
    background: url(../assets/images/tab.svg) repeat-x left center;
  }
}
</style>
