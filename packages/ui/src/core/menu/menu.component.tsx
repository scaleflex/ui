import React, { useEffect } from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { MenuProps } from './menu.props';
import { Position } from '../popper/types';
import Popper from '../popper';
import Styled from './menu.styles';

const Menu = intrinsicComponent<MenuProps, HTMLDivElement>(
  (
    {
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
      ...rest
    }: MenuProps,
    ref
  ): JSX.Element => {
    useEffect(() => {
      if (hideScroll) {
        if (open) {
          document.body.classList.add('Menu-open');
        } else {
          document.body.classList.remove('Menu-open');
        }

        return () => {
          document.body.classList.remove('Menu-open');
        };
      }
    }, [open]);

    const handleClose = (event: React.MouseEvent<HTMLDivElement>): void => {
      if (typeof onClose === 'function') {
        onClose(event);
      }
    };

    return (
      <Popper
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
        <Styled.Menu ref={ref} $maxHeight={maxHeight} {...containerProps} {...rest}>
          {children}
        </Styled.Menu>
      </Popper>
    );
  }
);

export default Menu;
