# @scaleflex/ui/snackbar

---

## Usage

Along with `<SnackbarProvider />` component, which has to be wrapper around you application, we export hook – `useSnackbar`.

```typescript jsx
import SnackbarProvider from '@scaleflex/ui/snackbar';

ReactDOM.render(
  (
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  ),
  document.querySelector('#root'),
);
```

Then, use `showMessage()` method from `useSnackbar` hook to show {default|success|warning|error} message.

### Default configuration
```json
{
  "autoHideDuration": 4000,
  "anchorOrigin": {
    "vertical": "bottom",
    "horizontal": "left"
  }
}
```

To override predefined configuration you can pass configs into props of the `SnackbarProvider` component

```typescript jsx
  <SnackbarProvider autoHideDuration="3000">
```

### your-component.js

```typescript
import { useSnackbar } from '@scaleflex/ui/snackbar';

function YourComponent() {
  const { showMessage } = useSnackbar();

  // Success
  showMessage('Plan selected!')

  // Error
  showMessage('Unable to fetch plans! Contact us!’, { variant: 'error' });

  ...
}
```
