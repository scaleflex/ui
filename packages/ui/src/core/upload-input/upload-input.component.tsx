import React, { useState } from 'react';
import type { FormEvent } from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import Button from '../button';
import type { UploadInputProps } from './upload-input.props';
import StyledInput from '../input/input.styles';
import Styled from './upload-input.styles';
import { ButtonColor } from '../../utils/types';

const UploadInput = intrinsicComponent<UploadInputProps, HTMLDivElement>(
  (
    {
      error,
      size,
      buttonLabel = 'Choose file',
      buttonColor = 'primary',
      placeholder = 'No file chosen',
      onChange,
      ...rest
    },
    ref
  ): JSX.Element => {
    const [valueState, setValueState] = useState('');

    return (
      <Styled.UploadInput ref={ref}>
        <StyledInput.Input
          error={error}
          onClick={({ currentTarget }: FormEvent<HTMLDivElement>) => {
            const fileInputElem: HTMLElement | null = currentTarget.querySelector('input[type=file]');

            if (fileInputElem) {
              fileInputElem.click();
            }
          }}
        >
          <StyledInput.Base placeholder={placeholder} readOnly value={valueState} />

          <Button color={buttonColor}>{buttonLabel}</Button>

          <Styled.FileInput
            {...rest}
            type="file"
            onChange={(event) => {
              const { files } = event.target;

              if (files) {
                if (files.length === 0) {
                  setValueState('');
                } else if (files.length === 1) {
                  setValueState(files[0].name);
                } else if (files.length > 1) {
                  setValueState(`${files.length} files`);
                } else {
                  setValueState(event.target.value);
                }
              }

              if (typeof onChange === 'function') {
                onChange(event);
              }
            }}
          />
        </StyledInput.Input>
      </Styled.UploadInput>
    );
  }
);

UploadInput.propTypes = {
  buttonLabel: PT.string,
  placeholder: PT.string,
  buttonColor: PT.oneOf(objectValues(ButtonColor)),
};

export default UploadInput;
