module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
      "linebreak-style": 0,
      "indent": 0,
      "prefer-template": 0,
      "no-unused-vars": 0,
      "brace-style": 0
  },
};
