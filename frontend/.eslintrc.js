module.exports = {
  extends: ['react-app', 'airbnb'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/prefer-default-export': 'off',
    'react/no-unescaped-entities': 0,
  },
  env: {
    browser: true,
  },
};
