# @sfx-ui/hooks

Batch of useful UI-related React hooks.

---

## Installation

```shell script
npm i @sfx-ui/hooks # react react-dom
```

```shell script
yarn add @sfx-ui/hooks # react react-dom
```

> Make sure to have `react` and `react-dom` installed in your package as they are included in our peer dependencies.

## Usage

Every hook functions is exported by default and should be used inside React components with respect to the
[rules of hooks](https://reactjs.org/docs/hooks-rules.html).

```typescript jsx
import useMediaQuery from '@sfx-ui/hooks/use-portal';

/**
 * @example
 * <PortalComponent>
 *   <p>Portal content</p>
 * </PortalComponent>
 */
const PortalComponent = ({ id, children }) => {
  const target = usePortal(id);

  return createPortal(
    children,
    target,
  );
};
```
