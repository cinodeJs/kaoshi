<template>
  <div id="app">
    <News></News>
  </div>
</template>

<script>
import News from './components/News.vue'

export default {
  name: 'app',
  components: {
    News
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
