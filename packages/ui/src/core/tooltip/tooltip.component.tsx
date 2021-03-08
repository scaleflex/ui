/* eslint-disable react/forbid-prop-types */
import React, { useState, useRef } from 'react';

import PT, { Validator } from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';

import ArrowTick from '../arrow-tick';
import { Type as ArrowTickType } from '../arrow-tick/types';
import type { ArrowTickTypesType } from '../arrow-tick/arrow-tick.props';
import type { TooltipProps, TooltipPositionType } from './tooltip.props';
import type { PopperOptions, Modifiers } from '../popper/popper.props';
import { Size } from './types';
import { Position, Strategy } from '../popper/types';
import Styled from './tooltip.styles';

import Popper from '../popper';

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

const Tooltip = intrinsicComponent<TooltipProps, HTMLSpanElement>(
  ({ children, position = Position.Top, popperOptions, ...rest }: TooltipProps, ref): JSX.Element => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    const tooltipRef = useRef(null);

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
      <Popper
        ref={tooltipRef}
        position={position}
        anchorEl={anchorEl}
        open={anchorEl ? open : false}
        popperOptions={popperOptions}
      >
        <Styled.TooltipContainer {...rest} open={open}>
          <ArrowTick
            type={getArrowTypeByPosition(position)}
            IconProps={{ viewBox: '0 0 8 8', width: 10, height: 10 }}
          />
          <Styled.Tooltip>{rest.title}</Styled.Tooltip>
        </Styled.TooltipContainer>
      </Popper>
    );

    return (
      <>
        {React.cloneElement(children, {
          ref,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
        })}
        {render()}
      </>
    );
  }
);

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
    modifiers: PT.arrayOf(
      PT.shape({
        data: PT.object,
        effect: PT.func,
        enabled: PT.bool,
        fn: PT.func,
        name: PT.any.isRequired,
        options: PT.object,
        phase: PT.oneOf([
          'afterMain',
          'afterRead',
          'afterWrite',
          'beforeMain',
          'beforeRead',
          'beforeWrite',
          'main',
          'read',
          'write',
        ]),
        requires: PT.arrayOf(PT.string),
        requiresIfExists: PT.arrayOf(PT.string),
      })
    ) as Validator<Modifiers>,
    onFirstUpdate: PT.func,
    placement: PT.oneOf(objectValues(Position)),
    strategy: PT.oneOf(objectValues(Strategy)),
  }) as Validator<PopperOptions>,
};

export default Tooltip;
