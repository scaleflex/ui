import React, { useEffect, isValidElement } from 'react';
import { createPortal } from 'react-dom';

import { ignoreEvent, intrinsicComponent } from '../../utils/functions';
import type { ModalProps } from './modal.props';
import { Size } from './types';
import ModalMenuContext from './modal-menu-context';
import { isValidSingleFragmentChildren } from './modal.utils';
import Styled from './modal.styles';

const Modal = intrinsicComponent<ModalProps, HTMLDivElement>(
  (
    {
      children: _children,
      open = false,
      onClose,
      onDragOver,
      onDrop,
      maxWidth = Size.Xs,
      fullWidth = false,
      modalStyles,
      hideOverlay = false,
      disableOverlayClick = false,
      ...rest
    }: ModalProps,
    ref
  ): JSX.Element => {
    const children = isValidSingleFragmentChildren(_children) ? (_children as JSX.Element).props.children : _children;

    const target = document.querySelector('body')!;
    useEffect(() => {
      if (open) {
        document.body.classList.add('Modal-open');
      } else {
        document.body.classList.remove('Modal-open');
      }

      return () => {
        document.body.classList.remove('Modal-open');
      };
    }, [open]);

    const handleClose = (): void => {
      if (typeof onClose === 'function') {
        onClose();
      }
    };

    useEffect(() => {
      const keyListener = (ev: KeyboardEvent): void => {
        if (ev.key === 'Escape') {
          handleClose();
        }
      };
      document.addEventListener('keydown', keyListener);

      return () => document.removeEventListener('keydown', keyListener);
    });

    const render = (): JSX.Element => (
      <ModalMenuContext.Provider value={{ modalOpened: Boolean(open) }}>
        <Styled.Wrapper
          style={{ ...modalStyles }}
          open={Boolean(open)}
          ref={ref}
          onDragOver={onDragOver ? onDragOver : ignoreEvent}
          onDrop={onDrop ? onDrop : ignoreEvent}
        >
          {!hideOverlay && (
            <Styled.Overlay onClick={() => (disableOverlayClick ? null : handleClose())} open={Boolean(open)} />
          )}

          <Styled.Container {...rest} maxWidth={maxWidth} fullWidth={fullWidth} open={Boolean(open)}>
            <Styled.Modal>
              {React.Children.map(children, (child) => {
                if (isValidElement(child) && (child as JSX.Element).type.displayName === 'ModalTitle') {
                  return React.cloneElement(child, {
                    onClose: handleClose, // Defaut onClose fn, but can be override by props
                    ...((child as JSX.Element).props || {}),
                  });
                }

                return child;
              })}
            </Styled.Modal>
          </Styled.Container>
        </Styled.Wrapper>
      </ModalMenuContext.Provider>
    );

    // we use fragments only to for storybook to detect auto props generated in stories
    return <>{createPortal(render(), target)}</>;
  }
);

export default Modal;
