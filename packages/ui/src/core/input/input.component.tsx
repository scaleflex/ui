/* eslint-disable sonarjs/cognitive-complexity */
import React, { useRef, useEffect } from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { InputProps, InputSizeType } from './input.props';
import { Size, Background } from './types';
import Styled from './input.styles';

const getIconSize = (sizeName: InputSizeType | undefined): number => {
  switch (sizeName) {
    case Size.Md:
      return 16;

    case Size.Sm:
    default:
      return 14;
  }
};

const Input = intrinsicComponent<InputProps, HTMLDivElement>(
  (
    {
      children,
      iconStart,
      iconEnd,
      iconClickStart,
      iconClickEnd,
      size,
      className,
      style,
      fullWidth,
      readOnly,
      background = 'primary',
      focusOnMount = false,
      focusOnClick = true,
      ...rest
    }: InputProps,
    ref
  ): JSX.Element => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFocus = (): void => {
      inputRef.current?.focus();
    };

    useEffect(() => {
      if (focusOnMount) {
        handleFocus();
      }
    }, []);

    const handleIconClick = (type: string): void => {
      if (focusOnClick) {
        handleFocus();
      }
      if (type === 'start') {
        if (iconClickStart) {
          iconClickStart();
        }
      } else if (iconClickEnd) {
        iconClickEnd();
      }
    };

    const renderIcon = (_icon: React.ReactNode, type: string): JSX.Element | undefined =>
      _icon ? (
        <Styled.Icon onClick={() => handleIconClick(type)} iconClickStart={iconClickStart} iconClickEnd={iconClickEnd}>
          {typeof _icon === 'function' ? _icon({ size: getIconSize(size) }) : _icon}
        </Styled.Icon>
      ) : undefined;

    return (
      <Styled.Input
        onClick={focusOnClick ? handleFocus : undefined}
        ref={ref}
        size={size}
        className={className}
        style={style}
        fullWidth={Boolean(fullWidth)}
        background={background}
      >
        {renderIcon(iconStart, 'start')}
        <Styled.Base {...rest} ref={inputRef} readOnly={Boolean(readOnly)} />
        {renderIcon(iconEnd, 'end')}
        {children && <>{children}</>}
      </Styled.Input>
    );
  }
);

export const defaultProps = {
  size: Size.Md,
  background: Background.Primary,
  error: false,
  fullWidth: false,
  readOnly: false,
};

Input.defaultProps = defaultProps;

export const propTypes = {
  size: PT.oneOf(objectValues(Size)),
  iconStart: PT.oneOfType([PT.node, PT.func]),
  iconEnd: PT.oneOfType([PT.node, PT.func]),
  error: PT.bool,
  fullWidth: PT.bool,
  // eslint-disable-next-line react/forbid-prop-types
  value: PT.any,
  readOnly: PT.bool,
  iconClickStart: PT.func,
  iconClickEnd: PT.func,
  background: PT.oneOf(objectValues(Background)),
  focusOnMount: PT.bool,
  focusOnClick: PT.bool,
};

Input.propTypes = propTypes;

export default Input;
