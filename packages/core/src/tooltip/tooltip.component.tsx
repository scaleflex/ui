import React, { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PT from 'prop-types';
import { intrinsicComponent, objectValues, generateClassNames } from '@sfx-ui/utils/functions';
import usePortal from '@sfx-ui/hooks/use-portal';
import ArrowTick from '../arrow-tick';
import { Type as ArrowTickType } from '../arrow-tick/types';
import type { ArrowTickTypesType } from '../arrow-tick/arrow-tick.props';
import type { TooltipProps, TooltipPositionType } from './tooltip.props';
import { Position, Size } from './types';
import Styled from './tooltip.styles';

const getArrowTypeByPosition = (position: TooltipPositionType): ArrowTickTypesType => {
  switch (position) {
    case Position.Left:
      return ArrowTickType.Right;

    case Position.Right:
      return ArrowTickType.Left;

    case Position.Bottom:
      return ArrowTickType.Top;

    case Position.Top:
    default:
      return ArrowTickType.Bottom;
  }
};

const Tooltip = intrinsicComponent<TooltipProps, HTMLSpanElement>((
  { children, position = Position.Top, ...rest }: TooltipProps,
  ref: React.ForwardedRef<HTMLSpanElement>
): JSX.Element => {
  const target = usePortal(generateClassNames('Tooltip'));
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [rect, setRect] = useState(new DOMRect());
  const open = Boolean(anchorEl);

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

    setRect(anchorEl ? anchorEl.getBoundingClientRect() : defaultRect);
  }, [anchorEl]);

  useEffect(() => {
    updateRect();
  }, [updateRect]);

  const handleMouseEnter = (event: any): void => {
    const { onMouseEnter } = children.props;

    setAnchorEl(event.currentTarget);

    if (typeof onMouseEnter === 'function') {
      onMouseEnter(event);
    }
  };

  const handleMouseLeave = (event: any): void => {
    const { onMouseLeave } = children.props;

    setAnchorEl(null);

    if (typeof onMouseLeave === 'function') {
      onMouseLeave(event);
    }
  };

  const render = (): JSX.Element => (
    <Styled.TooltipContainer {...rest} position={position} rect={rect} open={open}>
      <ArrowTick
        type={getArrowTypeByPosition(position)}
        IconProps={{ viewBox: '0 0 8 8', width: 10, height: 10 }}
      />

      <Styled.Tooltip>
        {rest.title}
      </Styled.Tooltip>
    </Styled.TooltipContainer>
  );

  return (
    <>
      {
        React.cloneElement(
          children,
          {
            ref,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave
          }
        )
      }

      {
        createPortal(
          render(),
          target,
        )
      }
    </>
  );
});

Tooltip.defaultProps = {
  position: Position.Top,
  size: Size.Sm,
};

Tooltip.propTypes = {
  position: PT.oneOf(objectValues(Position)),
  size: PT.oneOf(objectValues(Size)),
  title: PT.node,
  children: PT.element,
};

export default Tooltip;
