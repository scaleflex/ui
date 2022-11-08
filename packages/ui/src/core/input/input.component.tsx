import React, { useState, useRef, useEffect } from 'react';
import PT from 'prop-types';
import CopyOutline from '@scaleflex/icons/copy-outline';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { InputProps, InputSizeType } from './input.props';
import { InputSize } from '../../utils/types';
import { handleCopyIcon } from './input.utils';
import Styled from './input.styles';

const getIconSize = (
  sizeName: InputSizeType | undefined,
  isSearchInput: boolean | undefined,
  iconType: string
): number => {
  switch (sizeName) {
    case InputSize.Md:
      return isSearchInput ? (iconType === 'start' ? 18 : 14) : 16;

    case InputSize.Sm:
    default:
      return isSearchInput ? (iconType === 'start' ? 16 : 11) : 14;
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
      size = InputSize.Md,
      className,
      style,
      fullWidth,
      isSearchInput,
      readOnly,
      disabled,
      focusOnMount = false,
      focusOnClick = true,
      error,
      // TODO: refactor how implement tags in input
      // renderTags,
      ...rest
    }: InputProps,
    ref
  ): JSX.Element => {
    const [isHovering, setIsHovering] = useState(false);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const placeholder = rest.value ? '' : rest.placeholder;

    const handleFocus = (): void => {
      if (disabled) return;

      inputRef.current?.focus();
    };

    useEffect(() => {
      if (focusOnMount) {
        handleFocus();
      }
    }, []);

    const handleEntering = (): void => {
      setTimeout(() => {
        setIsHovering(true);
      }, 150);
    };

    const handleLeaving = (): void => {
      setTimeout(() => {
        setIsHovering(false);
      }, 200);
    };

    const handleIconClick = (event: any, type: string): void => {
      if (disabled) return;

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
          iconType={type}
        >
          {typeof _icon === 'function' ? _icon({ size: getIconSize(size, isSearchInput, type) }) : _icon}
        </Styled.Icon>
      ) : undefined;

    const renderClearIcon = (icon: React.ReactNode): JSX.Element | undefined =>
      disabled || readOnly || !icon ? undefined : (
        <Styled.ClearIcon onClick={(event) => handleIconClick(event, 'clear')} isSearchInput={isSearchInput}>
          {typeof icon === 'function' ? icon({ size: getIconSize(size, isSearchInput, 'clear') }) : icon}
        </Styled.ClearIcon>
      );

    const renderCopyIcon = (icon: React.ReactNode): JSX.Element | undefined =>
      isHovering && readOnly ? (
        <Styled.CopyIcon onClick={() => handleCopyIcon(rest.value)}>{icon}</Styled.CopyIcon>
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
      <Styled.Base size={size} {...rest} placeholder={placeholder} ref={inputRef} readOnly={Boolean(readOnly)} />
      // );
    );

    return (
      <Styled.Input
        onClick={focusOnClick ? handleFocus : undefined}
        ref={ref}
        size={size}
        onMouseEnter={handleEntering}
        onMouseLeave={handleLeaving}
        className={className}
        style={style}
        readOnly={readOnly}
        disabled={disabled}
        fullWidth={Boolean(fullWidth)}
        error={error}
        isSearchInput={isSearchInput}
      >
        {renderIcon(iconStart, 'start')}
        {renderField()}
        {renderClearIcon(clearIcon)}
        {renderCopyIcon(<CopyOutline size={getIconSize(size, isSearchInput, 'copy')} />)}
        {renderIcon(iconEnd, 'end')}
        {children && <>{children}</>}
      </Styled.Input>
    );
  }
);

export const defaultProps = {
  size: InputSize.Md,
  error: false,
  fullWidth: false,
  readOnly: false,
  disabled: false,
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
  disabled: PT.bool,
  iconClickStart: PT.func,
  iconClickEnd: PT.func,
  clearIconClick: PT.func,
  focusOnMount: PT.bool,
  focusOnClick: PT.bool,
  /// / TODO: refactor how implement tags in input
  // renderTags: PT.node,
};

Input.propTypes = propTypes;

export default Input;
