import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import Switcher from '../switcher';
import type { SwitcherGroupProps } from './switcher-group.props';
import Styled from './switcher-group.styles';

const SwitcherGroup = intrinsicComponent<SwitcherGroupProps, HTMLInputElement>((
  {
    label, ...rest
  }: SwitcherGroupProps,
  ref: React.ForwardedRef<HTMLInputElement>
): JSX.Element => (
  <Styled.SwitcherGroup>
    <Switcher
      ref={ref}
      {...rest}
    />

    <Styled.Label>
      {label}
    </Styled.Label>
  </Styled.SwitcherGroup>
));

SwitcherGroup.defaultProps = {
  checked: false,
};

SwitcherGroup.propTypes = {
  label: PT.string,
  checked: PT.bool,
  onChange: PT.func,
};

export default SwitcherGroup;
