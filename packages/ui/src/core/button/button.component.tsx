import React from 'react';
import SpinnerIcon from '@scaleflex/icons/spinner';
import TwoArrowsRight from '@scaleflex/icons/two-arrows-right';
import TwoArrowsLeft from '@scaleflex/icons/two-arrows-left';
import type { IconProps } from '@scaleflex/icons/icon.props';

import { intrinsicComponent } from '../../utils/functions';
import Badge from '../badge';
import type { ButtonProps } from './button.props';
// TODO: move both types inside buttons.props file instead having them inside utils
import { ButtonSize, ButtonColor } from '../../utils/types';
import { ButtonType, SideBarType } from './types';
import { getIconSize, getSideBarIconSize } from './button.utils';
import Styled from './button.styles';

const Button = intrinsicComponent<ButtonProps, HTMLButtonElement>(
  (
    {
      children,
      startIcon,
      endIcon,
      badge,
      color = ButtonColor.Primary,
      active = false,
      buttonType = ButtonType.Default,
      sideBarType = SideBarType.Left,
      size = ButtonSize.Md,
      loading = false,
      disabled = false,
      ...rest
    }: ButtonProps,
    ref
  ): JSX.Element => {
    const getSideBarArrows = (props: IconProps): JSX.Element | undefined => {
      switch (sideBarType) {
        case SideBarType.Right:
          return active ? <TwoArrowsLeft {...props} /> : <TwoArrowsRight {...props} />;
        case SideBarType.Left:
          return active ? <TwoArrowsRight {...props} /> : <TwoArrowsLeft {...props} />;
        default:
      }
    };

    const getSideBarSection = (): any => {
      const sideBarSection = [
        <Styled.SideArrows key="arrows" $sideBarType={sideBarType}>
          {getSideBarArrows({ size: getSideBarIconSize(size) })}
        </Styled.SideArrows>,
      ];

      const divider = <Styled.Divider key="divider" size={size} $sideBarType={sideBarType} />;

      if (sideBarType === SideBarType.Right) {
        sideBarSection.unshift(divider);
      } else {
        sideBarSection.push(divider);
      }
      return buttonType === ButtonType.Sidebar && sideBarSection;
    };

    return (
      <Styled.Button
        type="button"
        $buttonType={buttonType}
        {...rest}
        disabled={loading || disabled}
        color={color}
        active={active}
        size={size}
        ref={ref}
      >
        {sideBarType === SideBarType.Left && getSideBarSection()}

        <Styled.Wrapper>
          {startIcon && (
            <Styled.StartIcon $loading={loading} size={size}>
              {typeof startIcon === 'function' ? (
                loading ? (
                  <SpinnerIcon size={getIconSize(size)} />
                ) : (
                  startIcon({ size: getIconSize(size) })
                )
              ) : loading ? (
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
            <Styled.EndIcon size={size}>
              {typeof endIcon === 'function' ? endIcon({ size: getIconSize(size) }) : endIcon}
            </Styled.EndIcon>
          )}
        </Styled.Wrapper>

        {sideBarType === SideBarType.Right && getSideBarSection()}

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

export default Button;
