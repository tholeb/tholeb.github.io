import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		chunkSplitPlugin({
			strategy: 'single-vendor',
			customSplitting: {
				// `react` and `react-dom` will be bundled together in the `react-vendor` chunk (with their dependencies, such as object-assign)
				'react-vendor': ['react', 'react-dom'],
				tsparticles: ['tsparticles', 'tsparticles-engine', 'react-tsparticles'],
			},
		}),
	],
});
