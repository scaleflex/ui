import React, { useState, useRef, useEffect } from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { TooltipProps } from './tooltip.props';
import { Size } from './types';
import { Position } from '../popper/types';
import Styled from './tooltip.styles';

import Popper from '../popper';

const Tooltip = intrinsicComponent<TooltipProps, HTMLSpanElement>(
  (
    {
      children,
      position = Position.Top,
      popperOptions,
      arrow = true,
      warning = false,
      enableUnderlayingEvent,
      popperWrapperStyles = {},
      enableHover,
      enterDelay = 0,
      leaveDelay = 0,
      stayOpen,
      title,
      tooltipProps,
      size = Size.Sm,
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

    const closeTooltip = (): void => {
      if (!stayOpen) {
        setAnchorEl(null);
      }
    };

    useEffect(() => {
      closeTooltip();
    }, [isHovering]);

    const handleMouseLeave = (event: any): void => {
      const { onMouseLeave } = children.props;

      if (enableHover) {
        setTimeout(() => {
          if (!isHovering) {
            closeTooltip();
          }
        }, 200);
      } else {
        setTimeout(() => {
          closeTooltip();
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
        setTimeout(() => {
          setIsHovering(false);
        }, leaveDelay);
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
          size={size}
          open={open}
          onMouseEnter={handleEnteringTooltip}
          onMouseLeave={handleLeavingTooltip}
        >
          <Styled.Tooltip warning={warning} {...tooltipProps}>
            {title}
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

export default Tooltip;
