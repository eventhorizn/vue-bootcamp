let timer;

const state = {
	userId: null,
	token: null,
	didAutoLogout: false,
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
	didAutoLogout(state) {
		return state.didAutoLogout;
	},
};

const actions = {
	async login(context, payload) {
		return context.dispatch('auth', { ...payload, mode: 'login' });
	},
	async signup(context, payload) {
		return context.dispatch('auth', { ...payload, mode: 'signup' });
	},
	async auth(context, payload) {
		const mode = payload.mode;
		let url =
			'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBtzHmbGCnEhD75-jSBW-WGsBI1R-YAMNU';

		if (mode === 'signup') {
			url =
				'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBtzHmbGCnEhD75-jSBW-WGsBI1R-YAMNU';
		}

		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify({
				email: payload.email,
				password: payload.password,
				returnSecureToken: true,
			}),
		});

		const responseData = await response.json();

		if (!response.ok) {
			throw new Error(responseData.message || 'Failed to authenticate');
		}

		const expiresIn = responseData.expiresIn * 1000;
		const expirationDate = new Date().getTime() + expiresIn;

		localStorage.setItem('token', responseData.idToken);
		localStorage.setItem('userId', responseData.localId);
		localStorage.setItem('tokenExpiration', expirationDate);

		timer = setTimeout(() => {
			context.dispatch('didAutoLogout');
		}, expiresIn);

		context.commit('setUser', {
			token: responseData.idToken,
			userId: responseData.localId,
		});
	},
	tryLogin(context) {
		const token = localStorage.getItem('token');
		const userId = localStorage.getItem('userId');
		const tokenExpiration = localStorage.getItem('tokenExpiration');

		const expiresIn = +tokenExpiration - new Date().getTime();

		if (expiresIn < 0) {
			return;
		}

		setTimeout(() => {
			context.dispatch('didAutoLogout');
		}, expiresIn);

		if (token && userId) {
			context.commit('setUser', {
				token,
				userId,
			});
		}
	},
	logout(context) {
		localStorage.removeItem('token');
		localStorage.removeItem('userId');
		localStorage.removeItem('tokenExpiration');

		clearTimeout(timer);

		context.commit('setUser', {
			token: null,
			userId: null,
		});
	},
	didAutoLogout(context) {
		context.dispatch('logout');
		context.commit('didAutoLogout');
	},
};

const mutations = {
	setUser(state, payload) {
		state.token = payload.token;
		state.userId = payload.userId;
		state.didAutoLogout = false;
	},
	didAutoLogout(state) {
		state.didAutoLogout = true;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
