import React from 'react';
import PT from 'prop-types';
import SwitcherOnIcon from '@scaleflex/icons/switcher-on';
import SwitcherOffIcon from '@scaleflex/icons/switcher-off';
import { intrinsicComponent } from '../../utils/functions';
import type { SwitcherProps } from './switcher.props';
import Styled from './switcher.styles';

const Switcher = intrinsicComponent<SwitcherProps, HTMLSpanElement>((
  {
    checked, onChange, switcherProps, ...rest
  }: SwitcherProps,
  ref
): JSX.Element => (
  <Styled.Switcher {...rest} ref={ref}>
    <Styled.Input
      checked={checked}
      onChange={onChange}
      {...switcherProps}
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
  // eslint-disable-next-line react/forbid-prop-types
  switcherProps: PT.object
};

export default Switcher;
