import { defineConfig } from 'astro/config';

import cleanCss from 'vite-plugin-clean-css';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    trailingSlash: 'never',
    prefetch: {
        prefetchAll: true,
    },
    vite: {
        build: {
            assetsInlineLimit: 2080,
        },
        plugins: [
            cleanCss({
                level: 2,
            }),
        ],
    },
});