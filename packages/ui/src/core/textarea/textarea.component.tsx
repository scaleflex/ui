import React, { useState, useEffect, useRef, SyntheticEvent, ChangeEvent } from 'react';
import PT from 'prop-types';
import CopyOutline from '@scaleflex/icons/copy-outline';

import { onClickByMouseDown } from '../../utils/functions/on-click-by-mouse-down';
import { intrinsicComponent, objectValues, useForkRef } from '../../utils/functions';
import type { TextareaProps } from './textarea.props';
import { InputSize } from '../../utils/types';
import { handleCopyIcon } from '../input/input.utils';
import { getIconSize } from '../button/button.utils';
import InputStyled from '../input/input.styles';
import { Size } from '../menu-item/types';
import Button from '../button';
import Styled from './textarea.styles';

const Textarea = intrinsicComponent<TextareaProps, HTMLTextAreaElement>(
  (
    {
      fullWidth,
      size,
      value,
      readOnly,
      disabled,
      error,
      cols,
      rows,
      copyTextMessage = '',
      copySuccessIcon,
      showActionButton = false,
      showClearButton = false,
      showCopyIcon = false,
      disableActionButton = false,
      isActionButtonLoading = false,
      actionButtonLabel,
      clearAllButtonLabel,
      onClickActionButton,
      onClear,
      onChange,
      ...rest
    }: TextareaProps,
    ref
  ): JSX.Element => {
    const inputRef = useRef<HTMLTextAreaElement | null>(null);
    const textareaRef = useForkRef(inputRef, ref);

    const [isHovering, setIsHovering] = useState(false);
    const [overflowStyles, setOverflowStyles] = useState({});
    const [showCopyMessage, setShowCopyMessage] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const actionButtonHandler = (event: SyntheticEvent): void => {
      if (onClickActionButton) {
        onClickActionButton(event);
      }
    };

    const clearAllHandler = (event: SyntheticEvent): void => {
      setInputValue('');

      if (onClear) {
        onClear(event);
      }
    };

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>): void => {
      setInputValue(event.target.value);

      if (onChange) {
        onChange(event);
      }
    };

    const copyIconHandler = (): void => {
      if (showCopyIcon) {
        handleCopyIcon(inputValue, setShowCopyMessage);
      }
    };

    useEffect(() => {
      const { current } = inputRef;

      if (current && current.scrollHeight > current.clientHeight) {
        setOverflowStyles({ paddingRight: size === Size.Md ? '4px' : '0px' });
      }
    }, [inputRef.current?.scrollHeight, size]);

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

    const renderCopyText = (): JSX.Element | undefined => {
      return (
        <InputStyled.NotificationBox size={size} isTextarea>
          <InputStyled.NotificationIcon>{copySuccessIcon}</InputStyled.NotificationIcon>
          <InputStyled.NotificationText>{copyTextMessage}</InputStyled.NotificationText>
        </InputStyled.NotificationBox>
      );
    };

    return (
      <Styled.Textarea
        size={size}
        value={inputValue}
        onMouseEnter={handleEntering}
        onMouseLeave={handleLeaving}
        readOnly={readOnly}
        disabled={disabled}
        fullWidth={Boolean(fullWidth)}
        error={error}
        autoSize={Boolean(cols) || Boolean(rows)}
      >
        <Styled.Base
          {...rest}
          value={inputValue}
          ref={textareaRef}
          size={size}
          onChange={onChangeHandler}
          readOnly={readOnly}
          disabled={disabled}
          style={{ ...overflowStyles }}
        />

        {(showActionButton || showClearButton || showCopyIcon) && (
          <Styled.ActionsButtonsWrapper>
            {showActionButton && (
              <Button
                color="link-primary"
                size="sm"
                disabled={disableActionButton}
                loading={isActionButtonLoading}
                onMouseDown={(event) => onClickByMouseDown(event, actionButtonHandler)}
              >
                {actionButtonLabel}
              </Button>
            )}

            {showClearButton && (
              <Button
                color="link-secondary"
                size="sm"
                onMouseDown={(event) => onClickByMouseDown(event, clearAllHandler)}
              >
                {clearAllButtonLabel}
              </Button>
            )}

            {showCopyIcon && (
              <Styled.CopyIcon
                showCopyIcon={isHovering && inputValue.length > 0}
                size={size}
                onMouseDown={(event) => onClickByMouseDown(event, copyIconHandler)}
              >
                <CopyOutline size={getIconSize(size)} />
                {showCopyMessage && renderCopyText()}
              </Styled.CopyIcon>
            )}
          </Styled.ActionsButtonsWrapper>
        )}
      </Styled.Textarea>
    );
  }
);

Textarea.defaultProps = {
  size: InputSize.Md,
  error: false,
  fullWidth: false,
  readOnly: false,
  disabled: false,
  disableActionButton: false,
  isActionButtonLoading: false,
  actionButtonLabel: 'Action',
  clearAllButtonLabel: 'Clear all',
};

export const propTypes = {
  error: PT.bool,
  readOnly: PT.bool,
  disabled: PT.bool,
  fullWidth: PT.bool,
  disableActionButton: PT.bool,
  isActionButtonLoading: PT.bool,
  value: PT.any,
  size: PT.oneOf(objectValues(InputSize)),
  copySuccessIcon: PT.oneOfType([PT.node, PT.func]),
  copyTextMessage: PT.string,
  cols: PT.number,
  rows: PT.number,
  showActionButton: PT.bool,
  showClearButton: PT.bool,
  showCopyIcon: PT.bool,
  actionButtonLabel: PT.string,
  clearAllButtonLabel: PT.string,
  onClickActionButton: PT.func,
  onClear: PT.func,
};

Textarea.propTypes = propTypes;

export default Textarea;
