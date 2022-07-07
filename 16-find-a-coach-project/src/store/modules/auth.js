const state = {
	userId: null,
	token: null,
	tokenExpiration: null,
};

const getters = {
	userId(state) {
		return state.userId;
	},
	token(state) {
		return state.token;
	},
	isAuthenticated(state) {
		return !!state.token;
	},
};

const actions = {
	async login(context, payload) {
		const response = await fetch(
			'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBtzHmbGCnEhD75-jSBW-WGsBI1R-YAMNU',
			{
				method: 'POST',
				body: JSON.stringify({
					email: payload.email,
					password: payload.password,
					returnSecureToken: true,
				}),
			}
		);

		const responseData = await response.json();

		if (!response.ok) {
			throw new Error(responseData.message || 'Failed to authenticate');
		}

		context.commit('setUser', {
			token: responseData.idToken,
			userId: responseData.localId,
			tokenExpiration: responseData.expiresIn,
		});
	},
	async signup(context, payload) {
		const response = await fetch(
			'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBtzHmbGCnEhD75-jSBW-WGsBI1R-YAMNU',
			{
				method: 'POST',
				body: JSON.stringify({
					email: payload.email,
					password: payload.password,
					returnSecureToken: true,
				}),
			}
		);

		const responseData = await response.json();

		if (!response.ok) {
			throw new Error(responseData.message || 'Failed to authenticate');
		}

		context.commit('setUser', {
			token: responseData.idToken,
			userId: responseData.localId,
			tokenExpiration: responseData.expiresIn,
		});
	},
	logout(context) {
		context.commit('setUser', {
			token: null,
			userId: null,
			tokenExpiration: null,
		});
	},
};

const mutations = {
	setUser(state, payload) {
		state.token = payload.token;
		state.userId = payload.userId;
		state.tokenExpiration - payload.tokenExpiration;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
