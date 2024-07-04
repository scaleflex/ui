import React, { useState, useEffect, useCallback, useRef } from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { MenuProps } from './menu.props';
import { Position } from '../popper/types';
import Popper from '../popper';
import Styled from './menu.styles';

const Menu = intrinsicComponent<MenuProps, HTMLDivElement>(
  (
    {
      children,
      open = false,
      anchorElPosition,
      anchorEl,
      onClose,
      containerProps = {},
      alignCenter,
      maxHeight = 250,
      position = Position.BottomStart,
      popperOptions,
      enableOverlay = true,
      zIndex,
      hideScroll = true,
      scroll = true,
      enableUnderlayingEvent = false,
      popperWrapperStyles = {},
      ...rest
    }: MenuProps,
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

    const handleClose = (event: React.MouseEvent<HTMLDivElement>): void => {
      if (typeof onClose === 'function') {
        onClose(event);
      }
    };

    return (
      <Popper
        ref={menuRef}
        position={position || 'bottom-start'}
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
    );
  }
);

export default Menu;
