# ESLint Config React TypeScript

Opinionated ESLint rule set for React and TypeScript. Emphasis on auto-fixable
rules that encourage consistency, safety and readability across your code base.

Read [this](https://timjames.dev/blog/the-best-eslint-rules-for-react-projects-30i8) blog post describing my general approach.

## Install

### `npm`

```sh
npm install --dev @tim-w-james/eslint-config \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb \
  eslint-config-airbnb-typescript \
  eslint-config-prettier \
  eslint-plugin-filename-rules \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-jsdoc \
  eslint-plugin-jsx-a11y \
  eslint-plugin-no-secrets \
  eslint-plugin-prefer-arrow-functions \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-react-refresh \
  eslint-plugin-simple-import-sort \
  eslint-plugin-sonarjs \
  eslint-plugin-tsdoc \
  prettier \
  prettier-plugin-packagejson \
  typescript
```

### `yarn`

```sh
yarn add -D @tim-w-james/eslint-config \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb \
  eslint-config-airbnb-typescript \
  eslint-config-prettier \
  eslint-plugin-filename-rules \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-jsdoc \
  eslint-plugin-jsx-a11y \
  eslint-plugin-no-secrets \
  eslint-plugin-prefer-arrow-functions \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-react-refresh \
  eslint-plugin-simple-import-sort \
  eslint-plugin-sonarjs \
  eslint-plugin-tsdoc \
  prettier \
  prettier-plugin-packagejson \
  typescript
```

### `pnpm`

```sh
pnpm add -D @tim-w-james/eslint-config \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb \
  eslint-config-airbnb-typescript \
  eslint-config-prettier \
  eslint-plugin-filename-rules \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-jsdoc \
  eslint-plugin-jsx-a11y \
  eslint-plugin-no-secrets \
  eslint-plugin-prefer-arrow-functions \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-react-refresh \
  eslint-plugin-simple-import-sort \
  eslint-plugin-sonarjs \
  eslint-plugin-tsdoc \
  prettier \
  prettier-plugin-packagejson \
  typescript
```

### `install-peerdeps`

```sh
npx install-peerdeps --dev @tim-w-james/eslint-config
```

Once installed, bump the minimum versions to the latest/desired versions.

## Usage

Add to your `eslint` config:

```diff
{
+  "extends": ["@tim-w-james"]
  ...
}
```

## Ecosystem

- react
- typescript
- prettier
- tsdoc
- jest

## Extends

- airbnb
- sonarjs
- jsx-ally
- import
