<template>
 <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <div class="image-container">
                  <div class="content">
                    <img src="../../assets/images/article.jpg" class="card-img" alt="...">
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
</template>

<script>

    export default {
        name:'Article'
    }
</script>

<style lang='scss' scoped>
 @import '../../../node_modules/handy.sass.mixins/scss/shared';
  @import '../../assets/sass/_variables';
  .card {
        @include prefixer(box-shadow, 0 20px 40px rgba(0, 0, 0, .06), ($prefix-list));
        border:1px solid #fff;
        .card-body{
            text-align:left;
        }
        .image-container {
          width: 100%;
          height: 100%;
          @include aspect-ratio(4, 3);

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

</style>