import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { createPopper } from '@popperjs/core';

import usePortal from '../../hooks/use-portal';
import { intrinsicComponent, generateClassNames, useForkRef } from '../../utils/functions';
import { Position } from './types';
import { PopperProps, Modifiers } from './popper.props';
import Styled from './popper.styles';
import { passEventToUnderLayingEvent } from './popper.utils';

const Popper = intrinsicComponent<PopperProps, HTMLDivElement>(
  (
    {
      anchorEl,
      children,
      open,
      warning = false,
      position: initialPlacement = Position.Bottom,
      arrow = false,
      popperOptions = {},
      overlay = false,
      zIndex = 1300,
      enableUnderlayingEvent = false,
      wrapperStyles = {},
      disablePortal = false,
      onClick,
      ...rest
    }: PopperProps,
    ref
  ): JSX.Element => {
    const target = usePortal(generateClassNames('Popper'));
    const popperRef = useRef(null);
    const handlePopperRef = useForkRef(popperRef, ref);

    useEffect(() => {
      if (!anchorEl || !open || popperRef.current === null) {
        return undefined;
      }

      const defaultModifiers = [
        { name: 'arrow', options: { element: '[data-popper-arrow]' } },
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ];

      let popperModifiers: Modifiers = arrow ? defaultModifiers : [];

      if (popperOptions && popperOptions.modifiers != null) {
        popperModifiers = popperModifiers.concat(popperOptions.modifiers);
      }

      const popper = createPopper(anchorEl, popperRef.current, {
        placement: initialPlacement,
        ...popperOptions,
        modifiers: popperModifiers,
      });

      handlePopperRef.current = popper;

      return () => {
        popper.destroy();
        handlePopperRef.current = null;
      };
    }, [anchorEl, open, popperOptions, initialPlacement, arrow]);

    const handleOnClicking = (event: React.MouseEvent<HTMLDivElement>): void => {
      event.persist();
      event.preventDefault();
      event.stopPropagation();

      if (onClick) {
        onClick(event);
      }

      if (enableUnderlayingEvent) {
        passEventToUnderLayingEvent(event);
      }
    };

    const renderOverlay = (): JSX.Element => (
      <Styled.Overlay onClick={handleOnClicking} onContextMenu={handleOnClicking} />
    );

    const render = (): JSX.Element => (
      <Styled.PopperWrapper $zIndex={zIndex} style={{ ...wrapperStyles }}>
        {overlay && open && renderOverlay()}
        <Styled.Popper ref={handlePopperRef} open={open} {...rest}>
          {children}
          {arrow && (
            <Styled.Arrow
              warning={warning}
              data-popper-arrow
              position={handlePopperRef?.state?.placement || initialPlacement}
            />
          )}
        </Styled.Popper>
      </Styled.PopperWrapper>
    );

    return disablePortal ? render() : createPortal(render(), target);
  }
);

export default Popper;
