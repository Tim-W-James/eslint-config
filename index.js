module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
    ecmaVersion: "latest",
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:sonarjs/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "sonarjs",
    "jsx-a11y",
    "prettier",
    "prefer-arrow-functions",
  ],
  // Ignore files in root
  ignorePatterns: ["/*.*"],
  settings: {
    react: {
      createClass: "createReactClass",
      // Regex for Component Factory to use
      pragma: "React",
      // Pragma to use, default to "React"
      fragment: "Fragment",
      // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: "detect",
      // React version. "detect" automatically picks the version you have installed.
      flowVersion: "0.53", // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      {
        property: "freeze",
        object: "Object",
      },
      {
        property: "myFavoriteWrapper",
      }, // for rules that check exact prop wrappers
      {
        property: "forbidExtraProps",
        exact: true,
      },
    ],
    componentWrapperFunctions: [
      // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
      "observer", // `property`
      {
        property: "styled",
      }, // `object` is optional
      {
        property: "observer",
        object: "Mobx",
      },
      {
        property: "observer",
        object: "<pragma>",
      }, // sets `object` to whatever value `settings.react.pragma` is set to
    ],
    formComponents: [
      // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
      "CustomForm",
      {
        name: "Form",
        formAttribute: "endpoint",
      },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {
        name: "Link",
        linkAttribute: "to",
      },
    ],
  },
  rules: {
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "react/prefer-stateless-function": "error",
    "import/no-extraneous-dependencies": [
      "error",
      // allow devDependencies to be imported into testing files, etc.
      { devDependencies: ["**/*.{test,spec,story,stories}.{ts,tsx}"] },
    ],
    "require-unicode-regexp": "error",
    "@typescript-eslint/restrict-template-expressions": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "require-await": "warn",
    "prefer-arrow-functions/prefer-arrow-functions": [
      "warn",
      {
        classPropertiesAllowed: true,
        disallowPrototype: true,
        returnStyle: "unchanged",
      },
    ],
    "arrow-body-style": "warn",
    "prefer-arrow-callback": [
      "warn",
      {
        allowNamedFunctions: true,
      },
    ],
    "react/self-closing-comp": "warn",
    "react/jsx-sort-props": "warn",
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "no-plusplus": ["warn", { allowForLoopAfterthoughts: true }],
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: "variable",
        // Need to allow PascalCase for React components
        format: ["PascalCase", "camelCase", "UPPER_CASE"],
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      {
        selector: "property",
        format: null,
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "max-len": [
      "warn",
      {
        code: 80,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    curly: "warn",
    "object-shorthand": "warn",
    "@typescript-eslint/consistent-type-assertions": "warn",
    "capitalized-comments": [
      "warn",
      "always",
      { ignoreConsecutiveComments: true, ignoreInlineComments: true },
    ],
    "@typescript-eslint/padding-line-between-statements": [
      "warn",
      {
        blankLine: "always",
        prev: "*",
        next: [
          "function",
          "interface",
          "type",
          "try",
          "throw",
          "case",
          "default",
          "break",
          "export",
        ],
      },
    ],
    "padding-line-between-statements": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/comma-dangle": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": "off",
  },
  overrides: [
    {
      // overrides for tests
      files: ["*.test.{ts,tsx}"],
    },
    {
      // override for storybook
      files: ["*.{stories,story}.{ts,tsx}"],
    },
  ],
};
