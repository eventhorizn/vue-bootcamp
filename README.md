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

## Data Binding + Event Binding = Two-Way Binding

- These two are equivalent
- The better way is to simply use two way data binding with `v-model`

```html
<input type="text" v-bind:value="name" v-on:input="setName($event, 'Hake')" />
```

```html
<input type="text" v-model="name" />
```

## Computed Properties

- When you need a function that really only outputs
- This allows us to use a function that is only called when the property used is changed

```html
<p>Your Name: {{ fullname }}</p>
```

```js
computed: {
	fullname() {
		if (this.name === '') {
			return '';
		}

		return this.name + ' ' + 'Hake';
	},
},
```

## Watchers

Similar to a computed property

The big difference is, you use watchers if you want a value to change based on some logic

```js
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
	},
```

The function in the watch section should match the property

## Methods vs Computer vs Watch

1. Methods
   - Use with event binding OR data binding
   - Data binding: method is executed for eery 're-render' cycle of the component
   - User for events or data that really needs to be re-evaluated all the time
1. Computed
   - Use with data binding
   - Only re-evaluated if one of their 'used values' changed
   - Use dor data that depends on other data
1. Watch
   - Not used directly in template
   - Allows you to run any code in reaction to some changed data (send http request)
   - Use for any non-data update y ou want to make

## v-bind and v-on Shorthand

You can use the `@` symbol instead of `v-on`

```html
<button v-on:click="add(10)">Add 10</button>
<button @click="add(10)">Add 10</button>
```

You can use the `:` symbol instead of `v-bind:`

```html
<input type="text" v-bind:value="name" /> <input type="text" :value="name" />
```

Be consistent (use one or the other)

## Styling

Reference 02-04

# Rendering Conditional Content & Lists

## Render Conditional Content

```html
<p v-if="goals.length === 0">
	No goals have been added yet - please start adding some!
</p>
```

We can add this directly into the html page

`v-else` is an option, but it must come after an element that has `v-if`

```html
<p v-if="goals.length === 0">
	No goals have been added yet - please start adding some!
</p>
<ul v-else-if="goals.length > 0">
	<li>Goal</li>
</ul>
<p v-else></p>
```

You can't have anything in-between you if, else-if, else elements

## v-show

`v-if`alternative

- v-if won't add items to the DOM
- v-show just hides the elements

## v-for

```html
<ul v-else>
	<li v-for="goal in goals">{{ goal }}</li>
</ul>
```

- You only have access to `goal` inside the list element
- You can also loop through an object:

```html
<ul>
	<li v-for="(value, key, index) in {name: 'Gary', age: 31}">
		{{ key }}: {{ value }} - {{ index }}
	</li>
</ul>
```

- Or a range of numbers

```html
<ul>
	<li v-for="num in 10">{{ num }}</li>
</ul>
```

# Vue Behind the Scenes

## Reactivity Under the Hood

Vue uses a built-in javascript object called `Proxy`

```js
const data = {
	message: 'Hello',
	longMessage: 'Hello World!',
};

const handler = {
	set(target, key, value) {
		if (key === 'message') {
			target.longMessage = value + ' World';
		}
		target.message = value;
	},
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!';

console.log(proxy.longMessage);
```

This allows you to make objects and properties reactive

## Multiple Vue Apps

You can create multiple vue apps in an application

```html
<section id="app2">
	<p>{{ favoriteMeal }}</p>
</section>
```

```js
const app2 = Vue.createApp({
	data() {
		return {
			favoriteMeal: 'Pizza',
		};
	},
});

app2.mount('#app2');
```

- You can't reference anything from a different app in the app2
- One 'html part' per app
  - Official term is `Template`

## Template Alternative

```html
<section id="app2"></section>
```

```js
const app2 = Vue.createApp({
	template: `
    <p>{{ favoriteMeal }}</p>
  `,
	data() {
		return {
			favoriteMeal: 'Pizza',
		};
	},
});
```

## refs

```html
<input type="text" ref="userText" />
```

```js
methods: {
	saveInput(event) {
		this.currentUserInput = event.target.value;
	},
	setText() {
		//this.message = this.currentUserInput;
		this.message = this.$refs.userText.value;
	},
}
```

- `$refs` is a built in vue object
- It allows you to reference anything defined in the DOM
  - In this case `userText`

## How Vue Updates the DOM

- Vue Instance
  - Stores data, computer properties, methods
  ```js
  title: 'Hello',
  text: 'Not the title'
  ```
  - Data and computed properties may change
  - Because of user input
- Browser DOM
  - Vue-controlled template is rendered in the DOM
  ```html
  <h2>Hello!</h2>
  <p>Not the title</p>
  ```
  - Updates should be reflected, but Vue should **not** re-render everything
- Virtual DOM

  - JS-based DOM which exists only in memory
  - Updates are made to the virtual DOM first, only differences are then rendered to real DOM

## Vue Instance Lifecycle

![](./images/05-vue-behind-the-scenes/lifecycle.png)

# Vue CLI and Development Setup

1. [NodeJs](https://nodejs.org/en/) needs to be installed
   ```node
   npm init vue
   ```
   - You can click 'no' on most options
1. [Volar VS Code Extension](https://github.com/johnsoncodehk/volar)
1. Start the app
   ```node
   npm run dev
   ```
