import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/auth/login'
import Register from '@/components/auth/register'
import ArticlesHome from '@/components/articles/index'
import AddEditArticle from '@/components/articles/addedit'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/articles',
            name: 'ArticlesHome',
            component: ArticlesHome
        },
        {
            path: '/articles/slug',
            name: 'AddEditArticle',
            component: AddEditArticle
        }
    ]
})