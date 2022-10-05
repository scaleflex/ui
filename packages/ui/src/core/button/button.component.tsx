import React from 'react';
import PT from 'prop-types';
import SpinnerIcon from '@scaleflex/icons/spinner';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import Badge from '../badge';
import type { ButtonProps } from './button.props';
import { ButtonSize, ButtonColor } from '../../utils/types';
import { getIconSize } from './button.utils';
import Styled from './button.styles';

const Button = intrinsicComponent<ButtonProps, HTMLButtonElement>(
  ({ children, badge, color, size, startIcon, endIcon, loading, disabled, ...rest }: ButtonProps, ref): JSX.Element => {

    return(
      <Styled.Button {...rest} disabled={loading || disabled} color={color} size={size} ref={ref}>
        {startIcon && (
          <Styled.StartIcon $loading={loading}>
            {(typeof startIcon === 'function') ? (
              loading ? (
                <SpinnerIcon size={getIconSize(size)} />
              ) : (
                startIcon({ size: getIconSize(size) })
              )
            ) : // eslint-disable-next-line unicorn/no-nested-ternary
            loading ? (
              <SpinnerIcon size={getIconSize(size)} />
            ) : (
              startIcon
            )}
          </Styled.StartIcon>
        )}

        {loading && !startIcon && (
          <Styled.StartIcon $loading={loading}>
            <SpinnerIcon size={getIconSize(size)} />
          </Styled.StartIcon>
        )}

        <Styled.Label>{children}</Styled.Label>

        {endIcon && (
          <Styled.EndIcon>
            {(typeof endIcon === 'function') ? endIcon({ size: getIconSize(size) }) : endIcon}
          </Styled.EndIcon>
        )}

        {badge && (
          <Styled.Badge>
            <Badge
              inline
              size={14}
              padding="0 1px"
              badgeContent={badge}
              color={color === ButtonColor.Primary ? 'white' : 'secondary'}
            />
          </Styled.Badge>
        )}
      </Styled.Button>
    );
  }
);

Button.defaultProps = {
  size: ButtonSize.Md,
  color: ButtonColor.Secondary,
};

Button.propTypes = {
  size: PT.oneOf(objectValues(ButtonSize)),
  color: PT.oneOf(objectValues(ButtonColor)),
  startIcon: PT.oneOfType([PT.node, PT.func]),
  endIcon: PT.oneOfType([PT.node, PT.func]),
  badge: PT.node,
  loading: PT.bool,
  disabled: PT.bool,
};

export default Button;
