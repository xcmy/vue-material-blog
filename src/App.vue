<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /*color: #2c3e50;*/
  }
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
  }
  .md-menu {
    float: right;
  }
  .header-btn{
    color:#37474F;
    padding:10px;
  }
  .home-top-btn{
    height: 45px;
    width: 80px;
    padding-left: 10px;
    padding-right: 10px;
    /*margin-right: 20px;*/
    font-weight: initial;
  }
  .top-title{
    padding-left: 10px;
    padding-right: 10px;
    float: left
  }

</style>

<template>

  <div id="app"  style="background-color: white">

    <!--header-->

    <md-toolbar
      flat
      class="md-transparent md-elevation-4"
      :style="toolbar_style"
      md-elevation="1">

      <!--<h3  class="md-title" style="flex: 1;text-align: left;padding-left: 4%"> Xcmy</h3>-->

      <div style="flex: 1;padding-left: 4%;">
        <md-button
          to="/"
          class="top-title"
          :style="{color:toolbar_color}">
          mine blog
        </md-button>
      </div>

      <md-button
        to="/search"
        class="home-top-btn"
        :style="{color:toolbar_color}"
      >
        <!--<i class="fa fa-search fa-lg"></i>-->
        <!--&nbsp-->
        <!--搜索-->
        Search
      </md-button>

      <md-button
        to="/list"
        class="home-top-btn"
        :style="{color:toolbar_color}"
      >
        <!--<i class="fa fa-list fa-lg"></i>-->
        <!--&nbsp-->
        <!--文章-->
        POSTS
      </md-button>
      <md-button
        class="home-top-btn"
        to="/About"
        :style="{color:toolbar_color}"
      >
        <!--<i class="fa fa-user-secret fa-lg"></i>-->
        <!--&nbsp-->
        <!--关于-->
        ABOUT
      </md-button>
      <md-button
        class="home-top-btn"
        :href="githubUrl"
        :style="{width:'40px','margin-right': '4%',color:toolbar_color}"

      >
        <i class="fa fa-github fa-lg" ></i>
        <!--&nbsp-->
        <!--GITHUB-->
      </md-button>

    </md-toolbar>

    <!--home page-->
    <router-view />

    <!--footer-->


    <div  v-show="$store.state.footer_bar" style="width: 100%;background-color:  #37474F;height: 160px;">

      <div style="height: 50px;width: 100%;padding-top: 55px">
        <md-button
          to="/"
          style="margin-right: 20px;color:white;padding-left: 10px;padding-right: 10px;float: left">
          Home
        </md-button>
        <md-button
          :href="githubUrl"
          style="margin-right: 20px;color:white;padding-left: 10px;padding-right: 10px;float: left">
          GITHUB
        </md-button>
        <md-button
          to="/About"
          style="margin-right: 20px;color:white;padding-left: 10px;padding-right: 10px;float: left">
          ABOUT
        </md-button>
        <p  style="color: white;float: right;padding-right: 3%">Copyright © 2018 Created BY Xcmy </p>

      </div>

    </div>



  </div>
</template>

<script>
  export default {
    name: 'App',
    components:{
    },
    data(){
      return {
        bk:1,
        screen_top:window.pageYOffset,
        toolbar_color:'white',
        toolbar_style:{
          position: 'fixed',
          'box-shadow':'none',
          'background-color':'none',
          top:0,'z-index': 99,
          height:'100px'
        },
        githubUrl:'https://github.com/xcmy',
        language:this.$store.state.language
      }
    },
    methods:{

    },
    watch: {
      screen_top: function (new_distance) {
        // console.log(new_distance)
        if (new_distance>180) {
          this.toolbar_color = '#546E7A';
          this.toolbar_style['background-color'] = 'white';
          this.toolbar_style.height = '64px';
          this.toolbar_style['box-shadow'] = '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)'
        }else{
          this.toolbar_color = 'white';
          this.toolbar_style['background-color'] = undefined;
          this.toolbar_style.height = '100px';
          this.toolbar_style['box-shadow'] = 'none'
        }

      },
    },
    mounted(){
      window.addEventListener('scroll',()=> this.screen_top = window.pageYOffset);
    }
  }
</script>
