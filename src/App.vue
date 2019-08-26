<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import '../src/assets/sass/app';
@import '../src/assets/sass/_variables';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
  background-color:$body-color;

}
</style>
