import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import article from '../store/modules/article'
import auth from '../store/modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        article,
        auth
    },

})