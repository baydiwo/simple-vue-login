<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Parse from 'parse';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    Parse.serverURL = 'https://parseapi.back4app.com';
    Parse.initialize('r47xENJwNaVZqTwzZSC1aFaHZPSutZyqU9hu6y6i', 'NtmRJht1Sj8klN6cC1In8pDJiIQATtjSCbIggvZo');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
