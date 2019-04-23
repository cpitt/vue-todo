module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['vue'],
  extends: ['plugin:vue/recommended', 'vuetify', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: ['**/*.spec.{js,jsx,ts,tsx}'],
      plugins: ['jest'],
      env: { jest: true },
      rules: require('eslint-plugin-jest').configs.recommended.rules,
    },
  ],
};
