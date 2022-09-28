import React, { useState, useRef, useEffect } from 'react';

import PT, { Validator } from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { TooltipProps } from './tooltip.props';
import type { PopperOptions, Modifiers } from '../popper/popper.props';
import { Size } from './types';
import { Position, Strategy } from '../popper/types';
import Styled from './tooltip.styles';

import Popper from '../popper';

const Tooltip = intrinsicComponent<TooltipProps, HTMLSpanElement>(
  (
    {
      children,
      position = Position.Top,
      popperOptions,
      arrow = true,
      warning,
      enableUnderlayingEvent,
      popperWrapperStyles = {},
      enableHover,
      enterDelay,
      leaveDelay,
      ...rest
    }: TooltipProps,
    ref
  ): JSX.Element => {
    const [isHovering, setIsHovering] = useState(true);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const open = Boolean(anchorEl);

    const tooltipRef = useRef(null);

    const handleMouseEnter = (event: any): void => {
      const { onMouseEnter } = children.props;
      const { currentTarget } = event;

      setTimeout(() => {
        setAnchorEl(currentTarget);
      }, enterDelay);

      if (typeof onMouseEnter === 'function') {
        onMouseEnter(event);
      }
    };

    useEffect(() => {
      setAnchorEl(null);
    }, [isHovering]);

    const handleMouseLeave = (event: any): void => {
      const { onMouseLeave } = children.props;

      if (enableHover) {
        setTimeout(() => {
          if (!isHovering) {
            setAnchorEl(null);
          }
        }, 200);
      } else {
        setTimeout(() => {
          setAnchorEl(null);
        }, leaveDelay);
      }

      if (typeof onMouseLeave === 'function') {
        onMouseLeave(event);
      }
    };

    const handleEnteringTooltip = (): void => {
      if (enableHover) {
        setIsHovering(true);
      }
    };

    const handleLeavingTooltip = (): void => {
      if (enableHover) {
        setIsHovering(false);
      }
    };

    const render = (): JSX.Element => (
      <Popper
        ref={tooltipRef}
        position={position}
        anchorEl={anchorEl}
        warning={warning}
        open={anchorEl ? open : false}
        popperOptions={popperOptions}
        arrow={arrow}
        enableUnderlayingEvent={enableUnderlayingEvent}
        wrapperStyles={popperWrapperStyles}
      >
        <Styled.TooltipContainer
          {...rest}
          open={open}
          onMouseEnter={handleEnteringTooltip}
          onMouseLeave={handleLeavingTooltip}
        >
          <Styled.Tooltip warning={warning} {...rest}>
            {rest.title}
          </Styled.Tooltip>
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
  arrow: true,
  warning: false,
};

Tooltip.propTypes = {
  position: PT.oneOf(objectValues(Position)),
  size: PT.oneOf(objectValues(Size)),
  title: PT.node,
  children: PT.element,
  arrow: PT.bool,
  warning: PT.bool,
  enterDelay: PT.number,
  leaveDelay: PT.number,
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
  enableUnderlayingEvent: PT.bool,
  popperWrapperStyles: PT.object,
  enableHover: PT.bool,
};

export default Tooltip;
