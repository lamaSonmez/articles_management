<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="isAuthenticated">
    <div class="container">
      <img src="../../assets/images/logo.png" width="130" height="30" alt="">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <!-- Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              Hi {{current_user.first_name}}
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" @click="logout()"><span>Log Out</span><span
                  class="fas fa-sign-out-alt icon"></span></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import {
    mapActions,
    mapState
  } from 'vuex'
  export default {
    name: 'PageNavbar',
    methods: mapActions({
      logout: 'logout'
    }),
     computed: mapState({
      isAuthenticated: state => state.auth.isAuthenticated,
      current_user: state => state.auth.current_user,
    }),

  }

</script>

<style lang="scss" scoped>
  @import '../../../node_modules/handy.sass.mixins/scss/shared';
  @import '../../assets/sass/_variables';

  .bg-light {
    background-color: #fff !important;
    @include prefixer(box-shadow, 0 20px 40px rgba(0, 0, 0, .06), ($prefix-list));

    li {

      a {
        text-align: center;
        cursor:pointer;
        span {
          &.icon {
            margin-left: 5px;
          }
        }
      }
    }

  }

</style>
