import React, { useEffect, isValidElement } from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '@sfx-ui/utils/functions';
import type { ModalProps } from './modal.props';
import { Size } from './types';
import Styled from './modal.styles';

const Modal = intrinsicComponent<ModalProps, HTMLDivElement>((
  {
    children, open, onClose, ...rest
  },
  ref
): JSX.Element => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleClose = (): void => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <Styled.Wrapper open={Boolean(open)} ref={ref}>
      <Styled.Overlay onClick={handleClose} open={Boolean(open)} />

      <Styled.Container
        {...rest}
        open={Boolean(open)}
      >
        <Styled.Modal>
          {React.Children.map(children, (child) => {
            if (isValidElement(child) && (child as JSX.Element).type.displayName === 'ModalTitle') {
              return React.cloneElement(child, { onClose: handleClose });
            }

            return child;
          })}
        </Styled.Modal>
      </Styled.Container>
    </Styled.Wrapper>
  );
});

export const defaultProps = {
  open: false,
  maxWidth: Size.Sm,
};

Modal.defaultProps = defaultProps;

export const propTypes = {
  open: PT.bool,
  maxWidth: PT.oneOf(objectValues(Size)),
  onClose: PT.func.isRequired,
  children: PT.node.isRequired,
};

Modal.propTypes = propTypes;

export default Modal;
