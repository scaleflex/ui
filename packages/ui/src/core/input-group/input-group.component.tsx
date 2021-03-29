import React from 'react';
import PT, { Validator } from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import Label from '../label';
import { propTypes as labelPropTypes } from '../label/label.component';
import type { LabelProps } from '../label';
import Input from '../input';
import type { InputProps } from '../input';
import { propTypes as inputPropTypes } from '../input/input.component';
import type { TextareaProps } from '../textarea';
import Textarea from '../textarea';
import { propTypes as textareaPropTypes } from '../textarea/textarea.component';
import FormHint from '../form-hint';
import type { InputGroupProps } from './input-group.props';
import { Type } from './types';
import Styled from './input-group.styles';

const InputGroup = intrinsicComponent<InputGroupProps, HTMLDivElement>(
  (
    {
      children,
      type,
      error,
      label,
      hint,
      LabelProps: LabelPropsData,
      InputProps: InputPropsData,
      inputProps,
      inputRef,
      TextareaProps: TextareaPropsData,
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
          <Label error={error} {...(LabelPropsData || {})}>
            {label}
          </Label>
        );
      }

      return null;
    };

    const renderField = (): JSX.Element | null => {
      const fieldProps = { error, ...rest };

      if (type === Type.Input) {
        return <Input {...fieldProps} {...(InputPropsData || {})} {...inputProps} ref={inputRef?.ref || inputRef} />;
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

        return <FormHint error={error}>{hint}</FormHint>;
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

InputGroup.defaultProps = {
  type: Type.Input,
  error: false,
};

InputGroup.propTypes = {
  type: PT.oneOf(objectValues(Type)),
  label: PT.node,
  hint: PT.node,
  error: PT.bool,
  value: PT.string,
  LabelProps: PT.exact(labelPropTypes) as Validator<LabelProps>,
  InputProps: PT.exact(inputPropTypes) as Validator<InputProps>,
  // eslint-disable-next-line react/forbid-prop-types
  inputProps: PT.object,
  inputRef: PT.oneOfType([PT.func, PT.object]),
  TextareaProps: PT.exact(textareaPropTypes) as Validator<TextareaProps>,
};

export default InputGroup;
