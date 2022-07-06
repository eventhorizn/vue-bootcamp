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
	async contactCoach(context, payload) {
		const newRequest = {
			userEmail: payload.email,
			message: payload.message,
		};

		const response = await fetch(
			`https://vue-http-demo-2178f-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
			{ method: 'POST', body: JSON.stringify(newRequest) }
		);

		const responseData = await response.json();
		console.log(responseData);

		if (!response.ok) {
			throw new Error(responseData.message || 'Failed to send request.');
		}

		newRequest.id = responseData.name;
		newRequest.coachId = payload.coachId;

		context.commit('addRequest', newRequest);
	},
	async fetchRequests(context) {
		const coachId = context.rootGetters.userId;
		const response = await fetch(
			`https://vue-http-demo-2178f-default-rtdb.firebaseio.com/requests/${coachId}.json`
		);
		const responseData = await response.json();

		if (!response.ok) {
			throw new Error(responseData.message || 'Failed to send requests.');
		}

		const requests = [];

		for (const key in responseData) {
			const request = {
				id: key,
				coachId: coachId,
				userEmail: responseData[key].userEmail,
				message: responseData[key].message,
			};

			requests.push(request);
		}

		context.commit('setRequests', requests);
	},
};

const mutations = {
	addRequest(state, payload) {
		state.requests.push(payload);
	},
	setRequests(state, payload) {
		state.requests = payload;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
