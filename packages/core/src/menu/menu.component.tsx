import React, { useState, useEffect, useCallback } from 'react';
import PT, { Validator } from 'prop-types';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { MenuProps } from './menu.props';
import Styled from './menu.styles';

const Menu = intrinsicComponent<MenuProps, HTMLDivElement>((
  {
    id, children, open, fullWidth, anchorElPosition, anchorEl, onClose, ...rest
  },
  ref
): JSX.Element => {
  const [timeout, setTimeoutState] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [rect, setRect] = useState(new DOMRect());

  const updateRect = useCallback(() => {
    const defaultPosition = {
      top: 0,
      left: 0,
      height: 0,
      width: 0,
      ...(anchorElPosition || {})
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

      setTimeoutState(
        setTimeout(updateRect, 300)
      );
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
    if (open) {
      document.body.style.overflow = 'hidden';
      updateRect();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open, updateRect]);

  const handleClose = (): void => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <Styled.Wrapper open={Boolean(open)} id={id}>
      <Styled.Overlay onClick={handleClose} />

      <Styled.Container
        open={Boolean(open)}
        fullWidth={Boolean(fullWidth)}
        rect={rect}
      >
        <Styled.Menu
          {...rest}
          ref={ref}
        >
          {children}
        </Styled.Menu>
      </Styled.Container>
    </Styled.Wrapper>
  );
});

export const defaultProps = {
  open: false,
  fullWidth: false,
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
};

Menu.propTypes = propTypes;

export default Menu;
