const state = {
	isLoggedIn: false,
};

const getters = {
	userIsAuthenticated(state) {
		return state.isLoggedIn;
	},
};

const actions = {
	login(context) {
		context.commit('setAuth', { isAuth: true });
	},
	logout(context) {
		context.commit('setAuth', { isAuth: false });
	},
};

const mutations = {
	setAuth(state, payload) {
		state.isLoggedIn = payload.isAuth;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
