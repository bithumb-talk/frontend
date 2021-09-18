const os = require('os');
module.exports = {
  extends: ['react-app', 'airbnb', 'plugin:react/recommended', 'plugin:import/recommended'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/prefer-default-export': 'off',
    'react/no-unescaped-entities': 0,
    'no-param-reassign': [2, { props: false }],
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
      },
    ],
    'linebreak-style': ['error', require(os).EOL === '\r\n' ? 'windows' : 'unix'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
