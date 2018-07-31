
<style>
  p{
    margin-bottom: 0;
    margin-top: 0;
    text-align: left;
  }
</style>

<template>

  <div style="width: 100%;height: 230px">

    <div style="display: flex;align-items: flex-start;justify-content: center">

      <div class="md-elevation-6"
           :style="{width: '36%',height:'230px',background:'url('+img+') 100% 100% / 100% 100%'}">
      </div>
      <div style="width: 60%;margin-left: 4%;">
        <div style="height: 30px;margin:auto;">
          <i class="fa fa-github fa-lg" style="padding-top: 4px;float: left"></i>
          <span style="height: 30px;line-height: 24px;float: left;padding-left: 5px;">Swift</span>
        </div>

        <p class="md-headline" style="height: 35px;line-height: 35px;font-weight: bold" >
          {{title}}
        </p>
        <p v-html="subtitle" >
        </p>
        <p class="md-body-2" style="height: 40px;line-height: 40px;color: #37474F">
            Created by {{author}} at {{date}}
        </p>

        <div style="height: 45px;">
          <md-button style="width: 140px;height:46px;margin-left: -1px;padding-left: 10px;padding-right: 10px;background: linear-gradient(40deg,#ffd86f,#fc6262)!important;;float: left">
            READ MORE
          </md-button>
        </div>

      </div>

    </div>

    </div>
</template>

<script>
  export default {
    name: 'LCard1',
    props:["img",'title','subtitle',"author",'date','path'],
    data () {
      return {
      }
    },
    watch:{
    }
  }
</script>
