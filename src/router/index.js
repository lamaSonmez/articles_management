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
import ViewArticle from '@/components/articles/view'

Vue.use(Router)

const router = new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [{
                path: '/',
                name: 'ArticlesHome',
                component: ArticlesHome,
                meta: {
                    requiresAuth: true
                }
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
                component: AddArticle,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/articles/edit/:id',
                name: 'EditArticle',
                component: EditArticle,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/articles/view/:id',
                name: 'ViewArticle',
                component: ViewArticle,
                meta: {
                    requiresAuth: true
                }
            }
        ]
    })
    //Global Guard
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (localStorage.getItem('access_token') == null || undefined) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
})

export default router;