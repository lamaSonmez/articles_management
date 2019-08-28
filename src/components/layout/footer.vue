<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p>All Rigths Reserved &copy; 2019</p>
                </div>
            </div>
        </div>
    </footer>    
</template>

<script>
    export default {
        name:'AppFooter',
    }

</script>

<style lang="scss" scoped>
@import '../../../node_modules/handy.sass.mixins/scss/shared';
  @import '../../assets/sass/_variables';
.footer{
    background-color:#000;
    width:100%;
    color:#fff;
    text-align:center;
    padding:10px 15px;
    p{
        margin-bottom:0px;
    }
}

</style>