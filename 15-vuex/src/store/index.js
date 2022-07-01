import { createStore } from 'vuex';
import auth from './modules/auth';
import counter from './modules/counter';

export default createStore({
	modules: {
		auth,
		counter,
	},
});
