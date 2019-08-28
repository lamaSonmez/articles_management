import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import articleConfig from '../modules/article'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Article actions', () => {

    it('store article action', () => {
        let article = { id: '30', title: 'test store article test', content: '<p>content of the article goes here</p>', image: null }
        let store = new Vuex.Store(articleConfig)
        let old_articles_count = 0;
        if (localStorage.getItem('articles')) {
            old_articles_count = JSON.parse(localStorage.getItem('articles')).length;
        }
        store.dispatch('storeArticle', article).then(() => {
            expect(store.getters.articles.length).toBe(old_articles_count + 1);
        })

    })

    it('get article action', () => {
        let article = { id: '30', title: 'test store article test', content: '<p>content of the article goes here</p>', image: null }
        let store = new Vuex.Store(articleConfig)
        store.dispatch('storeArticle', article).then(() => {
            store.dispatch('getArticle', article.id).then(() => {
                expect(store.getters.article).not.toBe(null);
            })
        })

    })
    it('remove article action', () => {
        let article = { id: '30', title: 'test store article test', content: '<p>content of the article goes here</p>', image: null }
        let store = new Vuex.Store(articleConfig)
        store.dispatch('storeArticle', article).then(() => {
            store.dispatch('removeArticle', article.id).then(() => {
                store.dispatch('getArticle', article.id).then(() => {
                    expect(store.getters.article).toBe(null);
                })
            })
        })

    })


})