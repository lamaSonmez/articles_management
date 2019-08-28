import router from '../../router'

// initial state
const state = {
    current_user: null,
    users: [],
    inProcess: false,
    isAuthenticated: false,
    responseMessage: null
}


// getters
const getters = {
        user: state => {
            return state.user;
        },
    }
    // actions
const actions = {
    register({
        commit
    }, user) {
        commit('setInProcess', true);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user) {
                    try {
                        //get the last id and increated it by 1;
                        var usersList = JSON.parse(localStorage.getItem('users'));
                        if (usersList == null) { usersList = []; }
                        //increments id for new user
                        if (usersList != null && usersList.length > 0) {
                            user.id = usersList[usersList.length - 1].id + 1;
                        } else {
                            //first user registeration
                            user.id = 1;
                        }
                        //add user to the array
                        usersList.push(user);
                        localStorage.setItem('users', JSON.stringify(usersList));
                        commit('setUsers', JSON.parse(localStorage.getItem('users')));
                        commit('setInProcess', false);
                        commit('setResponseMessage', "You Have Registered Successfully Please Login and Enjoy !");
                        router.push('/login')


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
    login({ commit }, user) {
        commit('setInProcess', true);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('setInProcess', true);
                var usersList = JSON.parse(localStorage.getItem('users'));
                if (usersList != null) {
                    var useritem = usersList.filter(obj => obj.email == user.email && obj.password == user.password)[0];
                    if (useritem != null) {
                        commit('setCurrentUser', useritem);
                        commit('setIsAuthenticated', true);

                        localStorage.setItem('access_token', "fake_token");
                        localStorage.setItem('current_user', JSON.stringify(useritem));
                        commit('setInProcess', false);

                        router.push('/')
                    }
                } else {
                    commit('setInProcess', false);
                    commit('setResponseMessage', 'Not Found Please Got To Registeration Page and Sign Up For A New Account')
                }

                resolve()
            }, 5000)
        })
    },
    logout({ commit }) {
        return new Promise((resolve, reject) => {
            commit('setInProcess', true);

            setTimeout(() => {
                localStorage.removeItem('access_token');
                localStorage.removeItem('current_user');
                commit('setIsAuthenticated', false);
                commit('setInProcess', false);
                commit('setResponseMessage', 'Good Bye!!')
                router.push('/login');
                resolve()
            }, 5000)
        })
    }
}

// mutations
const mutations = {
    setUsers(state, users) {
        state.users = users
    },
    setCurrentUser(state, user) {
        state.current_user = user
    },
    setInProcess(state, value) {
        state.inProcess = value;
    },
    setResponseMessage(state, value) {
        state.responseMessage = value;
    },
    setIsAuthenticated(state, value) {
        state.isAuthenticated = value;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}