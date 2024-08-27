import { defineConfig } from 'astro/config';

import cleanCss from 'vite-plugin-clean-css';
import stringReplace from 'vite-plugin-string-replace';

// https://astro.build/config
export default defineConfig({
    build: {
        format: 'file',
    },
    output: 'static',
    prefetch: {
        prefetchAll: true,
    },
    vite: {
        // build: {
        //     assetsInlineLimit: 2080,
        // },
        plugins: [
            cleanCss({
                level: 2,
            }),
            stringReplace([
               {
                  search: /astro-cid-[A-z0-9]{3}/g,
                  replace: '',
               },
            ]),
        ],
    },
});