const state = {
	requests: [],
};

const getters = {};

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
