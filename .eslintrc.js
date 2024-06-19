module.exports = {
  extends: ['plugin:typescript/recommended', 'naming-convention'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf',
        singleQuote: true,
        trailingComma: 'es5',
        semi: ['error', 'always'],
        quotes: ['error', 'double'],
        printWidth: 120,
        'no-mixed-spaces-and-tabs': ['error', '2'],
        'no-trailing-spaces': ['error'],
        indent: [
          'error',
          2,
          {
            SwitchCase: 1,
          },
        ],
        camelcase: [
          'error',
          {
            properties: 'never',
          },
        ],
        'no-underscore-dangle': [
          'error',
          {
            allowAfterThis: true,
          },
        ],
        'no-mixed-case': ['error'],
        'naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase', 'PascalCase'], // Formatos Java
            leadingUnderscore: 'allow', // Permite sublinhado inicial
          },
          {
            selector: 'variable',
            // ... Opções específicas para variáveis
          },
          {
            selector: 'function',
            // ... Opções específicas para funções
          },
          {
            selector: 'typeLike', // Para tipos TypeScript
            format: ['PascalCase'], // Formato Java para tipos
            leadingUnderscore: 'allow',
          },
        ],
      },
    ],
  },
}
