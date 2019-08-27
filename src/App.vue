<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>

import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AppNav from '@/components/layout/navbar.vue'
import AppFooter from '@/components/layout/footer.vue'

export default {
  name: 'App',
  components:{
    AppNav,
    AppFooter
  }
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
