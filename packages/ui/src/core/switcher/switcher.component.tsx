import React from 'react';

import { ignoreEvent } from '../../utils/functions';
import type { SwitcherProps } from './switcher.props';
import Styled from './switcher.styles';
import { SwitcherSize } from './switcher-size';

const Switcher = ({
  size = SwitcherSize.Sm,
  checked = false,
  onChange,
  SwitcherPropsData,
  switcherProps,
  readOnly,
  disabled,
  children,
  ref,
  ...rest
}: SwitcherProps): JSX.Element => (
  <Styled.SwitcherWrapper disabled={disabled} ref={ref} {...SwitcherPropsData} {...rest}>
    <Styled.Input
      checked={checked}
      onChange={readOnly || disabled ? ignoreEvent : onChange}
      readOnly={readOnly}
      $disabled={disabled}
      size={size}
      {...switcherProps}
    />
    <Styled.Switcher disabled={disabled} size={size}>
      {children && (
        <Styled.SwitcherContentWrapper checked={checked} size={size}>
          {children}
        </Styled.SwitcherContentWrapper>
      )}
    </Styled.Switcher>
  </Styled.SwitcherWrapper>
);

export default Switcher;
