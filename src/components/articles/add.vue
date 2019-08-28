<template>
  <div class="addedit-article-selction">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="row-title">
            <h2>Add New Article</h2>
            <div class="row-body">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/">Articles</router-link>
                  </li>
                  <li class="breadcrumb-item active">New Article</li>
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
            <article-form></article-form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import ArticleForm from './_partials/article_form'
  import {
    mapActions,
    mapState
  } from 'vuex'

  export default {
    name: 'AddArticle',
    components: {
      ArticleForm,
      
    },
    data() {
      return {
        isloading: true,
        article:null,
      }
    },
    mounted(){

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
