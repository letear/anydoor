// http://eslint.org/docs/user-guide/configuring
module.exports = {
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": 'script',
    "ecmaVersion": 6
  },
  "rules": {
    "no-console": "off"
  },
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  }
}
