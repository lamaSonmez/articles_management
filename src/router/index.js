import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//auth components
import Login from '@/components/auth/login'
import Register from '@/components/auth/register'


//articles compoenents
import ArticlesHome from '@/components/articles/index'
import AddArticle from '@/components/articles/add'
import EditArticle from '@/components/articles/edit'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'ArticlesHome',
            component: ArticlesHome
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },

        {
            path: '/articles/add',
            name: 'AddArticle',
            component: AddArticle
        },
        {
            path: '/articles/edit/:id',
            name: 'EditArticle',
            component: EditArticle
        }
    ]
})