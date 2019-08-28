import Vuex from 'vuex'
import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Login from '@/components/auth/login'
import store from '../../../store'

const localVue = createLocalVue();
localVue.use(Vuex);


describe('login Form', () => {
    let actions
    let store
    beforeEach(() => {
        actions = {
                login: jest.fn(() => Promise.resolve())
            },
            store = new Vuex.Store({
                actions
            })
    })

    it('calls the login action correctly when the form is submited', () => {
        const wrapper = shallowMount(Login, {
            store,
            localVue,
            computed: {
                inProcess: () => false,
                responseMessage: () => null
            }

        })
        wrapper.find('form').trigger('submit')
        expect(actions.login).toHaveBeenCalled()
    })

})