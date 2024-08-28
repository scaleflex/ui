import React, { useState, useRef, useEffect } from 'react';
import CopyOutline from '@scaleflex/icons/copy-outline';
import EyeOpen from '@scaleflex/icons/eye-open';
import EyeClosed from '@scaleflex/icons/eye-closed';
import Success from '@scaleflex/icons/success';

import { intrinsicComponent } from '../../utils/functions';
import type { IconFuncType, InputProps, InputSizeType } from './input.props';
import { InputSize } from '../../utils/types';
import { handleCopyIcon } from './input.utils';
import { Type } from './types';
import Styled from './input.styles';

const getIconSize = (sizeName: InputSizeType | undefined, iconType: string): number => {
  switch (sizeName) {
    case InputSize.Md:
      return iconType === 'start' ? 15 : 14;

    case InputSize.Sm:
    default:
      return iconType === 'start' ? 13 : 10;
  }
};

const getPasswordIconSize = (sizeName: InputSizeType | undefined): number => {
  switch (sizeName) {
    case InputSize.Md:
      return 16;

    case InputSize.Sm:
    default:
      return 14;
  }
};

const Input = intrinsicComponent<InputProps, HTMLInputElement>(
  (
    {
      inputType,
      children,
      iconStart,
      iconEnd,
      iconChange,
      extraContent,
      clearIcon,
      iconClickStart,
      iconClickEnd,
      clearIconClick,
      size = InputSize.Md,
      className,
      style,
      fullWidth = false,
      readOnly = false,
      disabled = false,
      hideCopyIcon = false,
      focusOnMount = false,
      focusOnClick = true,
      isEllipsis = false,
      copyTextMessage = 'Copied!',
      copySuccessIcon = <Success size={16} />,
      error = false,
      renderTags,
      showPlaceholder,
      InputProps: InputPropsData,
      ...rest
    }: InputProps,
    ref
  ): JSX.Element => {
    const [isHovering, setIsHovering] = useState(false);
    const [showCopyMessage, setShowCopyMessage] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const isSelectedItems = rest.selectedItems?.length;
    const placeholder = rest.value || isSelectedItems ? '' : rest.placeholder;
    const showCopyIcon = isHovering && readOnly && rest.value.length > 0 && !hideCopyIcon;

    const handleFocus = (): void => {
      if (disabled || readOnly) return;

      showPlaceholder?.(false);
      inputRef.current?.focus();
    };

    useEffect(() => {
      if (focusOnMount) {
        handleFocus();
      }
    }, []);

    useEffect(() => {
      setTimeout(() => setShowCopyMessage(false), 2000);
    }, [showCopyMessage]);

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
      if (disabled || readOnly) return;

      if (focusOnClick) {
        handleFocus();
      }
      if (type === 'start') {
        if (iconClickStart) {
          iconClickStart(event);
        }
      } else if (type === 'end') {
        if (iconClickEnd) {
          iconClickEnd(event);
        }
      } else if (clearIconClick) {
        clearIconClick(event);
      }
    };

    const renderIcon = (_icon: React.ReactNode | IconFuncType, type: string): JSX.Element | undefined =>
      _icon ? (
        <Styled.Icon
          onClick={(event) => handleIconClick(event, type)}
          iconClickStart={iconClickStart}
          iconClickEnd={iconClickEnd}
          $iconType={type}
          disabled={disabled}
          readOnly={readOnly}
        >
          {typeof _icon === 'function' ? _icon({ size: getIconSize(size, type) }) : _icon}
        </Styled.Icon>
      ) : undefined;

    const renderClearIcon = (): JSX.Element | undefined =>
      disabled || readOnly || !clearIcon ? undefined : (
        <Styled.ClearIcon onClick={(event: any) => handleIconClick(event, 'clear')}>
          {typeof clearIcon === 'function' ? clearIcon({ size: getIconSize(size, 'clear') }) : clearIcon}
        </Styled.ClearIcon>
      );

    const renderCopyIcon = (icon: React.ReactNode): JSX.Element | undefined =>
      showCopyIcon ? (
        <Styled.CopyIcon onClick={() => handleCopyIcon(rest.value, setShowCopyMessage)}>{icon}</Styled.CopyIcon>
      ) : undefined;

    const toggleVisibility = (event: React.MouseEvent<HTMLDivElement>): void => {
      event.stopPropagation();
      setIsVisible(!isVisible);
    };

    const renderPasswordIcon = (): JSX.Element | undefined => (
      <Styled.PasswordIcon onClick={(event: React.MouseEvent<HTMLDivElement>) => toggleVisibility(event)}>
        {isVisible ? <EyeClosed size={getPasswordIconSize(size)} /> : <EyeOpen size={getPasswordIconSize(size)} />}
      </Styled.PasswordIcon>
    );

    const getInputType = (): string => {
      if (!inputType && rest?.type) {
        return rest?.type;
      }

      if (inputType === Type.Password && !isVisible) {
        return Type.Password;
      }

      return Type.Text;
    };

    const renderField = (): JSX.Element | undefined => (
      <Styled.FieldWrapper $isSelectedItems={Boolean(isSelectedItems)}>
        {renderTags && renderTags()}

        <Styled.Base
          {...rest}
          placeholder={placeholder}
          ref={inputRef}
          readOnly={Boolean(readOnly)}
          type={getInputType()}
          $isEllipsis={isEllipsis}
        />
      </Styled.FieldWrapper>
    );

    const renderCopyText = (): JSX.Element | undefined => {
      return (
        <Styled.NotificationBox size={size}>
          <Styled.NotificationIcon>{copySuccessIcon}</Styled.NotificationIcon>
          <Styled.NotificationText>{copyTextMessage}</Styled.NotificationText>
        </Styled.NotificationBox>
      );
    };

    const renderExtraContent = (extraContent: React.ReactNode): JSX.Element | undefined => {
      if (!extraContent) return;
      return <Styled.ExtraContent>{extraContent}</Styled.ExtraContent>;
    };

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
        $fullWidth={Boolean(fullWidth)}
        $error={error}
        clearIcon={clearIcon}
        isHovering={rest.isHovering}
        $isSelectedItems={Boolean(isSelectedItems || extraContent)}
        {...(InputPropsData || {})}
      >
        <Styled.InputContent>
          {renderIcon(iconStart, 'start')}
          {renderField()}
          {renderCopyIcon(<CopyOutline size={getIconSize(size, 'copy')} />)}
          {showCopyMessage && renderCopyText()}
          {renderClearIcon()}
          {inputType === Type.Password && renderPasswordIcon()}
          {renderIcon(iconEnd, 'end')}
          {renderIcon(iconChange, '')}
          {children && <>{children}</>}
        </Styled.InputContent>

        {renderExtraContent(extraContent)}
      </Styled.Input>
    );
  }
);

export default Input;
