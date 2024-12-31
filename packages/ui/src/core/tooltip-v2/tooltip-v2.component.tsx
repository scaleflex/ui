import React from 'react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import { intrinsicComponent } from '../../utils/functions';
import { TooltipV2Props } from './tooltip-v2.props';
import { Position, Size, Variant } from './types';
import Styled from './tooltip-v2.styles';

const TooltipV2 = intrinsicComponent<TooltipV2Props, HTMLSpanElement>(
  (
    {
      children,
      arrow = true,
      warning = false,
      enableHover = true,
      hide = false,
      enterDelay = 0,
      leaveDelay = 0,
      offsetX = 0,
      offsetY = 10,
      title,
      position = Position.Top,
      info = false,
      size = Size.Sm,
      variant = Variant.Default,
      ...rest
    }: TooltipV2Props,
    ref
  ): JSX.Element => {
    if (hide) return children;

    // Check for multiple children
    const childArray = React.Children.toArray(children).filter((child): child is React.ReactElement =>
      React.isValidElement(child)
    );

    if (childArray.length > 1) {
      console.warn('TooltipV2 only supports a single child.');
    }

    const firstChild = childArray[0];
    return (
      <Styled.TooltipV2
        ref={ref}
        placement={position}
        content={<Styled.TooltipText>{title}</Styled.TooltipText>}
        interactive={enableHover}
        arrow={arrow}
        delay={[enterDelay, leaveDelay]}
        $variant={(warning && Variant.Warning) || (info && Variant.Info) || variant}
        $size={size || Size.Sm}
        animation="scale"
        offset={[offsetX, offsetY]}
        appendTo={document.body}
        {...rest}
      >
        {firstChild}
      </Styled.TooltipV2>
    );
  }
);

export default TooltipV2;
