<style scoped>

  p{
    margin-top: 0;
    margin-bottom: 0;
  }
  a{
    color:#263238 !important;
    /*text-decoration: underline;*/
  }
  a:hover{
    color:#FF5722 !important;
  }
  table
  {
    flex-direction: column;
    position: relative;
    width: 100%;
    margin: 30px 0;
    overflow: unset;
    font-size: .875rem;
    -webkit-box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
    color: #333;
    background: #fff;
    z-index: 1;
    border-radius: 2px;
    transition: .3s cubic-bezier(.4,0,.2,1);
    transition-property: color,background-color;
    will-change: color,background-color;
    border-spacing:0
  }
  tr{
    transition: .3s cubic-bezier(.4,0,.2,1);
    transition-property: background-color,font-weight;
    will-change: background-color,font-weight;

  }
  th{
    border-bottom:1px solid #ECEFF1;
    font-size: 1.0625rem;
    font-weight: bold;
    padding: 20px;
    color: white;
    text-align: left;
    background-color:#ab47bc;
  }
  td
  {
    border-bottom:1px solid #ECEFF1;
    padding: 12px 20px 12px 20px;
    position: relative;
    font-size: 14px;
    text-align: left;
    height: 48px;
    transition: .3s cubic-bezier(.4,0,.2,1);
    line-height: 18px;
  }

</style>
<template>
  <div style="width: 100%;">


    <img :src="$store.state.backgroundImage.list"
         alt=""
         :style="bg_style"
    >
    <div  style="position: absolute;z-index: 11;left:20% ;top: 160px;width: 60%;">

      <div class="md-elevation-5" style="width: 100%;float: left;background-color:white;min-height: 400px">

        <ul
          style="margin: 30px 20px 50px 20px"
        >
          <li
            v-for="(post,i) in posts"
            :key="i"
            style="list-style: square;color:#0D47A1;text-align: left;height: 50px;color:#37474F"
          >
            <!--<i class="fa fas fa-arrow-right fa-sm" ></i>&nbsp&nbsp-->
            <router-link
              :to="'/Post/'+post._id"
              class="md-subheading"
            >
              {{post.title}}
            </router-link>

            <span style="color: #546E7A;float: right;padding-left: 8px">
              {{_moment(post.date).format('YYYY/MM/DD')}}
            </span>
            <i class="fa fa-calendar" style="float: right;padding-top: 0;color: #f96332"></i>
            <hr style="border-top: 1px dotted #CFD8DC;margin-top: 5px"/>

          </li>
        </ul>

      </div>
      <!--<div class="md-elevation-5" style="width: 30%;float: right;background-color: white">-->

        <!--<div-->
          <!--class="md-elevation-6"-->
          <!--style="width: 100%;padding-top: 20px;padding-bottom: 10px"-->
        <!--&gt;-->
          <!--<div-->
            <!--style="width: 70%;margin: 0 auto 0;"-->
          <!--&gt;-->
            <!--<div-->
              <!--style="width: 100%;height: 40px;background-color: #f5f5f5!important;"-->
            <!--&gt;-->
              <!--<p-->
                <!--class="md-title"-->
                <!--style="margin-top: 0;margin-bottom: 0;height: 40px;line-height: 40px"-->
              <!--&gt;文章分类</p>-->
            <!--</div>-->

          <!--</div>-->

          <!--<div-->
            <!--style="width: 80%;margin: 0 auto"-->
          <!--&gt;-->
            <!--<md-table>-->
              <!--<md-table-row-->
                <!--v-for="(posts,i) in all_posts"-->
                <!--:key="i"-->
                <!--@click="handleRowClick(posts.sort)"-->
                <!--style="height: 40px;padding: 0"-->
              <!--&gt;-->
                <!--<md-table-cell>-->
                  <!--<span-->
                    <!--style="float: left;color: #37474F;font-size: 15px;font-weight: bold"-->
                  <!--&gt;{{posts.sort}}</span>-->
                  <!--<p-->
                    <!--style="width: 30px;height: 20px;line-height: 20px;color: white;text-align: center;border-radius: 10px;background: linear-gradient(40deg,#ff6ec4,#7873f5)!important;;font-size: 12px;float: right;"-->
                  <!--&gt;{{posts.count}}</p>-->
                <!--</md-table-cell>-->
              <!--</md-table-row>-->
            <!--</md-table>-->

          <!--</div>-->


        <!--</div>-->
      <!--</div>-->

    </div>





  </div>
</template>

<script>
  import LCard1 from '../components/LCard1'
  import LCard2 from '../components/LCard2'

  export default {
    name: 'List',
    components: {LCard1, LCard2},
    data() {
      return {
        bg_style:{
          width: '100%',
          position: 'fixed',
          left: '0',
          top: '0',
          height: '800px',
          'z-index':10,
        },
        top_img: 'http://pa8ph8wkz.bkt.clouddn.com/image/hor/1375673557481.jpg',
        all_posts: [],
        sort:'',
        posts:[],
      }
    },
    methods: {
      async init() {
        var res = await this._axios.get( this._host+'post/type');
        res.data.data.splice(0,0,{sort:'全部',count:res.data.total})
        this.all_posts = res.data.data;

        var qs = '';
        if (this.sort.length>0 && this.sort != '全部') {
          qs = `sort=${this.sort}`
        }

        var posts = await this._axios.get( this._host+'post?'+qs);
        this.posts = posts.data;
      },
      // handleRowClick(sort){
      //   this.sort = sort
      //   this.init()
      // }
    },
    mounted() {
      this.init()
    },
  }
</script>
