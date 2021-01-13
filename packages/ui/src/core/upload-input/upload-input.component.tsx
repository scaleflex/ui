import React, { useState } from 'react';
import type { FormEvent } from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Button from '../button';
import type { UploadInputProps } from './upload-input.props';
import IStyled from '../input/input.styles';
import Styled from './upload-input.styles';
import { defaultProps as inputDefaultProps, propTypes as inputPropTypes } from '../input/input.component';

const UploadInput = intrinsicComponent<UploadInputProps, HTMLDivElement>((
  {
    error, size, buttonLabel, placeholder, onChange, ...rest
  },
  ref
): JSX.Element => {
  const [valueState, setValueState] = useState('');

  return (
    <Styled.UploadInput ref={ref}>
      <IStyled.Input
        error={error}
        size={size}
        onClick={({ currentTarget }: FormEvent<HTMLDivElement>) => {
          const fileInputElem: HTMLElement | null = currentTarget.querySelector('input[type=file]');

          if (fileInputElem) {
            fileInputElem.click();
          }
        }}
      >
        <Button color="primary">{buttonLabel}</Button>

        <IStyled.Base
          placeholder={placeholder}
          readOnly
          value={valueState}
        />

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
      </IStyled.Input>
    </Styled.UploadInput>
  );
});

UploadInput.defaultProps = {
  ...inputDefaultProps,
  buttonLabel: 'Choose file',
  placeholder: 'No file chosen',
};

const { iconStart, iconEnd, ...restInputPropTypes } = inputPropTypes;

UploadInput.propTypes = {
  ...restInputPropTypes,
  buttonLabel: PT.string,
  placeholder: PT.string,
};

export default UploadInput;
