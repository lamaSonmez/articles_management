<template>
  <div class="addedit-article-selction">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row-title">
            <h2>Article Title</h2>
            <div class="row-body">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/articles">Articles</router-link>
                  </li>
                  <li class="breadcrumb-item active">Article Title</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="row article-form-container">
        <div class="col-12">
          <form id="articleForm">
            <div class="row">
              <div class="form-group col-12">
                <label>Title : </label>
                <input type="text" class="form-control">
              </div>

              <div class="form-group col-12">
                <label>Date : </label>
                <input type="date" class="form-control date">
              </div>
              <div class="form-group col-12">
                <label>Content : </label>
                <editor api-key="17a7w22618yydnhvp25lt3ebumk6ayc26srktyfnje2pwmdd" :init="{plugins: 'wordcount'}"></editor>

              </div>
              <div class="form-group col-8">
                <label class="form-label">Choose Image : </label>
                <input type="file" class="form-control">
              </div>
              <div class="col-4 img-preview">
                <div class="image-container">
                  <div class="content">
                    <img src="../../assets/images/article2.jpg">
                  </div>
                </div>
              </div>
              <div class=" form-group col-12">
                <button type="submit" class="btn btn-primary">
                  <span>Save</span>
                  <span class="fas fa-save icon"></span>
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
 import Editor from '@tinymce/tinymce-vue';
  import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'
  export default {
    name: 'AddEditArticle',
    components:{
         'editor': Editor
    },
    mounted() {
      $('.date').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        todayHighlight: true
      });
      

    }
  }

</script>

<style lang="scss" scoped>
  @import '../../../node_modules/handy.sass.mixins/scss/shared';
  @import '../../assets/sass/_variables';
  @import '../../../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min';


  .addedit-article-selction {
    margin-top: 60px;
    margin-bottom: 60px;

    .article-form-container {

      #articleForm {
        .form-group {
          label {
            text-align: left;
            display: block;
            font-size: 18px;

          }

          .form-control {
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
            height: 40px;
          }

          textarea {
            &.form-control {
              min-height: 40px;
              height: auto;
            }
          }
        }

        .img-preview {
          padding: 0px 80px 80px 80px;
          width: 100%;

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
  }

</style>
