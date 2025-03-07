import React, { ReactNode, useState, useRef } from 'react';
import { IconProps } from '@scaleflex/icons/icon.props';

import type { LabelProps } from './label.props';
import Styled from './label.styles';

const Label = ({
  children,
  iconStart,
  iconEnd,
  error = false,
  disabled,
  size,
  ref,
  ...rest
}: LabelProps): JSX.Element => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [isEllipsisActive, setIsEllipsisActive] = useState(false);
  const renderIcon = (icon: React.ReactNode | ((props: IconProps) => React.ReactNode), end: boolean): ReactNode => (
    <Styled.Icon $end={end}>{typeof icon === 'function' ? icon({ size: size === 'md' ? 14 : 12 }) : icon}</Styled.Icon>
  );

  const getTextTooltip = (): string | undefined => {
    if (typeof children === 'string' && isEllipsisActive) {
      return children;
    }
  };

  const handleTextTooltip = (): void => {
    if (textRef.current !== null && textRef.current) {
      setIsEllipsisActive(textRef?.current?.offsetWidth < textRef?.current?.scrollWidth);
    }
  };

  return (
    <Styled.Label ref={ref} $error={error} disabled={disabled} size={size} {...rest}>
      {iconStart && renderIcon(iconStart, false)}
      <Styled.Text title={getTextTooltip()} onMouseOver={handleTextTooltip} ref={textRef}>
        {children}
      </Styled.Text>
      {iconEnd && renderIcon(iconEnd, true)}
    </Styled.Label>
  );
};

export default Label;
