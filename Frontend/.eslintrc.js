// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
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

