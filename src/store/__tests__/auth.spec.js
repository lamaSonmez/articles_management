import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import { cloneDeep } from 'lodash'
import auth from '../modules/auth'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('auth actions', () => {

    it('user registeration action', () => {
        let user = { first_name: 'first_name', last_name: 'last_name', email: 'firstlast@mail.com', password: 'firstpassword' }
        let store = new Vuex.Store(auth)
        let old_users_count = 0;
        if (localStorage.getItem('users')) {
            old_users_count = JSON.parse(localStorage.getItem('users')).length;
        }
        store.dispatch('register', user).then(() => {
            expect(store.getters.users.length).toBe(old_users_count + 1);
        })

    })

    it('user login action', () => {
        let user = { first_name: 'first_name', last_name: 'last_name', email: 'firstlast@mail.com', password: 'firstpassword' }
        let store = new Vuex.Store(auth)
        store.dispatch('register', user).then(() => {
            store.dispatch('login', user).then(() => {
                expect(store.getters.isAuthenticated).toEqual(true);
            })
        })

    })
    it('user logout action', () => {
        let store = new Vuex.Store(auth)
        store.dispatch('logout').then(() => {
            expect(store.getters.isAuthenticated).toEqual(false);
        })

    })
})