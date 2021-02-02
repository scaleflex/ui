import { createContext } from 'react';
import { Vertical, Horizontal } from '@scaleflex/ui/core/popup/types';
// import { MessageVariant } from './types';
import type { SnackbarContextProps } from './snackbar-context.props';

// Default props which can be redefined in <SnackbarProvider /> (src/index.js)
export const defaultProps = {
  autoHideDuration: 4000,
  anchorOrigin: {
    vertical: Vertical.Bottom,
    horizontal: Horizontal.Left,
  },
};

const SnackbarContext = createContext<Partial<SnackbarContextProps>>({
  ...defaultProps,
  showMessage: () => { /** will be redefined in provider */ },
});

export default SnackbarContext;
