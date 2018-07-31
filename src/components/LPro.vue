
<style scoped>
  .home-card-cover:after{
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
    left: 0;
    z-index:1;
    top: 0;
    content: "";
    background-color: rgba(0,0,0,.63);
    border-radius: .25rem;
  }
</style>

<template>
  <div
    style="margin-top: 50px;display: flex;align-items: flex-start;justify-content: center;"
  >
    <div v-if="!left" style="width: 45%;margin-right: 20px">
      <div
        v-for="(desc,n) in  project.desc"
        :key="n"
        style="margin-bottom: 20px;background-color: #7b1fa2;"
      >
        <div style="width: 85%;float: left;">
          <h4
            style="text-align: left;margin: 25px 0 15px;padding: 0 15px;color: #2c2c2c;font-size: 1.5em;font-weight: 400;line-height: 1.45em;"
          >
            <i v-if="n==0" class="fa  fa-html5 fa-lg"
               style="color: #fc6262;float: left;padding-right:6px;margin-top: 2px"></i>
            <i v-else-if="n==1" class="fa  fa-jsfiddle fa-lg"
               style="color: #4285f4;float: left;margin-top: 2px"></i>
            <i v-else="n==2" class="fa  fa-code fa-lg"
               style="color: #7873f5;float: left;margin-top: 2px"></i>
            <i v-else class="fa  fa-code fa-lg"
               style="color: #7873f5;float: left;margin-top: 2px"></i>
            &nbsp&nbsp
            {{desc.title}}
          </h4>
          <p
            v-html="desc.content"
            style="padding: 0 15px 0 65px;text-align: left;line-height: 1.61em;;color: #888;font-size: 1.1em;font-weight: 300;"
          >
          </p>
        </div>
      </div>
    </div>

    <div
      :style="{width:'45%'}">
        <div class="md-elevation-16 home-card-cover"
             :style="{'border-radius':'8px',position: 'relative',width:'100%',height:'540px',background: 'url('+project.img+')','background-size':'100% 100%'}"
        >
          <div
            style="width: 100%;height: 100%;position: absolute;z-index: 3;">
            <div style="height: min-content;position: absolute;top:0;bottom:0;right:0;left:0;margin:auto 0;">
              <h2
                style="margin-top: 0;text-align: center;color: #fff;font-weight: 400;line-height: 1.25em;margin-bottom: .75rem;font-size: 2.5em;">
                {{project.name}}
              </h2>
              <p
                v-html="project.content"
                style="padding-left: 20px;padding-right: 20px;color: #E0E0E0;line-height: 1.61em;font-size: 1.2em;margin-top: 0;margin-bottom: 1rem;font-weight: 300;"
              >
              </p>
              <div>
                <md-button
                           style="background:white;color: black;height: 44px;border-radius: 22px;width: 50%;margin-bottom: 20px"
                >
                  页面预览
                </md-button>

                <!--<md-button v-if="left"-->
                  <!--style="background: linear-gradient(40deg,#ffd86f,#fc6262);color: white;height: 44px;border-radius: 22px;width: 50%;margin-bottom: 20px"-->
                <!--&gt;-->
                  <!--页面预览-->
                <!--</md-button>-->

                <!--<md-button v-else-->
                  <!--style="background: linear-gradient(40deg,#ff6ec4,#7873f5);color: white;height: 44px;border-radius: 22px;width: 50%;margin-bottom: 20px"-->
                <!--&gt;-->
                  <!--页面预览-->
                <!--</md-button>-->



              </div>
              <md-button
                class="md-fab"
                style="background-color: #EEEEEE;"
              >
                <i class="fa fa-weixin fa-lg" style="color: #62b900;"></i>
              </md-button>

              <md-button
                class="md-fab"
                style="background-color: #EEEEEE;"
              >
                <i class="fa fa-github fa-lg" style="color: #37474F;"></i>
              </md-button>


            </div>

          </div>

        </div>
      </div>


      <div  v-if="left" style="width: 45%;margin-left: 20px">
        <div
          v-for="(desc,n) in  project.desc"
          :key="n"
          style="margin-bottom: 20px;background-color: #7b1fa2;height: max-content"
        >
          <div style="width: 85%;float: right;">
            <h4
              style="text-align: left;margin: 25px 0 15px;padding: 0 15px;color: #2c2c2c;font-size: 1.5em;font-weight: 400;line-height: 1.45em;"
            >

              <i v-if="n==0" class="fa  fa-html5 fa-lg"
                 style="color: #fc6262;padding-right: 6px;float: left;margin-top: 2px"></i>
              <i v-else-if="n==1" class="fa  fa-jsfiddle fa-lg"
                 style="color: #4285f4;float: left;margin-top: 2px"></i>
              <i v-else="n==2" class="fa  fa-code fa-lg"
                 style="color: #7873f5;float: left;margin-top: 2px"></i>
              <i v-else class="fa  fa-code fa-lg"
                 style="color: #7873f5;float: left;margin-top: 2px"></i>

              &nbsp&nbsp
              {{desc.title}}
            </h4>
            <p
              v-html="desc.content"
              style="padding: 0 15px 0 65px;text-align: left;line-height: 1.61em;;color: #888;font-size: 1.1em;font-weight: 300;"
            >
            </p>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
  export default {
    name: 'LPro',
    props:["project",'left'],
    data () {
      return {
        icon:['html5','jsfiddle','code']
      }
    },
    mounted(){
      console.log('left==<--'+this.left)
    }
  }
</script>
