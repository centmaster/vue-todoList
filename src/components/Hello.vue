<template>
  <div class="hello">
    <h1 v-text="msg"></h1>
    <input /><button v-on:click="additem">add</button>
    <ul v-for="item in items">
      <li v-bind:class="{done:item.isDone}"  >{{item.item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'this is a todoList',
      items:[
        {
            item:'wash cloth',
            isDone:false
        },
        {
          item:'play football',
          isDone:true
        }
      ]

    }
  },
  methods(){
        additem:function () {
          alert('hha');
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .done{
  text-decoration: underline;
  }
h1, h2 {
  font-weight: normal;
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
</style>
