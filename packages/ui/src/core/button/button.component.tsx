import React from 'react';
import PT from 'prop-types';
import SpinnerIcon from '@scaleflex/icons/spinner';
import TwoArrowsRight from '@scaleflex/icons/two-arrows-right';
import TwoArrowsLeft from '@scaleflex/icons/two-arrows-left';
import type { IconProps } from '@scaleflex/icons/icon.props';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import Badge from '../badge';
import type { ButtonProps } from './button.props';
import { ButtonSize, ButtonColor } from '../../utils/types';
import { ButtonType, SideBar } from './types';
import { getIconSize, getSideBarIconSize } from './button.utils';
import Styled from './button.styles';

const Button = intrinsicComponent<ButtonProps, HTMLButtonElement>(
  (
    {
      children,
      startIcon,
      endIcon,
      badge,
      color,
      active,
      buttonType,
      sideBarType = SideBar.Left,
      size,
      loading,
      disabled,
      ...rest
    }: ButtonProps,
    ref
  ): JSX.Element => {
    const getSideBarArrows = (props: IconProps): JSX.Element | undefined => {
      switch (sideBarType) {
        case SideBar.Left:
          return active ? <TwoArrowsLeft {...props} /> : <TwoArrowsRight {...props} />;
        case SideBar.Right:
          return active ? <TwoArrowsRight {...props} /> : <TwoArrowsLeft {...props} />;
        default:
      }
    };

    const getSideBarSection = (): any => {
      const sideBarSection = [
        <Styled.SideArrows key="arrows" sideBarType={sideBarType}>
          {getSideBarArrows({ size: getSideBarIconSize(size) })}
        </Styled.SideArrows>,
      ];

      const divider = <Styled.Divider key="divider" size={size} sideBarType={sideBarType} />;

      if (sideBarType === SideBar.Right) {
        sideBarSection.unshift(divider);
      } else {
        sideBarSection.push(divider);
      }
      return buttonType === ButtonType.Sidebar && sideBarSection;
    };

    return (
      <Styled.Button
        type="button"
        buttonType={buttonType}
        {...rest}
        disabled={loading || disabled}
        sideBarType={sideBarType}
        color={color}
        active={active}
        size={size}
        ref={ref}
      >
        {sideBarType === SideBar.Left && getSideBarSection()}

        <Styled.Body>
          {startIcon && (
            <Styled.StartIcon $loading={loading}>
              {typeof startIcon === 'function' ? (
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
              {typeof endIcon === 'function' ? endIcon({ size: getIconSize(size) }) : endIcon}
            </Styled.EndIcon>
          )}
        </Styled.Body>

        {sideBarType === SideBar.Right && getSideBarSection()}

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
  buttonType: ButtonType.Default,
  active: false,
};

Button.propTypes = {
  size: PT.oneOf(objectValues(ButtonSize)),
  color: PT.oneOf(objectValues(ButtonColor)),
  buttonType: PT.oneOf(objectValues(ButtonType)),
  sideBarType: PT.oneOf(objectValues(SideBar)),
  startIcon: PT.oneOfType([PT.node, PT.func]),
  endIcon: PT.oneOfType([PT.node, PT.func]),
  badge: PT.node,
  active: PT.bool,
  loading: PT.bool,
  disabled: PT.bool,
};

export default Button;
