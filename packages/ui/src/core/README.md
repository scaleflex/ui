# @scaleflex/ui/core

React UI components library by Scaleflex

---

## Installation

```shell script
npm i @scaleflex/ui # styled-components react react-dom
```

```shell script
yarn add @scaleflex/ui # styled-components react react-dom
```

> Make sure to have `react`, `react-dom` and `styled-components` installed in your package as they are included in our peer dependencies.

## Usage

`@scaleflex/ui` package implements different UI components under the Scaleflex design system.
Every component is exported by default from its folder along with its props and, sometimes, some helper entities.

```typescript jsx
import Button from '@scaleflex/ui/core/button';
Or
import { Button } from '@scaleflex/ui/core';

// ...

<Button color="primary">
  Download
</Button>
```
