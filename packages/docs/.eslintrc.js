module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'vuetify',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'template-curly-spacing': 'off',
    'no-unused-vars': 'off',
    'vue/valid-v-on': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: [
    'json',
    'vuetify',
  ],
  globals: {
    docsearch: true,
  },
  overrides: [
    {
      files: 'src/**/*.vue',
      rules: {
        'no-unused-vars': 'off',
        'vue/valid-v-on': 'off',
      },
    },
    {
      files: 'src/examples/**/*.vue',
      rules: {
        'max-len': 'off', // lorem ipsum is long
        'vue/html-self-closing': ['error', {
          html: {
            void: 'never',
            normal: 'never',
            component: 'never',
          },
          svg: 'always',
          math: 'always',
        }],
        'vuetify/grid-unknown-attributes': 'error',
        'vuetify/no-deprecated-classes': 'error',
        'vuetify/no-legacy-grid': 'error',
        'no-return-assign': 'off',
        'no-unused-vars': 'off',
        'vue/no-unused-vars': 'off',
        'vue/no-template-shadow': 'off',
        'vue/return-in-computed-property': 'off',
        'vue/valid-v-model': 'off',
        'vue/valid-v-on': 'off',
      },
    },
    {
      files: 'src/examples/layouts/**/*.vue',
      rules: {
        // Props are just used for source links, they don't need to be great
        'vue/order-in-components': 'off',
        'vue/require-default-prop': 'off',
      },
    },
    {
      files: [
        'src/components/**/*.vue',
        'src/layouts/**/*.vue',
        'src/pages/**/*.vue',
        'src/views/**/*.vue',
      ],
      rules: {
        indent: 'off',
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/script-indent': ['error', 2, {
          baseIndent: 1,
          switchCase: 1,
          ignores: [],
        }],
        'vue/max-attributes-per-line': ['error', {
          singleline: 1,
          multiline: {
            max: 1,
            allowFirstLine: false,
          },
        }],
        'vue/html-closing-bracket-newline': ['error', {
          singleline: 'never',
          multiline: 'always',
        }],
        'vue/html-closing-bracket-spacing': 'error',
        'vue/no-v-html': 'off',
      },
    },
  ],
}
