import React, { useState } from 'react';
import PT from 'prop-types';
import CopyOutline from '@scaleflex/icons/copy-outline';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { TextareaProps } from './textarea.props';
import { InputSize } from '../../utils/types';
import Styled from './textarea.styles';
import { handleCopyIcon } from '../input/input.utils';

const Textarea = intrinsicComponent<TextareaProps, HTMLTextAreaElement>(
  ({ fullWidth, size, value, readOnly, disabled, error, ...rest }: TextareaProps, ref): JSX.Element => {
    const [isHovering, setIsHovering] = useState(false);

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
        autoSize={Boolean(rest?.cols) || Boolean(rest?.rows)}
      >
        <Styled.Base {...rest} value={value} ref={ref} readOnly={readOnly} disabled={disabled} />
        {isHovering && readOnly ? (
          <Styled.CopyIcon onClick={() => handleCopyIcon(value)}>
            <CopyOutline size={16} />
          </Styled.CopyIcon>
        ) : undefined}
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
};

Textarea.propTypes = propTypes;

export default Textarea;
