import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { cloneDeep } from 'lodash'
import Router from 'vue-router'
import Navbar from '@/components/layout/navbar'

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Router);


describe('Navbar.vue', () => {
    it('app-navbar should not be rendered when the user is not authenticated/loggedIn', () => {
        const wrapper = shallowMount(Navbar, {
            localVue,
            computed: {
                isAuthenticated: () => false,
                current_user: () => null
            }
        })
        expect(wrapper.find('nav').exists()).toBeFalsy();
    })
    it('app-navbar should  be rendered when the user is authenticated/loggedIn', () => {
        let user = { first_name: 'first_name', last_name: 'last_name', email: 'firstlast@mail.com', password: 'firstpassword' }
        const wrapper = shallowMount(Navbar, {
            localVue,
            computed: {
                isAuthenticated: () => true,
                current_user: () => user
            }
        })
        expect(wrapper.find('nav').exists()).toBeTruthy();
    })
    it('calls the logout action when logout link is clicked', () => {
        let user = { first_name: 'first_name', last_name: 'last_name', email: 'firstlast@mail.com', password: 'firstpassword' }
        let actions = {
            logout: jest.fn(() => Promise.resolve())
        }
        let store = new Vuex.Store({
            actions
        })
        const wrapper = shallowMount(Navbar, {
            store,
            localVue,
            computed: {
                isAuthenticated: () => true,
                current_user: () => user
            }
        })
        wrapper.find('#logoutBtn').trigger('click')
        expect(actions.logout).toHaveBeenCalled()
    })
})