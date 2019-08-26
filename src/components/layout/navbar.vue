<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
   <img src="../../assets/images/logo.png" width="130" height="30" alt="">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"> <span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  </div>
</nav>
</template>

<script>
    export default {
        name:'PageNavbar',

    }

</script>

<style lang="scss" scoped>
  @import '../../../node_modules/handy.sass.mixins/scss/shared';
  @import '../../assets/sass/_variables';
    .bg-light{
        background-color:#fff !important;
        @include prefixer(box-shadow, 0 20px 40px rgba(0, 0, 0, .06), ($prefix-list));

    }
</style>