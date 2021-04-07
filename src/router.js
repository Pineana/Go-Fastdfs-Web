import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Control from './components/Control.vue'
import FileUpload from './components/FileUpload'
import FileList from './components/FileList'
import GroupList from './components/GroupList'
import AccountSet from './components/AccountSet'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home,
      children:[{
        path: '/control',
        component:Control
      },{
        path: '/fileupload',
        component: FileUpload
      },{
        path: '/filelist',
        component: FileList
      },{
        path: '/grouplist',
        component: GroupList
      },{
        path: '/accountset',
        component: AccountSet
      }]
    }
  ]
})
