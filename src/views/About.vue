<style>


</style>
<template>
  <div>
    <div :style="{width: '100%',height: '800px',background: 'url('+$store.state.backgroundImage.about+')','background-size':'100% 100%'}">
      <div
        :style="{background:'-webkit-gradient(linear,left bottom,left top,from(rgba(66,66,66,.4)),to(rgba(1,87,155,.6)))',width: '100%',height: '800px'}">

        <p class="md-display-3"  style="position: absolute;margin: 0 auto;top: 180px;text-align: center;width: 100%;color: white">
        {{title}}</p>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'About',
    components:{},
    data () {
      return {
        title:'About 待续'
      }
    },
    methods:{
    },
    mounted() {
      this.$store.commit('footer_bar_hidden');
    },
    destroyed(){

      this.$store.commit('footer_bar_show');
    }
  }
</script>
