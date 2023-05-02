module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/no-unescaped-entities": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { ignoreRestSiblings: true }],
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        // Disable other @typescript-eslint rules here as and when they are flagged
      },
    },
    {
      files: ["**/*.tsx"],
      rules: {
        // When declaring a component using an arrow function, like this...
        //   const MyComponent: FunctionComponent<MyComponentProps> = props => {}
        // ...don't error when the type of `props` is not defined. TS will error if you try to use something on `props`
        // that is not declared in `MyComponentProps`.
        "react/prop-types": "off",
      },
    },
  ],
};
