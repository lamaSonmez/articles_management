import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Router from 'vue-router'
import ArticlesTable from '@/components/articles/_partials/articles_table'
import { wrap } from 'module';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Router);


describe('articles_table.vue', () => {
    it('should call for delete action when remove button is clicked', () => {
        let listOfArticles = [{
                id: 1,
                title: 'title for test',
                date: '28-8-2019',
                content: '<p>content for testing</p>',
                img: null
            },
            {
                id: 2,
                title: 'title for test 1',
                date: '28-8-2019',
                content: '<p>content for testing 1</p>',
                img: null
            },
        ]
        const mockMethods = {
            DeleteArticle: jest.fn()
        }
        const wrapper = shallowMount(ArticlesTable, {
            localVue,
            propsData: {
                articles: listOfArticles
            },
            computed: {
                inProcess: () => false,
            },
            methods: mockMethods

        })
        let link = wrapper.findAll('.delete').at(0);
        expect(link.exists()).toBeTruthy()
        link.trigger('click')

        expect(mockMethods.DeleteArticle).toHaveBeenCalled();

    })


})