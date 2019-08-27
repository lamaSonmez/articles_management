import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import article from '../store/modules/article'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        accessToken: localStorage.getItem('acces_token') || '',
        currentUser: {}
    },
    mutations: {},
    actions: {

    },
    modules: {
        article,
    },

})