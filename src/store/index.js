import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

//modules
import article from '../store/modules/article'
import auth from '../store/modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        article,
        auth
    },
    plugins: [createPersistedState()],

})