import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import Switcher from '../switcher';
import type { SwitcherGroupProps } from './switcher-group.props';
import Styled from './switcher-group.styles';
import { SwitcherSize } from '../switcher/switcher-size';

const SwitcherGroup = intrinsicComponent<SwitcherGroupProps, HTMLLabelElement>(
  (
    {
      size = SwitcherSize.Sm,
      label,
      switcherProps,
      SwitcherProps,
      checked = false,
      onChange,
      readOnly,
      disabled,
      ...rest
    }: SwitcherGroupProps,
    ref
  ): JSX.Element => (
    <Styled.SwitcherGroup disabled={disabled} ref={ref} {...rest}>
      <Switcher
        size={size}
        SwitcherPropsData={SwitcherProps}
        switcherProps={switcherProps}
        readOnly={readOnly}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
      />

      <Styled.Label disabled={disabled} size={size}>
        {label}
      </Styled.Label>
    </Styled.SwitcherGroup>
  )
);

export default SwitcherGroup;
