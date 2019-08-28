<template>
  <transition name="fade" v-if="isloading">
    <loader></loader>
  </transition>
  <transition v-else>
    <div class="view-article-selction">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row-title">
              <h4>{{article.date}}</h4>
              <h2>{{article.title}}</h2>
            </div>
          </div>
        </div>
        <div class="row article-content-container">
          <div class="col-8">
            <p v-html="article.content"></p>
          </div>
          <div class="col-4">
            <div class="image-section">
              <div class="image-container">
                <div class="content">
                  <img :src="article.image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>


<script>
  import Loader from '../loader'
  import {
    mapActions,
    mapState
  } from 'vuex'

  export default {
    name: 'ViewArticle',
    components: {
      Loader
    },
    data() {
      return {
        isloading: true,

      }
    },
    computed: mapState({
      article: state => state.article.article
    }),

    created() {
      this.$store.dispatch('getArticle', this.$route.params.id).then(() => {
        this.isloading = false;
      })
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../../node_modules/handy.sass.mixins/scss/shared';
  @import '../../assets/sass/_variables';

  .view-article-selction {
    margin-top: 60px;
    margin-bottom: 60px;

    .article-content-container {
      margin-top:20px;
      p {
        text-align: left;
      }

      .image-section {
        width: 100%;
        padding: 30px;

        .image-container {
          width: 100%;
          @include aspect-ratio(4, 3);

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

  }

</style>
