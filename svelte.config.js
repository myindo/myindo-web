import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
