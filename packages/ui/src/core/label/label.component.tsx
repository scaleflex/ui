import React, { ReactNode, useState, useRef } from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { LabelProps } from './label.props';
import { Type } from './types';
import Styled from './label.styles';

const Label = intrinsicComponent<LabelProps, HTMLLabelElement>(
  ({ children, iconStart, iconEnd, error, type, ...rest }: LabelProps, ref): JSX.Element => {
    const textRef = useRef<HTMLSpanElement | null>(null);
    const [isEllipsisActive, setIsEllipsisActive] = useState(false);
    const renderIcon = (icon: ReactNode, end: boolean): ReactNode => (
      <Styled.Icon error={Boolean(error)} $end={end}>
        {typeof icon === 'function' ? icon() : icon}
      </Styled.Icon>
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
      <Styled.Label ref={ref} error={error} type={type} {...rest}>
        {iconStart && renderIcon(iconStart, false)}
        <Styled.Text title={getTextTooltip()} onMouseOver={handleTextTooltip} ref={textRef}>
          {children}
        </Styled.Text>
        {iconEnd && renderIcon(iconEnd, true)}
        {/* TODO Select for type: localization */}
      </Styled.Label>
    );
  }
);

Label.defaultProps = {
  type: Type.Default,
  error: false,
};

export const propTypes = {
  type: PT.oneOf(objectValues(Type)),
  iconStart: PT.oneOfType([PT.node, PT.func]),
  iconEnd: PT.oneOfType([PT.node, PT.func]),
  error: PT.bool,
  htmlFor: PT.string,
};

Label.propTypes = propTypes;

export default Label;
