const state = {
	coaches: [
		{
			id: 'c1',
			firstName: 'Gary',
			lastName: 'Hake',
			areas: ['frontend', 'backend', 'career'],
			description:
				"I'm Gary and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
			hourlyRate: 30,
		},
		{
			id: 'c2',
			firstName: 'Julie',
			lastName: 'Jones',
			areas: ['frontend', 'career'],
			description:
				'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
			hourlyRate: 30,
		},
	],
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
			// error...
		}

		context.commit('registerCoach', { ...coachData, id: userId });
	},
};

const mutations = {
	registerCoach(state, payload) {
		state.coaches.push(payload);
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
