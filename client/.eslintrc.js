module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:vue/essential'
  ],
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    'vue'
  ],
  rules: {
        // allow async-await
    'generator-star-spacing': 'off',
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    'no-console': 'off',
    "semi": [2, "never"],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

