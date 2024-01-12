module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
  },
}
