import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import Label from '../label';
import Input from '../input';
import Textarea from '../textarea';
import FormHint from '../form-hint';
import type { InputGroupProps } from './input-group.props';
import { Type } from './types';
import Styled from './input-group.styles';

const InputGroup = intrinsicComponent<InputGroupProps, HTMLDivElement>(
  (
    {
      children,
      type = Type.Input,
      error = false,
      label,
      hint,
      LabelProps: LabelPropsData,
      InputProps,
      inputProps,
      inputRef,
      TextareaProps: TextareaPropsData,
      readOnly = false,
      disabled,
      size,
      value,
      hideCopyIcon,
      copyTextMessage,
      copySuccessIcon,
      placeholder,
      fullWidth,
      onChange,
      ...rest
    }: InputGroupProps,
    ref
  ): JSX.Element => {
    const renderLabel = (): string | number | null | JSX.Element | any => {
      if (label) {
        if (typeof label === 'function') {
          return label({ error });
        }

        if (typeof label === 'object') {
          return label;
        }

        return (
          <Label size={size} error={error} disabled={disabled} {...(LabelPropsData || {})}>
            {label}
          </Label>
        );
      }

      return null;
    };

    const renderField = (): JSX.Element | null => {
      const fieldProps = {
        value, readOnly, disabled, size, error, placeholder,
        hideCopyIcon, copyTextMessage, copySuccessIcon, fullWidth, onChange
      };

      if (type === Type.Input) {
        return (
          <Input
            {...fieldProps}
            {...rest}
            {...inputProps}
            InputProps={InputProps}
            ref={inputRef}
            readOnly={readOnly}
            disabled={disabled}
          />
        );
      }

      if (type === Type.Textarea) {
        return <Textarea {...fieldProps} {...(TextareaPropsData || {})} />;
      }

      return null;
    };

    const renderHint = (): string | number | null | JSX.Element | any => {
      if (hint) {
        if (typeof hint === 'function') {
          return hint({ error });
        }

        if (typeof hint === 'object') {
          return hint;
        }

        return (
          <FormHint size={size} error={error} disabled={disabled}>
            {hint}
          </FormHint>
        );
      }

      return null;
    };

    return (
      <Styled.InputGroup ref={ref}>
        {renderLabel()}
        {renderField()}
        {renderHint()}
      </Styled.InputGroup>
    );
  }
);

export default InputGroup;
