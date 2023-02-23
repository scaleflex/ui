import React, { useState, useEffect } from 'react';
import PT from 'prop-types';
import CopyOutline from '@scaleflex/icons/copy-outline';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { TextareaProps } from './textarea.props';
import { InputSize } from '../../utils/types';
import { handleCopyIcon } from '../input/input.utils';
import InputStyled from '../input/input.styles';
import Styled from './textarea.styles';
import { Size } from '../menu-item/types';

const Textarea = intrinsicComponent<TextareaProps, HTMLTextAreaElement>(
  ({ fullWidth, size, value, readOnly, disabled, error, cols, rows, copyTextMessage = '',
  copySuccessIcon, ...rest }: TextareaProps, ref): JSX.Element => {
    const [isHovering, setIsHovering] = useState(false);
    const [showCopyMessage, setShowCopyMessage] = useState(false);

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
        <InputStyled.NotificationBox size={size} style={{ bottom: size === Size.Md ? 83 : 68 }}>
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
        <Styled.Base {...rest} value={value} ref={ref} readOnly={readOnly} disabled={disabled} />
        {isHovering && readOnly ? (
          <Styled.CopyIcon onClick={() => handleCopyIcon(value, setShowCopyMessage)}>
            <CopyOutline size={16} />
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
