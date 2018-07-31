import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import axios from 'axios'

import moment from 'moment'
Vue.prototype._moment = moment;

Vue.use(VueMaterial);
Vue.config.productionTip = false;


import hljs from 'highlight.js'

// 黑色主题agate.css darcula.css
// 白色主题googlecode.css
import './resource/googlecode.css'
// import 'highlight.js/styles/googlecode.css' //样式文件
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
});




Vue.prototype._axios = axios
Vue.prototype._host = 'http://www.xcmy.top/api/blog/'
// Vue.prototype._host = 'http://192.168.0.100:3000/api/blog/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
