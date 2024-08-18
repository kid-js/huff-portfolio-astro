import postcssPresetEnv from 'postcss-preset-env';
import postcssSortMediaQueries from 'postcss-sort-media-queries';

export default {
    plugins: [
        postcssPresetEnv({
            stage: false,
            // stage: 3,
            // minimumVendorImplementations: 2,
            features: {
                'nesting-rules': true,
                'media-query-ranges': true,
                // 'custom-properties': false,
                // 'gap-properties': false,
            },
            // autoprefixer: { grid: 'autoplace' },
        }),
        postcssSortMediaQueries({
            sort: 'mobile-first',
            // sort: 'desktop-first',
            // unitlessMqAlwaysFirst: true,
        }),
    ],
};