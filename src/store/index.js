import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    footer_bar: true,
    language:'zh',
    backgroundImage:{
      home:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532498632737&di=dfda81de04c2b9555aff8603afa471b2&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F9%2F57902b8472f17.jpg',
      post:'https://demos.creative-tim.com/material-kit-pro/assets/img/bg5.jpg',
      search:'http://www.wallcoo.com/cartoon/Kitsunenoir_Design_Illustration_V/wallpapers/2560x1440/kim-holtermand-reflections.jpg',
      list:'http://pa8ph8wkz.bkt.clouddn.com/image/hor/1375673557481.jpg',
      about:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532498632737&di=dfda81de04c2b9555aff8603afa471b2&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F9%2F57902b8472f17.jpg'
    }
  },
  mutations: {
    footer_bar_hidden (state) {
      state.footer_bar = false
    },
    footer_bar_show (state) {
      state.footer_bar = true
    },
    change_language_to_zh (state){
      state.language = 'zh'
    },
    change_language_to_en (state){
      state.language = 'en'
    },
    change_background_image (state,info){
      state.backgroundImage = info
    }
  }
});
export default store;
