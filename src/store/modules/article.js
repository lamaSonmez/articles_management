// initial state
const state = {
    articles: [],
    article: null,
    inProcess: false,
    responseMessage: null
}


// getters
const getters = {
        articles: state => {
            return state.articles
        },
        article: state => {
            return state.article
        },

    }
    // actions
const actions = {
    storeArticle({ commit }, article) {
        commit('setInProcess', true);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (article) {
                    try {
                        //get the last id and increated it by 1;
                        var articlesList = this.getters.articles;
                        if (article.id == null) {
                            //increments id for new article
                            if (articlesList != null && articlesList.length > 0) {
                                article.id = articlesList[articlesList.length - 1].id + 1;
                            } else {
                                article.id = 1;
                            }
                            //add article to the array
                            articlesList.push(article);
                        } else {
                            //modify the article
                            //get the index of the element
                            var index = articlesList.findIndex(obj => obj.id == article.id);
                            articlesList[index] = article;
                        }
                        localStorage.setItem('articles', JSON.stringify(articlesList));
                        commit('setArticles', JSON.parse(localStorage.getItem('articles')));
                        commit('setInProcess', false);
                        commit('setResponseMessage', "Your Record Was Saved Successfully ");


                    } catch (e) {
                        console.log(e);
                        commit('setInProcess', false);
                        commit('setResponseMessage', "Sorry Something Went Wrong Pleas Try Again ");

                    }
                }
                resolve()
            }, 5000)
        })
    },
    fetchArticles({ commit }) {
        //get articles logic
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var articles = JSON.parse(localStorage.getItem('articles') || '[]');
                commit('setArticles', articles);
                resolve()
            }, 5000)
        })
    },
    getArticle({ commit }, id) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var articlesList = JSON.parse(localStorage.getItem('articles'));
                var article = articlesList.filter(obj => obj.id == id)[0];
                commit('setArticle', article);
                resolve()
            }, 5000)
        })
    },
    removeArticle({ commit }, id) {
        //delete an article
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('setInProcess', true);
                try {
                    var articlesList = JSON.parse(localStorage.getItem('articles'));
                    //get the index of the element
                    var index = articlesList.findIndex(obj => obj.id == id);
                    //remove the element from the array
                    articlesList.splice(index, 1);
                    //save the changes to localstorage
                    localStorage.setItem('articles', JSON.stringify(articlesList));
                    commit('setArticles', JSON.parse(localStorage.getItem('articles')));
                    commit('setInProcess', false);
                    commit('setResponseMessage', "Your Record Was Removed Successfully ");
                } catch (e) {
                    console.log(e);
                    commit('setInProcess', false);
                    commit('setResponseMessage', "Sorry Something Went Wrong Pleas Try Again ");
                }
                resolve()
            }, 5000)
        })
    },

}

// mutations
const mutations = {
    setArticles(state, articles) {
        state.articles = articles
    },
    setArticle(state, article) {
        state.article = article
    },
    setInProcess(state, value) {
        state.inProcess = value;
    },
    setResponseMessage(state, value) {
        state.responseMessage = value;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}