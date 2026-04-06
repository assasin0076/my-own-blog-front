import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import vuePrettierConfig from '@vue/eslint-config-prettier';
import globals from 'globals';

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  js.configs.recommended,

  ...pluginVue.configs['flat/essential'],

  ...vueTsEslintConfig(),

  vuePrettierConfig,

  {
    files: ['**/*.{vue,js,jsx,cjs,mjs,ts,tsx,cts,mts}'],
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.node,
        vi: 'readonly',
        __APP_VERSION__: 'readonly',
        afterEach: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        beforeAll: 'readonly',
      },
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'template-curly-spacing': ['error', 'never'],
      'vue/max-attributes-per-line': 'off',
      'vue/html-closing-bracket-newline': [
        'error',
        {
          singleline: 'never',
          multiline: 'always',
        },
      ],
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'no-multi-spaces': 'error',
      semi: 'error',
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
      'vue/html-indent': [
        'error',
        2,
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
          ignores: [],
        },
      ],
      'eol-last': ['error', 'always'],
      'vue/require-v-for-key': 'off',
      'vue/valid-v-for': 'off',
    },
  },

  {
    files: [
      '**/__tests__/*.{j,t}s?(x)',
      '**/tests/unit/**/*.spec.{j,t}s?(x)',
      '**/*.spec.{j,t}s?(x)',
    ],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
