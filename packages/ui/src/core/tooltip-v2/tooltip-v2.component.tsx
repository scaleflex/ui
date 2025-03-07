import React from 'react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import { TooltipV2Props } from './tooltip-v2.props';
import { Position, Size, Variant } from './types';
import Styled from './tooltip-v2.styles';

const TooltipV2 = ({
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
  ref,
  ...rest
}: TooltipV2Props): JSX.Element | null => {
  if (hide) return children;

  const childrenArray = React.Children.toArray(children);

  if (childrenArray.length > 1) {
    console.error('TooltipV2 only supports a single child.');
    return null;
  }

  if (!React.isValidElement(childrenArray[0])) {
    console.error('TooltipV2 only supports valid React elements.');
    return null;
  }

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
      {children}
    </Styled.TooltipV2>
  );
};

export default TooltipV2;
