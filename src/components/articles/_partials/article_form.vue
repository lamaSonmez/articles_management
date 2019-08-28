<template>
  <form id="articleForm" novalidate  name="form_article" @submit.prevent="storeArticle(article)">
    <div class="row">
      <div class="form-group col-12">
        <label>Title : </label>
        <input type="text" class="form-control" v-model="article.title" required>
      </div>

      <div class="form-group col-12">
        <label>Date : </label>
        <input type="date" class="form-control" v-model="article.date" required>
      </div>
      <div class="form-group col-12">
        <label>Content : </label>
        <editor api-key="17a7w22618yydnhvp25lt3ebumk6ayc26srktyfnje2pwmdd" required :init="{plugins: 'wordcount'}"
          v-model="article.content"></editor>

      </div>
      <div class="form-group col-8">
        <label class="form-label">Choose Image : </label>
        <input type="file" id="image" class="form-control" @change="uploadImage(this)" required>
      </div>
      <div class="col-4 img-preview">
        <div class="image-container">
          <div class="content">
            <img :src="article.image">
          </div>
        </div>
      </div>
       <div class="col-12">
        <p v-if="error">{{error}}</p>
      </div>
      <div class="form-group col-12">
        <button type="submit" class="btn btn-primary">
          <span>Save</span>
          <span class="fas fa-save icon"></span>
        </button>
      </div>
      <div class="clearfix"></div>
     
      <div class="col-12">
        <loader v-if="inProcess"></loader>
        <div class="response-message" v-if="responseMessage">
        <p>{{responseMessage}}</p>
        <router-link to="/">Go To Articles </router-link>
        </div>
      </div>
    </div>
  </form>

</template>

<script>
  import Editor from '@tinymce/tinymce-vue';
  import Loader from '../../loader'

  import {
    mapActions,
    mapState
  } from 'vuex'

  export default {
    name: 'AddEditArticle',
    components: {
      'editor': Editor,
      Loader
    },
    data() {
      return {
        isloading: false,
        error:null,
      }
    },
    props: {
      article: {
        type: Object,
        default: () => ({
            id:null,
            title: null,
            date: null,
            content:null,
            image:null
        })
      }
    },
    methods: {
      uploadImage(e) {
        var choosenImageElement = document.getElementById('image');
        var file = choosenImageElement.files[0];
        if(file.size>4096){
            this.error = "The Image Size Must Be Less Than 4M Please choose another file";
            
        }
        else{
            this.error=null;
        var reader = new FileReader();
        var picFile;
        reader.addEventListener("load", (event) => {
          picFile = event.target;
          this.article.image = picFile.result;
        });

        reader.readAsDataURL(file);
        }
       
      },
      ...mapActions({
        storeArticle: 'storeArticle'
      })
    },
    computed: mapState({
      inProcess: state => state.article.inProcess,
      responseMessage: state => state.article.responseMessage
    }),
    
    
  }

</script>

<style lang="scss" scoped>
  @import '../../../../node_modules/handy.sass.mixins/scss/shared';
  @import '../../../assets/sass/_variables';

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
      border:1px solid #aaa;

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

</style>
