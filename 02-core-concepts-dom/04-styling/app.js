const app = Vue.createApp({
	data() {
		return {
			boxASelected: false,
			boxBSelected: false,
			boxCSelected: false,
		};
	},
	computed: {
		boxAClasses() {
			return { active: this.boxASelected };
		},
	},
	methods: {
		boxSelected(box) {
			if (box === 'A') {
				this.boxASelected = !this.boxASelected;
				this.boxBSelected = false;
				this.boxCSelected = false;
			} else if (box === 'B') {
				this.boxBSelected = !this.boxBSelected;
				this.boxASelected = false;
				this.boxCSelected = false;
			} else if (box === 'C') {
				this.boxCSelected = !this.boxCSelected;
				this.boxASelected = false;
				this.boxBSelected = false;
			}
		},
	},
});

app.mount('#styling');
