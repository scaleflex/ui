import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '@sfx-ui/utils/functions';
import type { InputProps } from './input.props';
import { Size } from './types';
import Styled from './input.styles';

const Input = intrinsicComponent<InputProps, HTMLInputElement>((
  {
    children, icon, error, size, ...rest
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
): JSX.Element => (
  <Styled.Input
    error={error}
    size={size}
  >
    <Styled.Base ref={ref} {...rest} />

    {icon && (
      <Styled.Icon>
        {
          typeof icon === 'function'
            ? icon()
            : icon
        }
      </Styled.Icon>
    )}
  </Styled.Input>
));

Input.defaultProps = {
  size: Size.Md,
  error: false,
};

Input.propTypes = {
  size: PT.oneOf(objectValues(Size)),
  icon: PT.oneOfType([PT.node, PT.func]),
  error: PT.bool,
};

export default Input;
