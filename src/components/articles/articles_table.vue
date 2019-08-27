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

      <tr id="0">
        <td>
          <img src="../../assets/images/article.jpg" style="width:60px;">
        </td>
        <td>Title OF The Article</td>
        <td>28 August 2019</td>
        <td>
          <a style="margin:0px 5px;" class="far fa-edit btn btn-outline-info btn-sm" href="/"></a>
          <a style="margin:0px 5px;" class="fas fa-eye-slash btn btn-outline-success btn-sm" title="view details" href="/"></a>
          <a style="margin:0px 5px; color: #dc3545;" class="far fa-trash-alt btn btn-outline-danger btn-sm delete" data-action-name="/"
            data-Controller-name="Articles" id="0"></a>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script>
  export default {
    name: 'ArticlesTable'
  }

</script>
