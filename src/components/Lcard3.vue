<style>

  .back-border{
    /*margin: 50px;*/
    width:335px;
    /*min-height: 440px;*/
    box-shadow: 0 1px 5px 1px #bdbdbd;
    border-radius: 5px;
  }

</style>

<template>

  <div class="back-border">
    <div :style="headerStyle" >

    </div>

    <p class="md-title font-weight-black"
       style="width: 80%;text-align: left;color:#263238;padding-top: 30px;margin: 0 auto">
      {{post.title}}
    </p>
    <hr style="width: 80%;border-top:#eeeeee solid 1px;margin: 20px auto;"/>

    <p v-html="post.subtitle"
       style="width: 80%;word-wrap:break-word;word-break: break-all;text-align: left;margin: 20px auto">
    </p>

    <p class="subheading font-weight-regular"
       style="width: 80%;text-align: left;color:#455A64;margin: 5px auto">
      <i class="fa fa-calendar" style="padding-top: -2px;color: #f96332"></i>
      &nbsp
      {{_moment(post.date).format('YYYY/MM/DD')}}
    </p>


    <hr style="border-top:#eeeeee solid 1px;margin-top: 20px;margin-bottom: 10px"/>
    <div class="title font-weight-black" style="color: #303f9f;text-align: right;width: 80%;margin: 20px auto">
      <router-link
        :to="'/Post/'+post._id"
        style="color: #303f9f">READ MORE >></router-link>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'LCard3',
    components: {},
    props:["post",'order'],
    data () {
      return {
        headerStyle:{
          // background: ['linear-gradient(40deg,#45cafc,#303f9f)!important','linear-gradient(40deg,#ffd86f,#fc6262)!important','linear-gradient(40deg,#ff6ec4,#7873f5)!important','linear-gradient(40deg,#2096ff,#05ffa3)!important'][parseInt(this.order)],
          background:"url('https://demos.creative-tim.com/now-ui-kit-pro-angular/assets/img/project8.jpg')",
          'background-size':'100% 100%',
          width: '335px',
          height: '129px',
          'border-radius': '5px',
          'box-shadow': '0 4px 10px 2px #bdbdbd'
        }
      }
    },
    mounted(){
    }
  }
</script>
