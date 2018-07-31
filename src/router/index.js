import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Post from '@/views/Post'
import List from '@/views/List'
import Search from '@/views/Search'
import About from '@/views/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }

  ]
})
