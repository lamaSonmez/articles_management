<template>

  <table class="table table-hover table-bordered" id="sampleTable">
    <thead>
      <tr>
        <th>Main Image</th>
        <th>Title</th>
        <th>Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

      <tr :id="item.id" v-for="item in articles">
        <td>
          <img :src="item.image" style="width:60px;">
        </td>
        <td>{{item.title}}</td>
        <td>{{item.date}}</td>
        <td>
          <router-link style="margin:0px 5px;" class="far fa-edit btn btn-outline-info btn-sm"
            :to="{ name: 'EditArticle', params: { id: item.id } }"></router-link>
          <router-link style="margin:0px 5px;" class="fas fa-eye-slash btn btn-outline-success btn-sm" title="view details"
            :to="{name:'ViewArticle',params:{id:item.id}}"></router-link>
          <a style="margin:0px 5px; color: #dc3545;" class="far fa-trash-alt btn btn-outline-danger btn-sm delete"
            @click.prevent="DeleteArticle(item)"></a>
        </td>
      </tr>
      <tr v-if="inProcess">
        <td colspan="4" class="text-center">
          <loader></loader>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script>
  import {
    mapActions,
    mapState
  } from 'vuex'
  import Loader from '../../loader'

  export default {
    name: 'ArticlesTable',
    props: ['articles'],
    data() {
      return {
        selectedArticle: null,
      }
    },
    components: {
      Loader
    },
    methods: {
      DeleteArticle(article) {
        if (confirm('Do you want to delete   ' + article.title + '??')) {
          this.$store.dispatch('removeArticle', article.id);
        }
      }
    },
    computed: mapState({
      inProcess: state => state.article.inProcess,
    }),


  }

</script>
