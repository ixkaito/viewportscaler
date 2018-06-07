<template>
  <div class="hello">
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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
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
  margin: auto;
  max-width: 640px;
}

thead {

  th, td {
    border-bottom: 2px solid #e6e9ed;
  }
}

th, td {
  border-bottom: 1px solid #e6e9ed;
  min-width: 150px;
  padding: 0.5em 1em;
}
</style>
