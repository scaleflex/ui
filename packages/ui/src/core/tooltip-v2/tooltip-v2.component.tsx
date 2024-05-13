import React from 'react';
import PT from 'prop-types';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import { TooltipV2Props } from './tooltip-v2.props';
import { Position, Size } from './types';
import Styled from './tooltip-v2.styles';

const TooltipV2 = intrinsicComponent<TooltipV2Props, HTMLSpanElement>(
  (
    {
      children,
      arrow = true,
      warning = false,
      enableHover = true,
      enterDelay = 0,
      leaveDelay = 0,
      offsetX = 0,
      offsetY = 10,
      title,
      position = Position.Top,
      info = false,
      size = Size.Sm,
      ...rest
    }: TooltipV2Props,
    ref
  ): JSX.Element => {
    const renderTooltipContent = (): JSX.Element => (
      <Styled.TooltipText $info={info} $warning={warning}>
        {title}
      </Styled.TooltipText>
    );

    return (
      <Styled.TooltipV2
        ref={ref}
        placement={position}
        content={renderTooltipContent()}
        interactive={enableHover}
        arrow={arrow}
        delay={[enterDelay, leaveDelay]}
        $info={info}
        $warning={warning}
        $size={size || Size.Sm}
        animation="scale"
        offset={[offsetX, offsetY]}
        appendTo={document.body}
        {...rest}
      >
        {children}
      </Styled.TooltipV2>
    );
  }
);

TooltipV2.propTypes = {
  title: PT.node.isRequired,
  size: PT.oneOf(objectValues(Size)),
  children: PT.element.isRequired,
  arrow: PT.bool,
  warning: PT.bool,
  info: PT.bool,
  enterDelay: PT.number,
  leaveDelay: PT.number,
  offsetX: PT.number,
  offsetY: PT.number,
  enableHover: PT.bool,
  position: PT.oneOf(objectValues(Position)),
};

export default TooltipV2;
