import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import SwitcherOnIcon from '@scaleflex/icons/switcher-on';
import SwitcherOffIcon from '@scaleflex/icons/switcher-off';
import type { SwitcherProps } from './switcher.props';
import Styled from './switcher.styles';

const Switcher = intrinsicComponent<SwitcherProps, HTMLSpanElement>((
  {
    checked, onChange, ...rest
  }: SwitcherProps,
  ref
): JSX.Element => (
  <Styled.Switcher {...rest} ref={ref}>
    <Styled.Input
      checked={checked}
      onChange={onChange}
    />

    {
      checked
        ? <SwitcherOnIcon />
        : <SwitcherOffIcon />
    }
  </Styled.Switcher>
));

Switcher.defaultProps = {
  checked: false,
};

Switcher.propTypes = {
  checked: PT.bool,
  onChange: PT.func,
};

export default Switcher;
