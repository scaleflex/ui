import React, { useRef, useEffect } from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { InputProps, InputSizeType } from './input.props';
import { InputBackgroundColor, InputSize } from '../../utils/types';
import Styled from './input.styles';

const getIconSize = (sizeName: InputSizeType | undefined): number => {
  switch (sizeName) {
    case InputSize.Md:
      return 16;

    case InputSize.Sm:
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
      clearIcon,
      iconClickStart,
      iconClickEnd,
      clearIconClick,
      size,
      className,
      style,
      fullWidth,
      readOnly,
      background = 'primary',
      focusOnMount = false,
      focusOnClick = true,
      // TODO: refactor how implement tags in input
      // renderTags,
      ...rest
    }: InputProps,
    ref
  ): JSX.Element => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const placeholder = rest.value ? '' : rest.placeholder;

    const handleFocus = (): void => {
      inputRef.current?.focus();
    };

    useEffect(() => {
      if (focusOnMount) {
        handleFocus();
      }
    }, []);

    const handleIconClick = (event: any, type: string): void => {
      if (focusOnClick) {
        handleFocus();
      }
      if (type === 'start') {
        if (iconClickStart) {
          iconClickStart();
        }
      } else if (type === 'end') {
        if (iconClickEnd) {
          iconClickEnd();
        }
      } else if (clearIconClick) {
        clearIconClick(event);
      }
    };

    const renderIcon = (_icon: React.ReactNode, type: string): JSX.Element | undefined =>
      _icon ? (
        <Styled.Icon
          onClick={(event) => handleIconClick(event, type)}
          iconClickStart={iconClickStart}
          iconClickEnd={iconClickEnd}
          clearIconClick={clearIconClick}
        >
          {typeof _icon === 'function' ? _icon({ size: getIconSize(size) }) : _icon}
        </Styled.Icon>
      ) : undefined;

    const renderField = (): JSX.Element | undefined => (
      // TODO: refactor how implement tags in input
      // return renderTags ? (
      //   <Styled.Container>
      //     <Styled.Tags>{renderTags}</Styled.Tags>
      //     <Styled.Base
      //       {...rest}
      //       placeholder={placeholder}
      //       ref={inputRef}
      //       renderTags={renderTags}
      //       readOnly={Boolean(readOnly)}
      //     />
      //   </Styled.Container>
      // ) : (
      <Styled.Base {...rest} placeholder={placeholder} ref={inputRef} readOnly={Boolean(readOnly)} />
      // );
    );

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
        {renderField()}
        {renderIcon(clearIcon, 'secondEnd')}
        {renderIcon(iconEnd, 'end')}
        {children && <>{children}</>}
      </Styled.Input>
    );
  }
);

export const defaultProps = {
  size: InputSize.Md,
  background: InputBackgroundColor.Primary,
  error: false,
  fullWidth: false,
  readOnly: false,
};

Input.defaultProps = defaultProps;

export const propTypes = {
  size: PT.oneOf(objectValues(InputSize)),
  iconStart: PT.oneOfType([PT.node, PT.func]),
  iconEnd: PT.oneOfType([PT.node, PT.func]),
  clearIcon: PT.node,
  error: PT.bool,
  fullWidth: PT.bool,
  value: PT.any,
  readOnly: PT.bool,
  iconClickStart: PT.func,
  iconClickEnd: PT.func,
  clearIconClick: PT.func,
  background: PT.oneOf(objectValues(InputBackgroundColor)),
  focusOnMount: PT.bool,
  focusOnClick: PT.bool,
  /// / TODO: refactor how implement tags in input
  // renderTags: PT.node,
};

Input.propTypes = propTypes;

export default Input;
