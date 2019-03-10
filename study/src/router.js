import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>import('./views/Home')
const About = () =>import ('./views/About.vue')
const Learn = () =>import ('./views/Learn.vue')
const Student = () =>import ('./views/Student.vue')
const Community = () =>import ('./views/Community.vue')
const ChangeCourse = () =>import('./components/ChangeCourse')

const Academic = () => import ('./components/community/Academic.vue')
const Download = () => import ('./components/community/Download.vue')
const Personal = () => import ('./components/community/Personal.vue')

const Question = () => import ('./components/Question.vue')
const Err = () => import ('./components/Err.vue')
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  linkExactActiveClass:'exact',
  routes: [
    {
      path: '/home',
      name: 'home',
      components:{
        default: Home,
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    },
    {
      path: '/community',
      name: 'community',
      component: Community,
      redirect:'/community/academic',
      meta:{
        login:false
      },
      children:[
        {
          path: 'academic',
          name: 'academic',
          component: Academic,
        },
        {
          path: 'download',
          name: 'download',
          component: Download
        },
        {
          path: 'personal',
          name: 'personal',
          component: Personal
        },
      ]
    }, 
    {
      path:'/question/:id',
      name:'question',
      component:Question
    },
    {
      path: '/learn/changeCourse',
      name: 'changeCourse',
      component: ChangeCourse
    },
    {
      path:'/err.html',
      name:'err',
      component:Err
    },
    {
      path:'*',
      redirect(to){
        if(to.path == '/'){
          return '/home'
        } else {
          return {name:'err'}
        }
      }
    }
  ]
})

export default router;