import globals from 'globals';
import eslint from '@eslint/js';
import astroParser from 'astro-eslint-parser';
import pluginAstro from 'eslint-plugin-astro';
import configPrettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
    eslint.configs.recommended,
    jsxA11y.flatConfigs.recommended,
    ...pluginAstro.configs['flat/recommended'],
    configPrettier,
    {
        languageOptions: {
            globals: {
                ...globals.esnext,
                ...globals.browser,
                ...globals.commonjs,
                ...globals.node,
            },
        },
        rules: {
            'no-inner-declarations': 0,
            'no-constant-condition': 0,
            'no-unused-vars': 1,
            'no-console': 1,
            'no-empty': 1,
            'semi': 1,

            'max-len': ['warn', {
                code: 80,
            }],
        },
    },
    {
        files: ['**/*.astro'],
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                extraFileExtensions: ['.astro'],
            },
        },
        rules: {
            'astro/no-unused-css-selector': 1,
        },
    },
    {
        ignores: [
            'dist',
            'node_modules',
            '.github',
            '**/*.html',
            '**/*.md',
        ],
    },
];