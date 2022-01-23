module.exports = {
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/all',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'on',
        '@typescript-eslint/no-unused-vars': 'on',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: [
        '*.{spec,test}.{js,ts,tsx}',
        '**/__{mocks,tests}__/**/*.{js,ts,tsx}',
      ],
      rules: {
        'react/display-name': 'off',
        'react-native/no-color-literals': 'off',
      },
    },
  ],
  root: true,
  rules: {
    camelcase: 'error',
    curly: 'error',
    'no-console': 'error',
    'no-param-reassign': [
      'error',
      { ignorePropertyModificationsFor: ['state'], props: true },
    ],
    'no-underscore-dangle': 'error',
    // ---
    // Jest
    // Allow custom expectations functions starting with "expect"
    'jest/expect-expect': [
      'error',
      { assertFunctionNames: ['expect', 'expect\\w*'] },
    ],
    // ---
    // React
    // Once we migrate to ts we can remove js extension
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    // We are bad guys
    'react/jsx-max-depth': ['error', { max: 8 }],
    // Allow uppercase and namespaced components
    'react/jsx-pascal-case': [
      'error',
      { allowAllCaps: true, allowNamespace: true },
    ],
    // Allow props spreading
    'react/jsx-props-no-spreading': 'off',
    // Allow functions inline declarations
    'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
    // Allow multiple stateless components in a file
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    // Disallow usages of unsafe lifecycle methods
    'react/no-unsafe': ['error', { checkAliases: true }],
    // Disallow using class components
    'react/prefer-stateless-function': 'error',
    // Check props types only when defined
    'react/prop-types': ['error', { skipUndeclared: true }],
    // Allow raw text for custom components
    'react-native/no-raw-text': [
      'error',
      {
        skip: [
          'Caption',
          'Footnote',
          'H1',
          'H2',
          'H3',
          'H4',
          'H5',
          'Label',
          'Regular',
          'Subtitle',
          'Typography',
        ],
      },
    ],
    // ---
    // ! Auto-fixable rules we could enable in the future
    // Disallow passing style as a prop
    'react/forbid-component-props': 'off',
    // Enforce components to be written as an arrow function
    'react/function-component-definition': [
      'off',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // Disallow useless curly braces around props
    'react/jsx-curly-brace-presence': 'off',
    // Enforce common handler names
    'react/jsx-handler-names': 'off',
    // Enforce curly braces around children
    'react/jsx-no-literals': 'off',
    // Enforce sorting props alphabetically
    'react/jsx-sort-props': 'off',
    // Disallow not memoized nested components
    'react/no-unstable-nested-components': 'off',
    // Enforce not required props to have default values
    'react/require-default-props': 'off',
    // Enforce exhaustive deps for hooks
    'react-hooks/exhaustive-deps': 1,
    // ---
    // * Disable checks for class components since they are disallowed
    'react/jsx-sort-default-props': 'off',
    'react/require-optimization': 'off',
    'react/static-property-placement': 'off',
    // ---
    // TypeScript
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
};
