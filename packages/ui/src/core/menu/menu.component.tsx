import React, { useCallback, useEffect, useRef, useState } from 'react';

import type { MenuProps } from './menu.props';
import { Position } from '../popper/types';
import Popper from '../popper';
import Styled from './menu.styles';

const Menu = ({
  children,
  anchorEl,
  maxHeight = 250,
  position = Position.BottomStart,
  zIndex,
  open = false,
  enableOverlay = true,
  hideScroll = true,
  enableUnderlayingEvent = false,
  containerProps = {}, // Todo: remove this prop as we don't need it
  popperOptions,
  popperWrapperStyles = {},
  onClose,
  ref,
  ...rest
}: MenuProps): JSX.Element => {
  const [timeout, setTimeoutState] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [rect, setRect] = useState(new DOMRect());
  const menuRef = useRef(null);

  const updateRect = useCallback(() => {
    const defaultPosition = {
      top: 0,
      left: 0,
      height: 0,
      width: 0,
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
  }, [updateRect]);

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
      position={position}
      open={open}
      anchorEl={anchorEl}
      overlay={enableOverlay}
      popperOptions={popperOptions}
      zIndex={zIndex}
      enableUnderlayingEvent={enableUnderlayingEvent}
      wrapperStyles={popperWrapperStyles}
      onClick={handleClose}
    >
      <Styled.Menu ref={ref} $maxHeight={maxHeight} $rect={rect} {...containerProps} {...rest}>
        {children}
      </Styled.Menu>
    </Popper>
  );
};

export default Menu;
