<template>
  <div class="viewportscaler">
    <h1>{{ title }}</h1>

    <div class="output-style">
      <p>
        <strong>Selector: </strong>
        <input type="text" tabindex="1" v-model="selector">
      </p>
      <p>
        <strong>Property: </strong>
        <input type="text" tabindex="2" v-model="property" placeholder="property">
      </p>
    </div>

    <h2>Min/Max</h2>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Viewport</th>
          <th>Size</th>
        </tr>
      </thead>
      <tr>
        <th>Minimum</th>
        <td><input type="number" tabindex="3" v-model="minV"><span class="code"> px</span></td>
        <td><input type="number" tabindex="4" v-model="minS"><span class="code"> px</span></td>
      </tr>
      <tr>
        <th>Maximum</th>
        <td><input type="number" tabindex="5" v-model="maxV"><span class="code"> px</span></td>
        <td><input type="number" tabindex="6" v-model="maxS"><span class="code"> px</span></td>
      </tr>
    </table>

    <h2>Output Style</h2>
    <div class="output-style">
      <p>
        <strong>Indentation: </strong>
        <select tabindex="6" v-model="indentation">
          <option value="spaces" selected="selected">Spaces</option>
          <option value="tabs">Tabs</option>
        </select>
      </p>
      <p>
        <strong>Tab size: </strong>
        <input class="tab-size" type="number" tabindex="7" v-model="tabSize">
      </p>
    </div>

    <h2>CSS</h2>

    <template v-if="selector">
<pre class="monokai" :style="{tabSize: tabSize}"><code class="scss"><span class="selector-tag" v-bind:class="selectorClass">{{ selector }}</span> {
<span class="indent" v-html="indent" /><span class="property">{{ property }}</span>: <span class="value">{{ minS }}</span><span class="unit">px</span>;
}
<template v-if="x && maxS">
@media screen and (min-width: {{ minV }}px) {
<span class="indent" v-html="indent" /><span class="selector-tag" v-bind:class="selectorClass">{{ selector }}</span> {<template v-if="y === 0">
<span class="indent" v-html="indent" /><span class="indent" v-html="indent" /><span class="property">{{ property }}</span>: <span class="value">{{ x }}</span><span class="unit">vw</span>;</template><template v-else>
<span class="indent" v-html="indent" /><span class="indent" v-html="indent" /><span class="property">{{ property }}</span>: <span class="function">calc</span>(<span class="value">{{ x }}</span><span class="unit">vw</span> <span class="operator">{{ operator }}</span> <span class="value">{{ absY }}</span><span class="unit">px</span>);</template>
<span class="indent" v-html="indent" />}
}

@media screen and (min-width: {{ maxV }}px) {
<span class="indent" v-html="indent" /><span class="selector-tag" v-bind:class="selectorClass">{{ selector }}</span> {
<span class="indent" v-html="indent" /><span class="indent" v-html="indent" /><span class="property">{{ property }}</span>: <span class="value">{{ maxS }}</span><span class="unit">px</span>;
<span class="indent" v-html="indent" />}
}</template></code></pre>
    </template>

    <template v-else>
      <p>Please input the selector.</p>
    </template>

    <h2>Sass</h2>

    <template v-if="selector">
<pre class="monokai" :style="{tabSize: tabSize}"><code class="scss"><span class="selector-tag" v-bind:class="selectorClass">{{ selector }}</span> {
<span class="indent" v-html="indent" /><span class="property">{{ property }}</span>: <span class="value">{{ minS }}</span><span class="unit">px</span>;
<template v-if="x && maxS">
<span class="indent" v-html="indent" />@media screen and (min-width: {{ minV }}px) {<template v-if="y === 0">
<span class="indent" v-html="indent" /><span class="indent" v-html="indent" /><span class="property">{{ property }}</span>: <span class="value">{{ x }}</span><span class="unit">vw</span>;
</template><template v-else>
<span class="indent" v-html="indent" /><span class="indent" v-html="indent" /><span class="property">{{ property }}</span>: <span class="function">calc</span>(<span class="value">{{ x }}</span><span class="unit">vw</span> <span class="operator">{{ operator }}</span> <span class="value">{{ absY }}</span><span class="unit">px</span>);
</template><span class="indent" v-html="indent" />}

<span class="indent" v-html="indent" />@media screen and (min-width: {{ maxV }}px) {
<span class="indent" v-html="indent" /><span class="indent" v-html="indent" /><span class="property">{{ property }}</span>: <span class="value">{{ maxS }}</span><span class="unit">px</span>;
<span class="indent" v-html="indent" />}
</template>}</code></pre>
    </template>

    <template v-else>
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
    </template>

  </div>
</template>

<script>
export default {
  name: 'ViewportScaler',
  props: {
    title: String,
    selector: String,
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
    selectorClass: function () {
      return {
        'selector-class': this.selector.match(/^(\..*)$/),
        'selector-id': this.selector.match(/^(#.*)$/),
        'selector-attr': this.selector.match(/^(\[.*)$/),
        'selector-pseudo': this.selector.match(/^(:.*)$/)
      }
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
  line-height: 32px;
  height: 32px;
  padding: 0 0.6em;
}

input {

  &[type="number"] {
    padding-right: 0.4em;
    width: calc(100% - 2em);
  }

  &.tab-size {
    width: 3em;
  }
}

select {
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

th {
  min-width: 100px;
}

pre {
  background: $cloud;
  border-radius: 4px;
  padding: 1em;
  tab-size: 4;
  text-align: left;
}

code, input, select {
  font-family: "Menlo", monospace;
  font-size: 14px;
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

    /deep/ .selector-tag { color: $monokai-magenta; }
    /deep/ .selector-class,
    /deep/ .selector-id { color: $monokai-green; }
    /deep/ .selector-attr { color: $monokai-yellow; }
    /deep/ .selector-pseudo { color: $monokai-foreground; }
    /deep/ .property { color: $monokai-cyan; }
    /deep/ .function { color: $monokai-cyan; }
    /deep/ .operator { color: $monokai-purple; }
    /deep/ .value { color: $monokai-purple; }
    /deep/ .unit { color: $monokai-magenta; }
  }

  .indent {
    display: inline-block;
    border-left: 1px dotted $monokai-invisibles;
    box-sizing: border-box;

    /deep/ .space {
      background: url(../assets/images/space.svg) no-repeat center center;
    }

    /deep/ .tab {
      background: url(../assets/images/tab.svg) repeat-x left center;
    }
  }

  ::selection {
    background: $monokai-invisibles;
  }
}

</style>
