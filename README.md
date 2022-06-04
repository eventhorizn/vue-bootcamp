# Vue Bootcamp

1. Vue.js is a Javascript framework
   - Makes building interactive and reactive web frontends easier
   - For the browser (front-end)
1. What is Javascript?
   - A programming language supported by all browsers
   - Allows you to manipulate the already running page and provide richer user experiences
1. What is a framework?
   - A (third-party) library that exposes utility and functionality, and a set of rules
1. Reactive
   - App is able to react to user input, update the screen dynamically
1. Web frontends
   - 'What the user sees'
   - HTML + css + js in the browser
1. We don't send requests back and forth to the server to update the screen
   - We use JS instead

## Ways of Using Vue

1. Used to control parts of HTML pages, or entire pages
   - Don't have to use it for the whole page
   - 'Widget' approach on a multi-page app
   - (Some) pages are still rendered on and served by a backend server
1. Can be used to control the entire frontend of a web app
   - SPA approach
   - Server only sends one HTML page
   - Vue takes over after and controls the UI

## Vue Alternatives

1. React.js
   - Lean and focused component-based UI library (not a framework)
   - Certain features (routing) are added via community packages
1. Angular
   - Complete component-based UI
   - Lots of features
   - Uses TypeScript
   - Can be overkill for smaller projects

## Getting Started

1. [Vuejs Quick Start](https://vuejs.org/guide/quick-start.html)
1. Without Build Tools
   ```html
   <script src="https://unpkg.com/vue@3"></script>
   ```

## Connecting a vue app to a section of html

```html
<section id="user-goal">
	<h2>My Course Goal</h2>
	<p>{{ courseGoal }}</p>
</section>
```

```js
const app = Vue.createApp({
	data() {
		return {
			courseGoal: 'Finish the course and learn Vue.',
		};
	},
});

app.mount('#user-goal');
```

- We are also using Interpolation and Data Binding
  - {{ courseGoal }}
- It will only work within the section we have defined for vue

# DOM Interaction with Vue

## Interpolation

```html
<section id="user-goal">
	<h2>My Course Goal</h2>
	<p>{{ courseGoal }}</p>
	<p>Learn more <a v-bind:href="vueLink">about Vue</a>.</p>
</section>
```

```js
const app = Vue.createApp({
	data() {
		return {
			courseGoal: 'Finish the course and learn Vue.',
		};
	},
});
```

- Simple example of including an interpolated value in the hmtl from vue

## Data Binding

```html
<section id="user-goal">
	<h2>My Course Goal</h2>
	<p>Learn more <a v-bind:href="vueLink">about Vue</a>.</p>
</section>
```

```js
const app = Vue.createApp({
	data() {
		return {
			vueLink: 'https://vuejs.org',
		};
	},
});
```

- `v-bind` works with any html tag an element has

## Methods

```html
<section id="user-goal">
	<h2>My Course Goal</h2>
	<p>{{ outputGoal() }}</p>
</section>
```

```js
const app = Vue.createApp({
	methods: {
		outputGoal() {
			const randomNumber = Math.random();

			if (randomNumber < 0.5) {
				return this.courseGoalA;
			} else {
				return this.courseGoalB;
			}
		},
	},
});
```

## Event Binding

- Binding an html event to a function through vue

```html
<section id="events">
	<h2>Events in Action</h2>
	<input type="text" v-on:input="setName1($event, 'Hake')" />
	<input type="text" v-on:input="setName2" />
	<p>Your Name: {{ name }}</p>
</section>
```

```js
const app = Vue.createApp({
	data() {
		return {
			name: '',
		};
	},
	methods: {
		setName1(event, lastName) {
			this.name = event.target.value + ' ' + lastName;
		},
		setName2() {
			this.name = event.target.value;
		},
	},
});
```

- By default the event is passed through to the function
- But if you need to pass additional variables in, you have to manually pass the event by `$event`

## Event Modifiers

- Really, just limiting when an event is triggered

```html
<section id="events">
	<h2>Events in Action</h2>
	<button v-on:click="add(10)">Add 10</button>
	<button v-on:click.right="reduce(5)">Reduce 5</button>
	<p>Result: {{ counter }}</p>
	<input
		type="text"
		v-on:input="setName($event, 'Hake')"
		v-on:keyup.enter="confirmName"
	/>
	<p>Your Name: {{ confirmedName }}</p>

	<form v-on:submit.prevent="submitForm">
		<input type="text" />
		<button>Sign Up</button>
	</form>
</section>
```

- Notice the `v-on:click.right`, `v-on:keyup.enter`, and `v-on:submit.prevent`
