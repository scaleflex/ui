import React from 'react';
import PT from 'prop-types';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import { TippyTooltipProps } from './tippy-tooltip.props';
import { Position, Size } from './types';
import Styled from './tippy-tooltip.styles';

const TippyTooltip = intrinsicComponent<TippyTooltipProps, HTMLSpanElement>(
  ({
    children,
    arrow = true,
    warning,
    enableHover,
    enterDelay = 200,
    leaveDelay = 200,
    shiftXDirection = 0,
    shiftYDirection = 10,
    title,
    position = Position.Top,
    ...rest
  }: TippyTooltipProps): JSX.Element => {
    const renderTooltipContent = (): JSX.Element => <Styled.TooltipText warning={warning}>{title}</Styled.TooltipText>;

    return (
      <Styled.TippyTooltip
        placement={position}
        content={renderTooltipContent()}
        interactive={enableHover}
        arrow={arrow}
        delay={[enterDelay, leaveDelay]}
        warning={warning}
        animation="scale"
        visible
        offset={[shiftXDirection, shiftYDirection]}
        {...rest}
      >
        {children}
      </Styled.TippyTooltip>
    );
  }
);

TippyTooltip.defaultProps = {
  position: Position.Top,
  size: Size.Sm,
  arrow: true,
  warning: false,
  enterDelay: 200,
  leaveDelay: 200,
  shiftXDirection: 0,
  shiftYDirection: 10,
};

TippyTooltip.propTypes = {
  title: PT.node,
  size: PT.oneOf(objectValues(Size)),
  children: PT.element,
  arrow: PT.bool,
  warning: PT.bool,
  enterDelay: PT.number,
  leaveDelay: PT.number,
  shiftXDirection: PT.number,
  shiftYDirection: PT.number,
  enableHover: PT.bool,
  position: PT.oneOf(objectValues(Position)),
};

export default TippyTooltip;
