import App from './App.svelte';
import '../public/styel.css';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;