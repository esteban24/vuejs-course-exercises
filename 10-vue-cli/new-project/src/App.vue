<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TitleComponent/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TitleComponent from './components/TitleComponent.vue'

export default {
  name: 'App',
  components: {
    TitleComponent
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
