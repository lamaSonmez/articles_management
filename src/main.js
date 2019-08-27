// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios'

import VueLoaders from 'vue-loaders';

Vue.use(VueLoaders);


Vue.config.productionTip = false
Vue.prototype.$http = Axios;

const accessToken = localStorage.getItem('access_token')

if (accessToken) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = accessToken
}
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
})