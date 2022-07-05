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
	registerCoach(context, data) {
		const coachData = {
			id: context.rootGetters.userId,
			firstName: data.first,
			lastName: data.last,
			description: data.desc,
			hourlyRate: data.rate,
			areas: data.areas,
		};

		context.commit('registerCoach', coachData);
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
