<template>
  <div style="width: 18%;margin-left: 50px">
    <md-card
      style="margin-top: 30px"
    >
      <md-card-media>
        <img :src="basic.head_img" alt="People">
      </md-card-media>

      <div style="width: 80%;height: 40px;background-color: #f5f5f5!important;margin: 20px auto 0;">
        <h2 style="padding-top: 0;height: 40px;line-height: 40px;">{{basic.author}}</h2>
      </div>

      <md-card-content style="margin-bottom: 0">
        {{basic.summary}}
      </md-card-content>
      <div style="padding-bottom: 15px">
        <md-button class="md-fab md-mini" style="background-color: white" >
          <i class="fa fa-github fa-lg"></i>
        </md-button>
        <md-button class="md-fab md-mini" style="background-color: white" >
          <i class="fa fa-linkedin fa-lg"></i>
        </md-button>
      </div>
    </md-card>
  </div>
</template>
