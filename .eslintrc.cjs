module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    // 🔧 Настройки форматирования Prettier
    'prettier/prettier': [
      'error',
      {
        semi: true,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 80,
      },
    ],
    // ⚙️ Правки под современный React + TS
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
