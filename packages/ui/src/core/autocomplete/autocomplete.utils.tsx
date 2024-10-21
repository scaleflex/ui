import React from 'react';

import Label from '../label';
import FormHint from '../form-hint';
import {
  AutocompleteOptionIdType,
  AutocompleteOptionLabelType,
  AutocompleteOptionType,
  RenderHintProps,
  RenderLabelProps,
} from './autocomplete.props';

export const defaultGetOptionValue = (option: AutocompleteOptionType): AutocompleteOptionIdType =>
  (typeof option === 'object' ? option.uuid : option) || '';

export const defaultGetOptionLabel = (option: AutocompleteOptionType): AutocompleteOptionLabelType =>
  (typeof option === 'object' ? option.label : option) || '';

export const renderLabel = ({
  label,
  error,
  size,
  LabelProps,
}: RenderLabelProps): string | number | null | JSX.Element | any => {
  if (label) {
    if (typeof label === 'function') {
      return label({ error });
    }

    if (typeof label === 'object') {
      return label;
    }

    return (
      <Label size={size} {...(LabelProps || {})}>
        {label}
      </Label>
    );
  }

  return null;
};

export const renderHint = ({ hint, error, size }: RenderHintProps): string | number | null | JSX.Element | any => {
  if (hint) {
    if (typeof hint === 'function') {
      return hint({ error });
    }

    if (typeof hint === 'object') {
      return hint;
    }

    return (
      <FormHint size={size} error={error}>
        {hint}
      </FormHint>
    );
  }

  return null;
};
