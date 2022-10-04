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
    const icon = startIcon || endIcon;

    return(
      <Styled.Button {...rest} endIcon={Boolean(endIcon)} disabled={loading || disabled} color={color} size={size} ref={ref}>
        {icon && (
          <Styled.Icon $loading={loading} endIcon={Boolean(endIcon)}>
            {(typeof icon === 'function') ? (
              loading ? (
                <SpinnerIcon size={getIconSize(size)} />
              ) : (
                icon({ size: getIconSize(size) })
              )
            ) : // eslint-disable-next-line unicorn/no-nested-ternary
            loading ? (
              <SpinnerIcon size={getIconSize(size)} />
            ) : (
              icon
            )}
          </Styled.Icon>
        )}

        {loading && !icon && (
          <Styled.Icon $loading={loading}>
            <SpinnerIcon size={getIconSize(size)} />
          </Styled.Icon>
        )}

        <Styled.Label>{children}</Styled.Label>

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
