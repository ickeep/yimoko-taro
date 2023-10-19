module.exports = {
  root: true,
  extends: ["eslint-config-taro", 'eslint-config-tencent', 'eslint-config-tencent/ts'],
  env: {
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react-hooks',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
    'no-unused-vars': 'warn',
    complexity: ['error', 6],
    'max-len': ['error', { code: 180 }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
        pathGroupsExcludedImportTypes: [
          'builtin',
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
      },
    ],
  },
};
