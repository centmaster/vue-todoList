<template>
  <div class="hello">
    <h1 v-text="msg"></h1>
    <input v-model="newItem" @keyup.enter="additem"/>
    <ul v-for="item in items">
      <li v-bind:class="{done:item.isDone}" v-on:click="setDone(item)" >{{item.item}}
      <button v-on:click="deleteItem(item)">delete</button></li>
    </ul>
    <Component-a message="OK"></Component-a>
  </div>
</template>

<script>
import ComponentA from  './test'
  import Store from '../store'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'this is a todoList',
      items:Store.fetch(),
      newItem:''
    }
  },

  components:{ComponentA},

  watch:{
    items:{
        handler:function (items) {
          Store.save(items);
        },
      deep:true
    }
  },

  methods :{
        additem:function () {
            this.items.push({
              item:this.newItem,
              isDone:false
            })
          this.newItem='';
        },
        setDone:function (item) {
           item.isDone= !item.isDone;
        },
        deleteItem:function (item) {
          this.items.shift(item);
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
