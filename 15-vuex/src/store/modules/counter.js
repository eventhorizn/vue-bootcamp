const state = {
	counter: 0,
};

const getters = {
	testAuth(state, getters, rootState, rootGetters) {
		return rootState.isLoggedIn;
	},
	finalCounter(state) {
		return state.counter * 3;
	},
	normalizedCounter(_, getters) {
		const finalCounter = getters.finalCounter;
		if (finalCounter < 0) {
			return 0;
		}
		if (finalCounter > 100) {
			return 100;
		}

		return finalCounter;
	},
};

const actions = {
	increment(context) {
		console.log(context);
		setTimeout(() => {
			context.commit('increment');
		}, 2000);
	},
	increase(context, payload) {
		context.commit('increase', payload);
	},
	login() {},
};

const mutations = {
	increment(state) {
		state.counter++;
	},
	increase(state, payload) {
		console.log(state);
		state.counter += payload.value;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
