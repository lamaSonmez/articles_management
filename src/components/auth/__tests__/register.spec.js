import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Register from '@/components/auth/register'
import Router from 'vue-router'


const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Router);


describe('Register Form', () => {
    let actions
    let store
    beforeEach(() => {
        actions = {
                register: jest.fn(() => Promise.resolve())
            },
            store = new Vuex.Store({
                actions
            })
    })

    it('calls the register action when the form is submited', () => {
        const wrapper = shallowMount(Register, {
            store,
            localVue,
            computed: {
                inProcess: () => false,
            }

        })
        wrapper.find('form').trigger('submit')
        expect(actions.register).toHaveBeenCalled()
    })



})