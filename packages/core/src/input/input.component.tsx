import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '@sfx-ui/utils/functions';
import type { InputProps, InputPropsSize } from './input.props';
import { Size } from './types';
import Styled from './input.styles';

const getIconSize = (sizeName: InputPropsSize | undefined): number => {
  switch (sizeName) {
    case Size.Md:
      return 13;

    case Size.Sm:
    default:
      return 11;
  }
};

const Input = intrinsicComponent<InputProps, HTMLInputElement>((
  {
    children, iconStart, iconEnd, error, size, ...rest
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
): JSX.Element => {
  const renderIcon = (_icon): JSX.Element | undefined => (
    _icon
      ? (
        <Styled.Icon>
          {
            typeof _icon === 'function'
              ? _icon({ size: getIconSize(size) })
              : _icon
          }
        </Styled.Icon>
      )
      : undefined
  );

  return (
    <Styled.Input
      error={error}
      size={size}
    >
      {renderIcon(iconStart)}
      <Styled.Base ref={ref} {...rest} />
      {renderIcon(iconEnd)}
    </Styled.Input>
  );
});

export const defaultProps = {
  size: Size.Md,
  error: false,
};

Input.defaultProps = defaultProps;

export const propTypes = {
  size: PT.oneOf(objectValues(Size)),
  iconStart: PT.oneOfType([PT.node, PT.func]),
  iconEnd: PT.oneOfType([PT.node, PT.func]),
  error: PT.bool,
};

Input.propTypes = propTypes;

export default Input;
