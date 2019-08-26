<template>

  <div class="articles-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row-title">
            <h4>Greate Articles</h4>
            <h2>Our Articles</h2>
            <div class="row-body">
              <p>Here you can add a new article , edit existing articles and delete them</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row articles-container">
        <div class="col-md-6 col-12">
         <article-div></article-div>
        </div>
        <div class="col-md-6 col-12">
         <article-div></article-div>
        </div>
        <div class="col-md-6 col-12">
         <article-div></article-div>
        </div>
        <div class="col-md-6 col-12">
         <article-div></article-div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>

    import ArticleDiv from './article'
  export default {
    name: 'ArticlesHome',
    components:{
        ArticleDiv
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
