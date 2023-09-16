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
  plugins: [
    "react",
    "@typescript-eslint",
    "sonarjs",
    "jsx-a11y",
    "react-refresh",
    "prettier",
    "prefer-arrow-functions",
    "simple-import-sort",
    "filename-rules",
    "jsdoc",
    "eslint-plugin-tsdoc",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "airbnb-typescript",
    "plugin:@typescript-eslint/strict",
    "airbnb/hooks",
    "plugin:sonarjs/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:jsdoc/recommended-typescript",
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
    "no-alert": "error",
    "require-unicode-regexp": "error",
    "prefer-template": "warn",
    "no-implicit-coercion": "warn",
    "require-await": "warn",
    "no-plusplus": ["warn", { allowForLoopAfterthoughts: true }],
    "no-restricted-imports": "off",
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
    // Disable console.log to encourage more explicit logging
    "no-console": [
      "warn",
      {
        allow: [
          "warn",
          "error",
          "info",
          "dir",
          "table",
          "assert",
          "count",
          "time",
          "timeLog",
          "trace",
          "groupCollapsed",
          "groupEnd",
        ],
      },
    ],
    "padding-line-between-statements": "off",

    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { assertionStyle: "never" },
    ],
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": true,
        "ts-nocheck": true,
        "ts-check": false,
        minimumDescriptionLength: 3,
      },
    ],
    "@typescript-eslint/restrict-template-expressions": "error",
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "@typescript-eslint/no-floating-promises": [
      "error",
      { ignoreVoid: true, ignoreIIFE: true },
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],
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
        ],
      },
    ],
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "default",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "variable",
        // Need to allow PascalCase for React components
        format: ["PascalCase", "camelCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "property",
        format: null,
        leadingUnderscore: "allow",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "@typescript-eslint/no-restricted-imports": [
      "warn",
      {
        name: "react-redux",
        importNames: ["useSelector", "useDispatch"],
        message:
          "Use typed hooks `useAppDispatch` and `useAppSelector` instead.",
      },
    ],
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/comma-dangle": "off",

    "react/prefer-stateless-function": "error",
    "react/button-has-type": "error",
    "react/no-unused-prop-types": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-no-script-url": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
    "react/jsx-fragments": "error",
    "react/destructuring-assignment": [
      "error",
      "always",
      { destructureInSignature: "always" },
    ],
    "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
    "react/jsx-max-depth": ["error", { max: 5 }],
    "react/function-component-definition": [
      "warn",
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "react/no-typos": "warn",
    "react/display-name": "warn",
    "react/self-closing-comp": "warn",
    "react/jsx-sort-props": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": "off",

    "react-refresh/only-export-components": "warn",

    "import/no-extraneous-dependencies": [
      "error",
      // allow devDependencies to be imported into testing files, etc.
      { devDependencies: ["**/*.{test,spec,story,stories}.{ts,tsx}"] },
    ],
    "import/no-default-export": "error",

    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",

    "jsdoc/require-throws": "error",
    "jsdoc/check-indentation": "warn",
    "jsdoc/no-blank-blocks": "warn",
    "jsdoc/require-asterisk-prefix": "warn",
    "jsdoc/require-description": "warn",
    "jsdoc/sort-tags": "warn",
    "jsdoc/check-syntax": "warn",
    "jsdoc/tag-lines": ["warn", "never", { startLines: 1 }],
    "jsdoc/require-param": ["warn", { checkDestructuredRoots: false }],
    "jsdoc/require-jsdoc": [
      "warn",
      {
        publicOnly: true,
        require: {
          FunctionDeclaration: true,
          FunctionExpression: true,
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          MethodDefinition: true,
        },
        contexts: [
          "VariableDeclaration",
          "TSTypeAliasDeclaration",
          // Encourage documenting React prop types
          "TSPropertySignature",
        ],
        enableFixer: true,
      },
    ],
    // tsdoc checks this syntax instead
    "jsdoc/require-hyphen-before-param-description": "off",
    "jsdoc/require-returns": "off",

    "tsdoc/syntax": "warn",

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

    "filename-rules/match": [2, { ".ts": "camelcase", ".tsx": "pascalcase" }],
  },
  overrides: [
    {
      // overrides for tests
      files: ["*.test.{ts,tsx}"],
      rules: {
        "@typescript-eslint/no-floating-promises": "off",
      },
    },
    {
      // override for storybook
      files: ["*.{stories,story}.{ts,tsx}"],
      rules: {
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "import/no-default-export": "off",
        "jsdoc/require-jsdoc": "off",
      },
    },
  ],
};
