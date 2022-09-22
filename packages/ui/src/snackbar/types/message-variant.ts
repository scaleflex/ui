import { Status } from '@scaleflex/ui/core/popup-status/types';

/**
 * We add "variant" to simplify work with Popup status.
 * Easier to use variant="error" instead of status="sad", like showMessage('message', { variant: 'error' }).
 * But status stil can be used.
 */
export const MessageVariant = {
  Default: 'default',
  Success: 'success',
  Warning: 'warning',
  Error: 'error',
} as const;

// Match our helper "variant" prop and @scaleflex/ui Popup "status"
export const MessageVariantStatusMatch = {
  [MessageVariant.Default]: Status.Info,
  [MessageVariant.Success]: Status.Success,
  [MessageVariant.Warning]: Status.Warning,
  [MessageVariant.Error]: Status.Error,
} as const;
