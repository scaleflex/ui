import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import SwitcherOnIcon from '@sfx-ui/icons/switcher-on';
import SwitcherOffIcon from '@sfx-ui/icons/switcher-off';
import type { SwitcherProps } from './switcher.props';
import Styled from './switcher.styles';

const Switcher = intrinsicComponent<SwitcherProps, HTMLInputElement>((
  {
    checked, onChange, ...rest
  }: SwitcherProps,
  ref: React.ForwardedRef<HTMLInputElement>
): JSX.Element => (
  <Styled.Switcher {...rest}>
    <Styled.Input
      ref={ref}
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
