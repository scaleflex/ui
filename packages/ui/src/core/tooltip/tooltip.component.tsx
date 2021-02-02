import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import PT, { Validator } from 'prop-types';
import { usePopper } from 'react-popper';

import { intrinsicComponent, objectValues, generateClassNames } from '../../utils/functions';
import usePortal from '../../hooks/use-portal';
import ArrowTick from '../arrow-tick';
import { Type as ArrowTickType } from '../arrow-tick/types';
import type { ArrowTickTypesType } from '../arrow-tick/arrow-tick.props';
import type { TooltipProps, TooltipPositionType, PopperOptions, Modifiers } from './tooltip.props';
import { Position, Size, Strategy } from './types';
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
  {
    children, position = Position.Top, popperOptions, ...rest
  }: TooltipProps,
  ref
): JSX.Element => {
  const target = usePortal(generateClassNames('Tooltip'));
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const tooltipRef = useRef(null)

  // Amr: Todo set some constant modifers
  let popperModifiers: Modifiers = [];

  if (popperOptions && popperOptions.modifiers != null) {
    popperModifiers = popperModifiers.concat(popperOptions.modifiers);
  }


  const { styles, attributes } = usePopper(anchorEl, tooltipRef?.current!, {
    placement: position,
    ...popperOptions,
    modifiers: popperModifiers,
  });

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
    <Styled.TooltipContainer
      {...rest}
      ref={tooltipRef}
      style={styles.popper} {...attributes.popper} open={open}>
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
          target
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
  popperOptions: PT.shape({
    modifiers: PT.array,
    onFirstUpdate: PT.func,
    placement: PT.oneOf(objectValues(Position)),
    strategy: PT.oneOf(objectValues(Strategy)),
  }) as Validator<PopperOptions>,
};

export default Tooltip;
