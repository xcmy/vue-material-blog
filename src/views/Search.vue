<style scoped>
  .search-input{
    height: 40px;
    width: 80%;
    float: left;
    padding-left: 10px;
    outline:medium;
    border: none;
    font-size: 16px;
    margin-top: 5px
  }
  .search-btn {
    border-radius: 0;
    width: 20%;
    float: right;
    height: 50px;
    margin: 0;
    background: #f96332;
    /*background: linear-gradient(40deg,#ff88ce,#8f8bf7);*/
  }
  p{
    /*margin-bottom: 0;*/
    margin-top: 0;
  }
  a{
    color:#263238 !important;
  }
  a:hover{
    color:#f96332 !important;
  }

</style>
<template>
  <div >


    <img :src="$store.state.backgroundImage.search"
         alt=""
         :style="bg_style"
    >

    <div style="position: absolute;z-index: 11;left:15% ;top: 100px;width: 70%;">

      <div
        class="md-elevation-5"
        style="width: 80%;height: 50px;margin: 20px auto 20px;background-color: white;">
        <input
          v-model="keyword"
          class="search-input"
          type="text"
        />
        <md-button
          @click="handleSearch"
          class="search-btn"
          style=" color: white;"
        >
          搜索
        </md-button>
      </div>

      <div style="padding: 40px;width: 100%;background: white;min-height: 400px">

        <p
          v-show="not_found_show"
          style="font-size: 60px;font-weight: bold;width: 100%;height: 400px;line-height: 400px;color:#eeeeee;"
        >
          NOT FOUND
        </p>
        <div
          v-for="(post,n) in posts"
          :key="n"
        >
          <p
            class="md-title"
            style="text-align: left;"
          >
            <router-link
               :to="'/Post/'+post._id"
            >
              {{post.title}}
            </router-link>

          </p>

          <p
            v-html="post.subtitle"
            class="md-body-1"
            style="text-align: left;font-size: 15px"
          >
          </p>

          <div style="height: 30px;">
            <i class="fa fa-calendar" style="float: left;padding-top: 8px;color: #f96332"></i>
            <span
              style="color: #546E7A;float: left;padding-left: 10px;height: 30px;line-height: 30px">
               {{_moment(post.date).format('YYYY/MM/DD')}}
            </span>
          </div>
          <hr
            style="border-top: 1px solid #EEEEEE;margin-top: 10px"
          />
        </div>
      </div>

    </div>


  </div>
</template>

<script>
  export default {
    name: 'Search',
    data () {
      return {
        bg_style:{
          width: '100%',
          position: 'fixed',
          left: '0',
          top: '0',
          height: '800px',
          'z-index':10,
        },
        posts:[],
        keyword:'',
        not_found_show:false,
      }
    },
    watch:{
    },
    methods:{
      async init() {
        var res = await this._axios.get( this._host+'post?'+`keyword=${this.keyword}`);
        this.posts = res.data;
        this.not_found_show =  this.posts.length == 0 ? true:false
      },
      handleSearch(){
        this.init()
      }
    },
    mounted() {
      this.$store.commit('footer_bar_hidden');
      this.init()
    },
    destroyed(){
      this.$store.commit('footer_bar_show');
    }

  }
</script>
