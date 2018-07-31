<style scoped>


</style>
<template>
  <div style="width: 100%">

    <!--top img-->
    <div :style="{width: '100%',height: '500px',background: 'url('+$store.state.backgroundImage.home+')','background-size':'100% 100%'}">
      <div
        :style="{background:'-webkit-gradient(linear,left bottom,left top,from(rgba(66,66,66,.4)),to(rgba(1,87,155,.6)))',width: '100%',height: '500px'}">

      </div>
      <!--<p class="md-display-3"  style="position: absolute;margin: 0 auto;top: 180px;text-align: center;width: 100%;color: white">-->
        <!--{{basic.title}}</p>-->
      <!--<p class="md-display-2"  style="position: absolute;margin: 0 auto;top: 260px;text-align: center;width: 100%;color: white">-->
        <!--{{basic.subtitle}}</p>-->

    </div>

    <div style="width: 100%;margin: -318px auto 60px;">
      <div>
        <img
          :src="basic.head_img"
          style="margin:0 auto;width: 180px;height: 180px;border-radius: 90px"
          alt="头像"
        >
      </div>
      <div >
        <h2
          style="margin-top: 0;color: white"
        >
          {{basic.author}}
        </h2>
        <md-button
          :href="githubUrl"
          style="background-color: #f96332;width: 180px;height: 56px;border-radius: 28px"
        >
          Follow  &nbsp
          <i class="fa fa-github fa-lg"></i>
        </md-button>
        <md-button
          class="md-fab"
          style="background-color: #EEEEEE;"
        >
          <i class="fa fa-twitter fa-lg" style="color: #55acee;"></i>
        </md-button>
        <md-button
          class="md-fab"
          style="background-color: #EEEEEE;"
        >
          <i class="fa fa-facebook fa-lg" style="color: #3b5998;"></i>
        </md-button>
      </div>

    </div>
    <div style="width: 80%;margin: 0 auto 50px;">
      <h2 style="font-weight: 700;font-size: 2.5em;">
        项目展示
      </h2>
      <h4
        style="font-size: 1.5em;line-height: 1.45em;color: #9a9a9a;font-weight: 300;margin-bottom: 15px"
      >
        {{basic.subtitle}}
      </h4>

      <div  style="margin-top: 50px">
        <div
          v-for="(project,n) in basic.projects"
          :key="n"
        >
          <LPro
            :project="project"
            :left="n%2 == 0"
          >
          </LPro>

          <hr style="border-top: 1px solid #eeeeee;margin-top: 70px;margin-bottom: 70px"/>
        </div>
      </div>

    </div>

    <div style="width: 95%;margin: 0 auto 50px;">
      <h2 style="font-weight: 700;font-size: 2.5em;margin-bottom: 0">
        最新文章
      </h2>

      <LCard3
        v-for="(post,n) in posts"
        :key="n"
        :post="post"
        :order="n"
        style="float:left;margin-left: 50px;margin-top: 40px;margin-bottom: 40px"
      ></LCard3>
      <br style='clear:both'/>
    </div>

  </div>
</template>

<script>
  import LCard2 from '../components/LCard2'
  import LCard3 from '../components/LCard3'
  import LPro from '../components/LPro'
  export default {
    name: 'Home',
    components:{LCard2,LPro,LCard3},
    data () {
      return {
        basic:{
          title:'Welcome To My Blog',
          subtitle:'This is a place to share technology2',
          author:'Fei Yang',
          projects:[],
          summary:'nothing is impossible',
          head_img:'https://demos.creative-tim.com/now-ui-kit-pro-angular/assets/img/project8.jpg',
        },
        githubUrl:'https://github.com/xcmy',
        posts:[]
      }
    },
    methods:{
      async  init(){
        var res = await this._axios.get( this._host+'home');
        this.$store.commit('change_background_image',res.data.basic.backgroundImage);
        this.basic = res.data.basic;
        this.posts = res.data.posts;

        // console.log('=>'+JSON.stringify(res.data.basic))
      }
    },
    mounted() {
      this.init()
    },
  }
</script>
