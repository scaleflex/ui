import React, { useState } from 'react';
import PT from 'prop-types';
import Popup from '@scaleflex/ui/core/popup';
import type { SnackbarProviderProps } from './snackbar-provider.props';
import { MessageVariantStatusMatch, MessageVariant } from './types';
import SnackbarContext, { defaultProps } from './snackbar-context';

// Wrapper for SnackbarContext.Provider to be able to add <Popup /> and showMessage fn
function SnackbarProvider({ children, ...rest }: SnackbarProviderProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState({
    ...defaultProps,
    message: '',
    ...rest,
  });
  const handleShowMessage = (message = '', { variant = MessageVariant.Default, ...restOptions } = {}): void => {
    setOptions({
      ...defaultProps,
      ...rest,
      message,
      status: MessageVariantStatusMatch[variant],
      ...restOptions,
    });
    setOpen(true);
  };

  return (
    <SnackbarContext.Provider value={{ ...options, showMessage: handleShowMessage }}>
      {children}

      <Popup {...options} open={open} onClose={() => setOpen(false)} />
    </SnackbarContext.Provider>
  );
}

SnackbarProvider.defaultProps = {
  ...defaultProps,
  children: undefined,
};

SnackbarProvider.propTypes = {
  children: PT.node,
};

export default SnackbarProvider;
