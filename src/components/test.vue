<template>
  <div>
   <h1>{{msg}}</h1>

  </div>
</template>

<script>
  export default {
     data:function () {
       return{
           msg:'Everything will be '+this.message
       }
     },
    props:['message'],
    method:{
         showInfo:function () {
           console.log(this.message)
         }
  }


  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
