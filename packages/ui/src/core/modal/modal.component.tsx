import React, { useEffect, isValidElement } from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { ModalProps } from './modal.props';
import { Size } from './types';
import Styled from './modal.styles';

const isValidSingleFragmentChildren = (children?: any): boolean => children
  && isValidElement(children) && React.Children.count(children) === 1
  && (children as JSX.Element).type === React.Fragment;

const Modal = intrinsicComponent<ModalProps, HTMLDivElement>((
  {
    children: _children, open, onClose, maxWidth, fullWidth, ...rest
  },
  ref
): JSX.Element => {
  const children = isValidSingleFragmentChildren(_children)
    ? (_children as JSX.Element).props.children
    : _children;

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
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        open={Boolean(open)}
      >
        <Styled.Modal>
          {React.Children.map(children, (child) => {
            if (isValidElement(child) && (child as JSX.Element).type.displayName === 'ModalTitle') {
              return React.cloneElement(child, {
                onClose: handleClose, // Defaut onClose fn, but can be override by props
                ...((child as JSX.Element).props || {})
              });
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
  fullWidth: false,
  maxWidth: Size.Xs,
};

Modal.defaultProps = defaultProps;

export const propTypes = {
  onClose: PT.func.isRequired,
  children: PT.node.isRequired,
  maxWidth: PT.oneOf(objectValues(Size)),
  open: PT.bool,
  fullWidth: PT.bool,
};

Modal.propTypes = propTypes;

export default Modal;
