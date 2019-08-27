<template>
    <div class="grid-loader">
        <vue-loaders-ball-beat color="#591c5a"></vue-loaders-ball-beat>
    </div>
</template>
<script>
import 'vue-loaders/dist/vue-loaders.css';

export default {
    name:'Loader',
}  
</script>
<style lang="scss">

    .grid-loader{
      text-align:center;
        width:100%;
        padding:20px 0px;
        min-height:100px;
    }
</style>
