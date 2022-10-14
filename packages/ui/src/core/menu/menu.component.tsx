import React, { useState, useEffect, useCallback, useRef } from 'react';
import PT, { Validator } from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { MenuProps } from './menu.props';
import { propTypes as popperPropTypes } from '../popper/popper.component';
import { Position } from '../popper/types';
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
      zIndex,
      hideScroll = true,
      scroll = false,
      enableUnderlayingEvent = false,
      popperWrapperStyles = {},
      ...rest
    },
    ref
  ): JSX.Element => {
    const [timeout, setTimeoutState] = useState<ReturnType<typeof setTimeout> | null>(null);
    const [rect, setRect] = useState(new DOMRect());
    const menuRef = useRef(null);

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
      if (hideScroll) {
        if (open) {
          document.body.classList.add('Menu-open');
          updateRect();
        } else {
          document.body.classList.remove('Menu-open');
        }

        return () => {
          document.body.classList.remove('Menu-open');
        };
      }
    }, [open, updateRect]);

    const handleClose = (event: any): void => {
      if (typeof onClose === 'function') {
        onClose(event);
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
          popperOptions={popperOptions}
          zIndex={zIndex}
          enableUnderlayingEvent={enableUnderlayingEvent}
          wrapperStyles={popperWrapperStyles}
        >
          <Styled.Menu
            {...containerProps}
            alignCenter={Boolean(alignCenter)}
            scroll={scroll}
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
  maxHeight: 250,
  position: Position.Bottom,
  enableOverlay: true,
  hideScroll: true,
  scroll: false,
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
  containerProps: PT.object,
  alignCenter: PT.bool,
  maxHeight: PT.oneOfType([PT.string, PT.number]),
  popperOptions: popperPropTypes.popperOptions,
  position: PT.oneOf(objectValues(Position)),
  enableOverlay: PT.bool,
  zIndex: PT.number,
  hideScroll: PT.bool,
  scroll: PT.bool,
  enableUnderlayingEvent: PT.bool,
  popperWrapperStyles: PT.object,
};

Menu.propTypes = propTypes;

export default Menu;
