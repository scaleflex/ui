import React, { useState, useEffect, useCallback, useContext, useRef } from 'react';

import PT, { Validator } from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { MenuProps } from './menu.props';
import { propTypes as popperPropTypes } from '../popper/popper.component';
import { Position } from '../popper/types';
import ModalMenuContext from '../modal/modal-menu-context';
import Popper from '../popper';
import Styled from './menu.styles';

const Menu = intrinsicComponent<MenuProps, HTMLDivElement>(
  (
    {
      id,
      children,
      open,
      fullWidth,
      anchorElPosition,
      anchorEl,
      onClose,
      containerProps,
      alignCenter,
      maxHeight,
      position,
      popperOptions,
      enableOverlay = true,
      ...rest
    },
    ref
  ): JSX.Element => {
    const [timeout, setTimeoutState] = useState<ReturnType<typeof setTimeout> | null>(null);
    const [rect, setRect] = useState(new DOMRect());
    const menuRef = useRef(null);

    const modalContext = useContext(ModalMenuContext);
    const updateRect = useCallback(() => {
      const defaultPosition = {
        top: 0,
        left: 0,
        height: 0,
        width: 0,
        ...(anchorElPosition || {}),
      };

      const defaultRect = new DOMRect(
        defaultPosition.left,
        defaultPosition.top,
        defaultPosition.width,
        defaultPosition.height
      );

      setRect(anchorEl?.getBoundingClientRect() ?? defaultRect);
    }, [open, timeout, anchorEl]);

    const handleWindowSizeChanged = useCallback(() => {
      if (open) {
        if (timeout) {
          clearTimeout(timeout);
        }

        setTimeoutState(setTimeout(updateRect, 300));
      }
    }, [open, timeout]);

    useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChanged);

      return () => {
        window.removeEventListener('resize', handleWindowSizeChanged);
      };
    }, [handleWindowSizeChanged]);

    useEffect(() => {
      updateRect();
    }, [anchorElPosition, updateRect]);

    useEffect(() => {
      if (!modalContext.modalOpened) {
        if (open) {
          document.body.style.overflow = 'hidden';
          updateRect();
        } else {
          document.body.style.overflow = '';
        }
      }
    }, [open, updateRect]);

    const handleClose = (): void => {
      if (typeof onClose === 'function') {
        onClose();
      }
    };

    return (
      <>
        <Popper
          ref={menuRef}
          position={position || 'bottom'}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          overlay={Boolean(enableOverlay)}
          onClick={handleClose}
        >
          <Styled.Menu
            {...containerProps}
            alignCenter={Boolean(alignCenter)}
            rect={rect}
            {...rest}
            ref={ref}
            maxHeight={maxHeight}
          >
            {children}
          </Styled.Menu>
        </Popper>
      </>
    );
  }
);

export const defaultProps = {
  open: false,
  containerProps: {},
  maxHeight: 0,
  position: 'bottom',
  enableOverlay: true,
};

Menu.defaultProps = defaultProps;

export const propTypes = {
  anchorElPosition: PT.shape({
    left: PT.number,
    right: PT.number,
    top: PT.number,
    bottom: PT.number,
  }) as Validator<DOMRect>,
  anchorEl: PT.instanceOf(Element),
  open: PT.bool,
  fullWidth: PT.bool,
  onClose: PT.func,
  id: PT.string,
  children: PT.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  containerProps: PT.object,
  alignCenter: PT.bool,
  maxHeight: PT.oneOfType([PT.string, PT.number]),
  popperOptions: popperPropTypes.popperOptions,
  position: PT.oneOf(objectValues(Position)),
  enableOverlay: PT.bool,
};

Menu.propTypes = propTypes;

export default Menu;
