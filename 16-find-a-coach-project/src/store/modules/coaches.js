const state = {
	coaches: [],
	lastFetch: null,
};

const getters = {
	coaches(state) {
		return state.coaches;
	},
	hasCoaches(state) {
		return state.coaches && state.coaches.length > 0;
	},
	isCoach(_, getters, _2, rootGetters) {
		const coaches = getters.coaches;
		const userId = rootGetters.userId;
		return coaches.some((x) => x.id === userId);
	},
	shouldUpdate(state) {
		const lastFetch = state.lastFetch;

		if (!lastFetch) {
			return true;
		}

		const currentTimestamp = new Date().getTime();
		return (currentTimestamp - lastFetch) / 1000 > 60;
	},
};

const actions = {
	async registerCoach(context, data) {
		const userId = context.rootGetters.userId;
		const coachData = {
			firstName: data.first,
			lastName: data.last,
			description: data.desc,
			hourlyRate: data.rate,
			areas: data.areas,
		};

		const response = await fetch(
			`https://vue-http-demo-2178f-default-rtdb.firebaseio.com/coaches/${userId}.json`,
			{ method: 'PUT', body: JSON.stringify(coachData) }
		);

		if (!response.ok) {
			//const error = new Error(responsd);
		}

		context.commit('registerCoach', { ...coachData, id: userId });
	},
	async loadCoaches(context, payload) {
		if (!payload.forceRefresh && !context.getters.shouldUpdate) {
			return;
		}

		const response = await fetch(
			`https://vue-http-demo-2178f-default-rtdb.firebaseio.com/coaches.json`
		);

		const responseData = await response.json();

		if (!response.ok) {
			throw new Error(responseData.message || 'Failed to fetch!');
		}

		const coaches = [];
		for (const key in responseData) {
			const coach = {
				id: key,
				firstName: responseData[key].firstName,
				lastName: responseData[key].lastName,
				description: responseData[key].description,
				hourlyRate: responseData[key].hourlyRate,
				areas: responseData[key].areas,
			};

			coaches.push(coach);
		}

		context.commit('setCoaches', coaches);
		context.commit('setFetchTimestamp');
	},
};

const mutations = {
	registerCoach(state, payload) {
		state.coaches.push(payload);
	},
	setCoaches(state, payload) {
		state.coaches = payload;
	},
	setFetchTimestamp(state) {
		state.lastFetch = new Date().getTime();
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
