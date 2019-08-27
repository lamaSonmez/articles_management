<template>

  <div class="articles-section">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="row-title">
            <h4>Greate Articles</h4>
            <h2>Our Articles</h2>
            <div class="row-body">
              <p>Here you can add a new article , edit existing articles and delete them</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="add-btn-container">
            <router-link to="/articles/add" class="btn btn-primary">
              <span class="fas fa-plus icon"></span>
              <span class="text">Add New Article</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row articles-container">
        <div class="col-12">
          <transition name="fade" v-if="isloading">
            <loader></loader>
          </transition>
          <transition v-else>
            <articles-table :articles="articles"></articles-table>

          </transition>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import ArticlesTable from './articles_table'
  import Loader from '../loader'

  import {
    mapActions,
    mapState
  } from 'vuex'

  export default {
    name: 'ArticlesHome',
    components: {
      ArticlesTable,
      Loader
    },
    data() {
      return {
        isloading: true,
      }
    },
    computed: mapState({
      articles: state => state.article.articles,
    }),

    created() {
      this.$store.dispatch('fetchArticles').then(() => {
        this.isloading = false;
      })
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../../node_modules/handy.sass.mixins/scss/shared';
  @import '../../assets/sass/_variables';

  .articles-section {
    margin-top: 60px;
    margin-bottom: 60px;

    .articles-container {
      margin-top: 30px;

    }
  }

</style>
