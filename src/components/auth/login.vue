<template>
  <div class="login-page">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="form-section-box">
            <div class="bg">
              <div class="image-container">
                <div class="content">
                  <img src="../../assets/images/login-background.jpg">
                  <div class="overlay"></div>
                </div>
              </div>
              <div class="tabs-section">
                 <router-link to="/login" class="tab">
                  <span>Login</span>
                </router-link>
                <router-link class="tab" to="/register">
                  <span>Register</span>
                </router-link>
              </div>
              <div class="form-section">
                <div class="form-section-inner">
                  <div class="logo-section">
                    <img src="../../assets/images/logo-icon.png">
                    <h1>LigaData</h1>
                  </div>
                  <div class="form-container">
                    <form class="container" @submit.prevent="login(user)">
                      <div class="row">
                        <div class="form-group col-12">
                          <label for="email" class="form-label"><span class="far fa-user icon"></span><span
                              class="text">Email</span></label>
                          <input id="email" type="email" class="form-control" required v-model="user.email">
                        </div>
                        <div class="form-group col-12">
                          <label for="password" class="form-label"><span class="fas fa-key icon"></span><span
                              class="text">Password</span></label>
                          <input id="password" type="password" class="form-control" required v-model="user.password">
                        </div>
                        <div class=" form-group col-12">
                          <button type="submit" class="btn btn-primary">
                            <span>Get Started</span>
                            <span class="far fa-paper-plane icon"></span>
                          </button>
                        </div>
                        <div class="col-12">
                          <loader v-if="inProcess"></loader>
                          <p v-if="responseMessage">{{responseMessage}}</p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
    mapActions,
    mapState
  } from 'vuex'
import Loader from '../loader'
  export default {
    name: 'Login',
    components:{
      Loader
    },
    data(){
      return {
       user:{
          email : "",
        password : ""
       }
      }
    },
    methods:mapActions({
      login:'login'
    }),
    computed:mapState({
       inProcess: state => state.auth.inProcess,
       responseMessage:state=>state.auth.responseMessage,
    }),
    created(){
      this.$store.commit('setResponseMessage',null);
    }
    }
  

</script>

<style lang="scss" scoped>
  @import '../../../node_modules/handy.sass.mixins/scss/shared';
  @import '../../assets/sass/_variables';


  .login-page {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .form-section-box {
      padding: 40px 70px;
      position: relative;

      .bg {
        width: 100%;
        @include prefixer(box-shadow, 0 20px 40px rgba(0, 0, 0, .06), ($prefix-list));
        position: relative;

        .image-container {
          width: 100%;
          @include aspect-ratio(16, 9);

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .overlay {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background-color: rgba(#000, 0.4);

          }
        }

        .form-section {
          background-color: #fff;
          width: 50%;
          position: absolute;
          height: 100%;
          z-index: 1;
          top: 0px;
          right: 0px;

          .form-section-inner {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 25px;

            .logo-section {
              img {
                width: 70px;
              }

              h1 {
                font-weight: 700;
              }
            }

            .form-container {
              margin-top: 30px;
              text-align: left;
              padding: 30px;

           
            }
          }
        }

        .tabs-section {
          width: 50%;
          position: absolute;
          top: 0px;
          left: 0px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          z-index: 2;

          .tab {
            padding: 15px 20px;
            font-weight: 600;
            @include prefixer(border-top-left-radius, 17px, ($prefix-list));
            @include prefixer(border-bottom-left-radius, 17px, ($prefix-list));
            width:100px;
            color: #fff;
            text-align: center;

            &.router-link-exact-active {
              color: $main-color;
              background-color: #fff;
              color: #000;
              position:relative;

              
            }
          }
        }

      }

    }
  }

</style>
