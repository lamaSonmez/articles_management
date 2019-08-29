import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import ArticleForm from '@/components/articles/_partials/article_form'
import Router from 'vue-router'


const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Router);


describe('Article Form', () => {
    let actions
    let store
    beforeEach(() => {
        actions = {
                storeArticle: jest.fn(() => Promise.resolve())
            },
            store = new Vuex.Store({
                actions
            })
    })


    it('calls the storeArticle action when the form is submited', () => {
        const mockMethods = {
            validateForm: jest.fn()
        }
        const wrapper = shallowMount(ArticleForm, {
            store,
            localVue,
            computed: {
                inProcess: () => false,
                responseMessage: () => null
            },
            methods: mockMethods

        })
        wrapper.find('form').trigger('submit')
        expect(mockMethods.validateForm).toHaveBeenCalled()
    })



})