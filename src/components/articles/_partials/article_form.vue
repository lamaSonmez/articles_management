<template>
  <form id="articleForm" novalidate  name="form_article" @submit.prevent="validateForm()">
    <div class="row">
      <div class="form-group col-12">
        <label>Title : </label>
        <input type="text" class="form-control" v-model="article.title" :class="{'has-error':isEmptyTitle==true}" required>
      </div>

      <div class="form-group col-12">
        <label>Date : </label>
        <input type="date" class="form-control" v-model="article.date" :class="{'has-error':isEmptyDate==true}" required>
      </div>
      <div class="form-group col-12">
        <label>Content : </label>
        <editor api-key="17a7w22618yydnhvp25lt3ebumk6ayc26srktyfnje2pwmdd" :class="{'has-error':isEmptyContent==true}" required :init="{plugins: 'wordcount'}"
          v-model="article.content"></editor>

      </div>
      <div class="form-group col-8">
        <label class="form-label">Choose Image : </label>
        <input type="file" id="image" class="form-control" :class="{'has-error':isBigSizeImage==true || isEmptyImage}" @change="uploadImage(this)" required>
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
        <button type="submit" class="btn btn-primary" :disabled="isBigSizeImage">
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
        attemptSubmit: false,
        isBigSizeImage:false,
        isEmptyTitle:false,
        isEmptyContent:false,
        isEmptyDate:false,
        isEmptyImage:false



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
            this.isBigSizeImage= true
        }
        else{
            this.error=null;
            this.isBigSizeImage= false;
          var reader = new FileReader();
          var picFile;
        reader.addEventListener("load", (event) => {
          picFile = event.target;
          this.article.image = picFile.result;
        });

        reader.readAsDataURL(file);
        }
       
      },
      validateForm:function(event){
        this.attemptSubmit = true;
         if(this.article.title==null){this.isEmptyTitle =true;} else this.isEmptyTitle = false;
         if(this.article.content==null){this.isEmptyContent =true;} else this.isEmptyContent = false;
         if(this.article.date==null){this.isEmptyDate =true;} else this.isEmptyDate = false;
         if(this.article.image==null){this.isEmptyImage =true;} else this.isEmptyImage = false;
        
        if (this.isBigSizeImage || this.isEmptyTitle || this.isEmptyContent || this.isEmptyDate || this.isEmptyImage) event.preventDefault();
        else{
          this.$store.dispatch('storeArticle',this.article);
        }
      },
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
        &.has-error{
          border-color: #a94442;
          @include prefixer(box-shadow,inset 0 1px 1px rgba(0,0,0,.075),($prefix-list));
        }
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
