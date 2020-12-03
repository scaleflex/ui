import React from 'react';
import PT, { Validator } from 'prop-types';
import { intrinsicComponent, objectValues } from '@sfx-ui/utils/functions';
import Label from '../label';
import { Type as LabelType } from '../label/types';
import type { LabelProps } from '../label';
import Input from '../input';
import Textarea from '../textarea';
import FieldInfo from '../field-info';
import type { InputGroupProps } from './input-group.props';
import { Type } from './types';
import Styled from './input-group.styles';

const InputGroup = intrinsicComponent<InputGroupProps, HTMLDivElement>((
  {
    // eslint-disable-next-line no-shadow
    children, type, error, label, hint, LabelProps, ...rest
  }: InputGroupProps,
  ref: React.ForwardedRef<HTMLDivElement>
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
        <Label error={error} {...(LabelProps || {})}>{label}</Label>
      );
    }

    return null;
  };

  const renderField = (): JSX.Element | null => {
    const fieldProps = { error, ...rest };

    if (type === Type.Input) {
      return <Input {...fieldProps} />;
    }

    if (type === Type.Textarea) {
      return <Textarea {...fieldProps} />;
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
        <FieldInfo error={error}>{hint}</FieldInfo>
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
});

InputGroup.defaultProps = {
  type: Type.Input,
  error: false,
  // LabelProps: {},
};

InputGroup.propTypes = {
  type: PT.oneOf(objectValues(Type)),
  label: PT.oneOf([PT.node, PT.string, PT.number]),
  hint: PT.oneOf([PT.node, PT.string, PT.number]),
  error: PT.bool,
  LabelProps: PT.shape({
    type: PT.oneOf(objectValues(LabelType)),
    icon: PT.oneOfType([PT.node, PT.func]),
    error: PT.bool,
  }) as Validator<LabelProps>,
};

export default InputGroup;
