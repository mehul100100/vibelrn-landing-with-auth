import antfu from '@antfu/eslint-config';
import nextPlugin from '@next/eslint-plugin-next';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default antfu(
  {
    // Enable core support
    typescript: true,
    react: true,

    // Less strict for flexibility
    lessOpinionated: true,

    // Optional: avoid formatter conflicts in editor
    isInEditor: false,

    stylistic: {
      semi: true,
    },

    formatters: {
      css: true,
    },

    // Ignore files
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'migrations/**',
    ],
  },

  jsxA11y.flatConfigs.recommended,

  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },

  {
    rules: {
      'import/order': 'off',
      'sort-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-unused-vars': 'off',

      'style/brace-style': ['error', '1tbs'],
      'ts/consistent-type-definitions': ['error', 'type'],
      'react/prefer-destructuring-assignment': 'off',
      'node/prefer-global/process': 'off',
      'test/padding-around-all': 'error',
      'test/prefer-lowercase-title': 'off',
    },
  },
);
