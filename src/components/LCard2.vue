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
            <p class="display-1 font-weight-black" style="text-align: center;color:white;padding-top: 30px;margin: 0">
              {{post.title}}
            </p>
            <p class="subheading font-weight-regular" style="text-align: center;color:white;margin-top: 5px">
              <i class="fa fa-calendar" style="padding-top: -2px;color: #f96332"></i>
              &nbsp
              {{_moment(post.date).format('YYYY/MM/DD')}}
            </p>
        </div>

        <p v-html="post.subtitle"
          style="width: 80%;word-wrap:break-word;word-break: break-all;text-align: center;margin: 20px auto">
        </p>


        <hr style="border-top:#eeeeee solid 1px;margin-top: 20px;margin-bottom: 10px"/>
        <div class="title font-weight-black" style="color: #303f9f;text-align: right;width: 80%;margin: 20px auto">
          <a href="" style="color: #303f9f">READ MORE >></a>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'LCard2',
        components: {},
        props:["post",'order'],
        data () {
            return {
              headerStyle:{
                background: ['linear-gradient(40deg,#45cafc,#303f9f)!important','linear-gradient(40deg,#ffd86f,#fc6262)!important','linear-gradient(40deg,#ff6ec4,#7873f5)!important','linear-gradient(40deg,#2096ff,#05ffa3)!important'][parseInt(this.order)],
                width: '351px',
                height: '129px',
                'border-radius': '5px',
                'margin-left': '-8px',
                'box-shadow': '0 4px 10px 2px #bdbdbd'
              }
            }
        },
        mounted(){
        }
    }
</script>
