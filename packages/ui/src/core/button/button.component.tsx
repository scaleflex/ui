import React from 'react';
import PT from 'prop-types';
import SpinnerIcon from '@scaleflex/icons/spinner';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import Badge from '../badge';
import type { ButtonProps } from './button.props';
import { ButtonSize, ButtonColor } from '../../utils/types';
import { ButtonTypes } from './types';
import type { IconProps } from '@scaleflex/icons/icon.props';
import { TwoArrowsRight } from '@scaleflex/icons/two-arrows-right';
import { TwoArrowsLeft } from '@scaleflex/icons/two-arrows-left';
import { getIconSize, getSlideIconSize } from './button.utils';
import Styled from './button.styles';

const Button = intrinsicComponent<ButtonProps, HTMLButtonElement>(
  ({
    children,
    icon,
    rightSlide,
    leftSlide,
    badge,
    color,
    active,
    ButtonType,
    size,
    loading,
    disabled,
    ...rest
  }: ButtonProps, ref): JSX.Element => {

    const slidebar = rightSlide || leftSlide;
    const getSlideIcon = (props: IconProps) => {
      if(active){
        if(rightSlide){
          return <TwoArrowsRight {...props} />;
        }
        if(leftSlide){
          return <TwoArrowsLeft {...props} />;
        }
      }
      else{
        if(rightSlide){
          return <TwoArrowsLeft {...props} />;
        }
        if(leftSlide){
          return <TwoArrowsRight {...props} />;
        }
      }
  };
  
    return (
      <Styled.Button
        type="button"
        ButtonType={ButtonType}
        {...rest}
        disabled={loading || disabled}
        leftSlide={Boolean(leftSlide)}
        color={color}
        active={active}
        size={size}
        ref={ref}
      >
        <Styled.Body>
          {icon && (
            <Styled.Icon $loading={loading}>
              {typeof icon === 'function' ? (
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
        </Styled.Body>

        {slidebar && (
          <Styled.Divider size={size} leftSlide={leftSlide} />
        )}

        {slidebar && (
          <Styled.Slidebar leftSlide={leftSlide}>
            {getSlideIcon({ size: getSlideIconSize(size) })}
          </Styled.Slidebar>
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
  ButtonType: ButtonTypes.Default,
  active: false,
};

Button.propTypes = {
  size: PT.oneOf(objectValues(ButtonSize)),
  color: PT.oneOf(objectValues(ButtonColor)),
  ButtonType: PT.oneOf(objectValues(ButtonTypes)),
  icon: PT.oneOfType([PT.node, PT.func]),
  badge: PT.node,
  active: PT.bool,
  loading: PT.bool,
  disabled: PT.bool,
};

export default Button;
