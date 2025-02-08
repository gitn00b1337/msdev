import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
	plugins: [
		sveltekit(),
		svg({
			svgoOptions: {
				plugins: [
					"preset-default",
    				"removeDimensions"
				]
			}
		}),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
		}),
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
});
