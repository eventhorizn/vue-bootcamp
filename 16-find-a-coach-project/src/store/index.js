import { createStore } from 'vuex';
import coaches from './modules/coaches';
import requests from './modules/requests';

export default createStore({
	modules: {
		coaches,
		requests,
	},
});
