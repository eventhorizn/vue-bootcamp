const state = {
	requests: [],
};

const getters = {
	requests(state, _, _2, rootGetters) {
		const coachId = rootGetters.userId;
		return state.requests.filter((req) => req.coachId === coachId);
	},
	hasRequests(_, getters) {
		return getters.requests && getters.requests.length > 0;
	},
};

const actions = {
	contactCoach(context, payload) {
		const newRequest = {
			id: new Date().toISOString(),
			coachId: payload.coachId,
			userEmail: payload.email,
			message: payload.message,
		};

		context.commit('addRequest', newRequest);
	},
};

const mutations = {
	addRequest(state, payload) {
		state.requests.push(payload);
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
