<template>
  <div class="addedit-article-selction">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="row-title">
            <h2 v-if="article">{{article.title}}</h2>
            <div class="row-body">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/">Articles</router-link>
                  </li>
                  <li v-if="article" class="breadcrumb-item active">{{article.title}}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
         <div class="add-btn-container col-4">
            <router-link to="/articles/add" class="btn btn-primary">
              <span class="fas fa-plus icon"></span>
              <span class="text">Add New Article</span>
            </router-link>
          </div>
      </div>
      <div class="row article-form-container">
       
        <div class="col-12">
        <transition name="fade" v-if="isloading">
            <loader></loader>
          </transition>
          <transition v-else>
            <article-form :article="article"></article-form>

          </transition>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import ArticleForm from './_partials/article_form'
  import Loader from '../loader'
  import {
    mapActions,
    mapState
  } from 'vuex'

  export default {
    name: 'EditArticle',
    components: {
      ArticleForm,
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
            this.$store.dispatch('getArticle',this.$route.params.id).then(() => {
        this.isloading = false;
      })
        }
  }

</script>

<style lang="scss" scoped>
 


  .addedit-article-selction {
    margin-top: 60px;
    margin-bottom: 60px;

    .article-form-container {

     
    }
  }

</style>
