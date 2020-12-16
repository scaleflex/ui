# SFX UI

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

Scaleflex UI framework for React built with [TypeScript](https://github.com/microsoft/TypeScript) and [styled-components](https://github.com/styled-components/styled-components).

---

<p align="center">
  <strong>
    <a href="https://scaleflex.github.io/sfx-ui/" target="_blank">Storybook for UI (Documentation)</a>
  </strong>
</p>

SFX UI is shipping several packages:

- [`core`](packages/core/README.md)
- [`icons`](packages/icons/README.md)
- [`hooks`](packages/hooks/README.md)
- [`theme`](packages/theme/README.md)
- [`utils`](packages/utils/README.md)

## Installation

```shell script
npm i @sfx-ui/core # styled-components react react-dom
```

```shell script
yarn add @sfx-ui/core # styled-components react react-dom
```

> Make sure to have `react`, `react-dom` and `styled-components` installed in your package as they are included in our peer dependencies.

## Usage

Before writing any components in your application make sure to provide them with our theme.
This is done by wrapping your application in our `ThemeProvider` component.

```typescript jsx
import ThemeProvider from '@sfx-ui/theme';

ReactDOM.render(
  document.querySelector('#root'),
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```

> More examples can be found in the [`theme`](packages/theme/README.md) package readme.

After that, you are ready to use our framework inside of your application!

```typescript jsx
// Please note that in most cases we provide direct default exports for better tree-shaking support.
import Button from '@sfx-ui/core/button';
```
