import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import stylistic from '@stylistic/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import noSecrets from 'eslint-plugin-no-secrets';
import nounsanitized from 'eslint-plugin-no-unsanitized';
import perfectionist from 'eslint-plugin-perfectionist';
import pluginPromise from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import pluginSecurity from 'eslint-plugin-security';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import("eslint").Linter.Config[]} */
export default tseslint.config(
  eslint.configs.all,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  jsxA11y.flatConfigs.strict,
  eslintPluginUnicorn.configs['flat/all'],
  pluginPromise.configs['flat/recommended'],
  nounsanitized.configs.recommended,
  pluginSecurity.configs.recommended,
  perfectionist.configs['recommended-natural'],
  stylistic.configs['recommended-flat'],
  reactPlugin.configs.flat['all'],
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
      'no-secrets': noSecrets,
    },
    //

    rules: {
      ...reactHooks.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'no-secrets/no-secrets': 'error',
      'sort-imports': 'off',
      'one-var': ['error', { initialized: 'never', uninitialized: 'always' }],
      'no-ternary': 'off',
      'no-undefined': 'off',
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'no-unused-vars': 'off',
      'sort-keys': 'off',
      'no-magic-numbers':'off',
      'no-inline-comments': 'off',
      'max-lines-per-function': ['error', { max: 200, skipBlankLines: true, skipComments: true }],
      'max-statements': ['error',20, { ignoreTopLevelFunctions:true }],
      camelcase: ['error', { ignoreImports: false }],

      'react/jsx-uses-react': 'off',
      'react/jsx-indent': 'off',
      'react/jsx-indent-props': 'off',
      'react/jsx-filename-extension': 'off',
      'react/react-in-jsx-scope': 'off', // this i done automatically
      'react/jsx-curly-brace-presence': 'off',
      'react/jsx-max-depth': ['warn', { max: 6 }],
      'react/jsx-newline': ['warn', { prevent: true, allowMultilines: false }],
      'react/jsx-no-leaked-render': ['error', { validStrategies: ['coerce'] }],
      'react/jsx-no-literals': 'off',
      'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
      'react/jsx-one-expression-per-line': ['warn', { allow: 'non-jsx' }],

      '@typescript-eslint/restrict-template-expressions': ['error', { allow: [{ from: 'lib', name: 'process' }] }],
      '@typescript-eslint/no-unused-vars': 'warn',

      'unicorn/filename-case': [
        'error',
        {
          case: 'pascalCase',
          ignore: ['page.tsx', 'layout.tsx', 'loading.tsx'],
        },
      ],

      '@stylistic/jsx-curly-brace-presence': [
        'warn',
        {
          props: 'never',
          children: 'never',
          propElementValues: 'always',
        },
      ],

      '@stylistic/object-curly-spacing': ['warn', 'always', { objectsInObjects: false }],

      '@stylistic/no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0, maxBOF: 0 }],
      '@stylistic/padded-blocks': ['warn', { blocks: 'never', classes: 'always', switches: 'never' }],
      '@stylistic/array-element-newline': ['warn', { consistent: true, multiline: true }],
      // "@stylistic/indent"['warn',{}]
      '@stylistic/semi': ['warn', 'always'],
      '@stylistic/multiline-ternary': ['warn', 'never'],
      '@stylistic/member-delimiter-style': [
        'warn',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
          multilineDetection: 'brackets',
        },
      ],
      '@stylistic/jsx-wrap-multilines': [
        'warn',
        {
          declaration: 'parens',
          assignment: 'parens',
          return: 'parens',
          arrow: 'parens',
          condition: 'ignore',
          logical: 'ignore',
          prop: 'ignore',
          propertyValue: 'ignore',
        },
      ],
    },
  },
);
