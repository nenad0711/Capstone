<template>
<div id= "app">
  <router-link to = '/'>Home</router-link>
  <router-link to = '/register'>Register</router-link>

</div>
<router-view/>

</template>

<script>
export default {
  name:'app'
  }
</script>

<style>
#app {
  padding: 30px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
