import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import Farmer from '@/components/Farmer'

import Quiz from '@/components/quiz/Quiz'
import Psychological from '@/components/psychological/Psychological'
import Tips from '@/components/tips/Tips'
import Science from '@/components/science/Science'

Vue.use(Router)

// TODO: 研究下eslint和jsformat,js后面加；
export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: '/index',
    name: 'Index',
    component: Index
  }, {
    path: '/farmer',
    name: 'Farmer',
    component: Farmer
  }, {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  }, {
    path: '/psychological',
    name: 'Psychological',
    component: Psychological
  }, {
    path: '/tips',
    name: 'Tips',
    component: Tips
  }, {
    path: '/science',
    name: 'Science',
    component: Science
  }]
})
