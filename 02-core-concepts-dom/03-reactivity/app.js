const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			lastName: '',
			//fullname: '',
		};
	},
	watch: {
		counter(value) {
			if (value > 50) {
				this.counter = 0;
			}
		},
		// name(value) {
		// 	if (value === '') {
		// 		this.fullname = '';
		// 	} else {
		// 		this.fullname = value + ' ' + this.lastName;
		// 	}
		// },
		// lastName(value) {
		// 	if (value === '') {
		// 		this.fullname = '';
		// 	} else {
		// 		this.fullname = this.name + ' ' + value;
		// 	}
		// },
	},
	computed: {
		fullname() {
			if (this.name === '' || this.lastName === '') {
				return '';
			}
			return this.name + ' ' + this.lastName;
		},
	},
	methods: {
		add(num) {
			this.counter += num;
		},
		reduce(num) {
			this.counter -= num;
		},
		resetInput() {
			this.name = '';
		},
	},
});

app.mount('#events');
