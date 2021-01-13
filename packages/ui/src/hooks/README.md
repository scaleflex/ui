# @scaleflex/ui/hooks

Batch of useful UI-related React hooks.

---

## Usage

Every hook functions is exported by default and should be used inside React components with respect to the
[rules of hooks](https://reactjs.org/docs/hooks-rules.html).

```typescript jsx
import useMediaQuery from '@scaleflex/ui/hooks/use-portal';

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
