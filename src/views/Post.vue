<style scoped>
  .post-top-sort{
    background:#ab47bc;
    height: 27px;
    margin-top: 10px;
    padding-left: 8px;
    padding-right: 8px;
    float: left;
    border-radius: 20px
  }
  .post-top-title{
    text-align: left;
    color:black;
    margin: 0;
    font-weight: bold;
  }
  a{
    color:#263238 !important;
    /*text-decoration: underline;*/
  }
  a:hover{
    color:#FF5722 !important;
  }
</style>
<template>
  <div  style="width: 100%;height: 100%;background-color: white">
    <div :style="{width:'100%',height:'600px',background: 'url('+$store.state.backgroundImage.post+')','background-size':'100% 100%'}">
    </div>
    <md-card class="md-elevation-19" :style="card_style">

      <div style="width: 60%;margin: 0 auto;padding-top: 100px">

        <h1 class="md-display-2 post-top-title">
          {{post.title}}
        </h1>
        <hr style="margin-top: 20px;margin-bottom: 20px"/>
        <div style="height: 50px;width: 100%;overflow: hidden;margin: 0 auto">

          <p style="height: 50px;line-height: 50px;margin: 0 auto;float: left;">标签:</p>
          <p style="height: 50px;line-height: 50px;margin: 0 auto;float: right;">Created At {{_moment(post.date).format('YYYY-MM-DD')}}</p>
          <md-button
            v-for="tag in post.tags"
            :key="tag"
            class="post-top-sort"
            style="color:white"
          >
            {{tag}}
          </md-button>
        </div>

      </div>

      <div v-highlight v-html="post.html" style="text-align: left;width: 60%;margin:0 auto;padding-top: 10px;padding-bottom: 50px">

      </div>



      <div style="margin: 50px auto;width: 60%;padding-bottom: 80px">

        <hr style="border-top:1px solid #f5f5f5">
        <div
          v-if="post.githubUrl"
          style="overflow: auto">
          <md-button
            :href="post.githubUrl"
            class="md-primary;" style="float: left;background-color: #263238!important;color:white;padding-left: 20px;padding-right: 20px">
            STAR
            &nbsp
            <i class="fa fa-github fa-lg"></i>
          </md-button>

        </div>

        <div v-if="relation_posts.length > 0">
          <h2 style="text-align: left"> 相关文章</h2>

          <ul
            style="margin: 30px 0 50px 0"
          >
            <li
              v-for="(post,i) in relation_posts"
              :key="i"
              style="list-style: square;color:#0D47A1;text-align: left;height: 50px;color:#37474F"
            >
              <!--<i class="fa fas fa-arrow-right fa-sm" ></i>&nbsp&nbsp-->
              <!--<router-link-->
                <!--:to="'/Post/'+post._id"-->
                <!--class="md-subheading"-->
              <!--&gt;-->
                <!--{{post.title}}-->
              <!--</router-link>-->
              <a
                @click="getPostHtml(post._id)"
                href="#"
              >
                {{post.title}}
              </a>

              <span style="color: #546E7A;float: right;padding-left: 8px">
              {{_moment(post.date).format('YYYY/MM/DD')}}
            </span>
              <i class="fa fa-calendar" style="float: right;padding-top: 0;color: #f96332"></i>
              <hr style="border-top: 1px dotted #CFD8DC;margin-top: 5px"/>

            </li>
          </ul>


        </div>
      </div>
    </md-card>

  </div>
</template>

<script>
  import '../css/post.css'
  export default {
    name: 'Post',
    data () {
      return {
        post:{
          title:'',
          tags:[],
          html:'',
          img:'http://pa8ph8wkz.bkt.clouddn.com/image/hor/1375673557481.jpg',
          date:'2016-09-08',
        },
        card_style:{
          width: '95%',
          'margin-left':'2.5%',
          'margin-top':'-100px',
          'margin-bottom':'100px',
          'border-radius': '7px'
        },
        next_post_id:'',
        screen:{
          top_default:window.pageYOffset,
          top:window.pageYOffset,
        },
        relation_posts:[],
      }
    },
    watch:{
      'screen.top':function (new_distance) {
        // console.log(new_distance)
        if (new_distance < 300){
          this.card_style['margin-top'] = `${0 - (Math.abs(new_distance/2) + 100)}px`
        }
      },
    },
    methods:{
      async  getPostHtml(post_id){
        var res = await this._axios.get( this._host+'post/'+post_id);
        this.post = res.data.basic;
        this.relation_posts = res.data.posts;
      }

    },
    mounted() {
      console.log('页面进来了');
      this.getPostHtml(this.$route.params.id);
      window.addEventListener('scroll',()=> this.screen.top = window.pageYOffset);
    },

  }
</script>
