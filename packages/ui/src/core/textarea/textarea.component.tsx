import React, { useState, useEffect, useRef } from 'react';
import PT from 'prop-types';
import CopyOutline from '@scaleflex/icons/copy-outline';

import { intrinsicComponent, objectValues, useForkRef } from '../../utils/functions';
import type { TextareaProps } from './textarea.props';
import { InputSize } from '../../utils/types';
import { handleCopyIcon } from '../input/input.utils';
import { getIconSize } from '../button/button.utils';
import InputStyled from '../input/input.styles';
import Styled from './textarea.styles';
import { Size } from '../menu-item/types';

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
      ...rest
    }: TextareaProps,
    ref
  ): JSX.Element => {
    const inputRef = useRef<HTMLTextAreaElement | null>(null);
    const textareaRef = useForkRef(inputRef, ref);

    const [isHovering, setIsHovering] = useState(false);
    const [overflowStyles, setOverflowStyles] = useState({});
    const [showCopyMessage, setShowCopyMessage] = useState(false);

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
        value={value}
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
          value={value}
          ref={textareaRef}
          size={size}
          readOnly={readOnly}
          disabled={disabled}
          style={{ ...overflowStyles }}
        />
        {readOnly ? (
          <Styled.CopyIcon
            showCopyIcon={isHovering && value.length > 0}
            size={size}
            onClick={() => handleCopyIcon(value, setShowCopyMessage)}
          >
            <CopyOutline size={getIconSize(size)} />
          </Styled.CopyIcon>
        ) : undefined}
        {showCopyMessage && renderCopyText()}
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
};

export const propTypes = {
  error: PT.bool,
  readOnly: PT.bool,
  disabled: PT.bool,
  fullWidth: PT.bool,
  value: PT.any,
  size: PT.oneOf(objectValues(InputSize)),
  copySuccessIcon: PT.oneOfType([PT.node, PT.func]),
  copyTextMessage: PT.string,
  cols: PT.number,
  rows: PT.number,
};

Textarea.propTypes = propTypes;

export default Textarea;
