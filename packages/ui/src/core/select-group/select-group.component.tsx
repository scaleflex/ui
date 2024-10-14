import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import Label from '../label';
import Select from '../select';
import FormHint from '../form-hint';
import type { SelectGroupProps } from './select-group.props';
import Styled from './select-group.styles';

const SelectGroup = intrinsicComponent<SelectGroupProps, HTMLDivElement>(
  (
    {
      children,
      size,
      error = false,
      label,
      placeholder,
      hint,
      LabelProps: LabelPropsData,
      SelectProps: SelectPropsData,
      selectProps,
      fullWidth = false,
      showSelectionKey,
      value,
      multiple,
      hideMenuItemsActions = false,
      onChange,
      readOnly = false,
      disabled = false,
      showClearIcon,
      ...rest
    }: SelectGroupProps,
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

        return <Label {...(LabelPropsData || {})}>{label}</Label>;
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
      <Styled.SelectGroup {...rest} ref={ref}>
        {renderLabel()}

        <Select
          error={error}
          value={value}
          size={size}
          onChange={onChange}
          multiple={multiple}
          fullWidth={Boolean(fullWidth)}
          {...(SelectPropsData || {})}
          selectProps={selectProps}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          showSelectionKey={showSelectionKey}
          hideMenuItemsActions={hideMenuItemsActions}
          showClearIcon={showClearIcon}
        >
          {children}
        </Select>

        {renderHint()}
      </Styled.SelectGroup>
    );
  }
);

export default SelectGroup;
