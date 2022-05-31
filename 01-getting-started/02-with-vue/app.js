// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// const addGoal = () => {
// 	const enteredValue = inputEl.value;
// 	const listItemEl = document.createElement('li');
// 	listItemEl.textContent = enteredValue;
// 	listEl.appendChild(listItemEl);
// };

// buttonEl.addEventListener('click', addGoal);

Vue.createApp({
	data() {
		return {
			goals: [],
			enteredValue: '',
		};
	},
	methods: {
		addGoal() {
			this.goals.push(this.enteredValue);
			this.enteredValue = '';
		},
	},
}).mount('#app');
