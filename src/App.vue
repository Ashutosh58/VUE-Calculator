<template>  
  <div class="div">
  <h1 id="head">Calculator</h1>
  <router-view id="comp"/>
  <h1 id="footer">Routes & Router!</h1>
  </div>
</template>

<script>
export default {
  data() {
    
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #161616;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.div{
  background-color: aquamarine;
}
#head{
  color: aqua;
  background-color: #161616;
  margin-bottom: 180px;
}
#footer{
  margin-top: 240px;
  color: rgb(94, 223, 228);
  background-color: #161616;
}
</style>
