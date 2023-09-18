# ESLint Config React TypeScript

Opinionated ESLint rule set for React and TypeScript. Emphasis on auto-fixable
rules that encourage consistency, safety and readability across your code base.

Read [this](https://timjames.dev/blog/the-best-eslint-rules-for-react-projects-30i8) blog post describing my general approach.

## Install

### `npm`

```sh
npx install-peerdeps --dev @tim-w-james/eslint-config
```

### `yarn`

```sh
npx install-peerdeps --yarn --dev @tim-w-james/eslint-config
```

### `pnpm`

```sh
npx install-peerdeps --pnpm --dev @tim-w-james/eslint-config
```

Once installed, bump the minimum versions to the latest/desired versions.

## Usage

Add to your `eslint` config:

```js
{
  "extends": "@tim-w-james"
}
```

## Ecosystem

- react
- typescript
- prettier
- tsdoc

## Extends

- airbnb
- sonarjs
- jsx-ally
- import
