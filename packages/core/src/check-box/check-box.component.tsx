import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import CheckBoxIcon from '@sfx-ui/icons/check-box';
import CheckBoxBlankIcon from '@sfx-ui/icons/check-box-blank';
import type { CheckBoxProps } from './check-box.props';
import Styled from './check-box.styles';

const CheckBox = intrinsicComponent<CheckBoxProps, HTMLInputElement>((
  props: CheckBoxProps,
  ref: React.ForwardedRef<HTMLInputElement>
): JSX.Element => (
  <Styled.CheckBox
    ref={ref}
    {...props}
    onClick={(event) => {
      if (typeof props.onChange === 'function') {
        props.onChange(!props.checked);
      }

      if (typeof props.onClick === 'function') {
        props.onClick(event);
      }
    }}

  >
    {
      props.checked
        ? <CheckBoxIcon />
        : <CheckBoxBlankIcon />
    }
  </Styled.CheckBox>
));

CheckBox.defaultProps = {
  checked: false,
};

CheckBox.propTypes = {
  checked: PT.bool,
  onChange: PT.func,
};

export default CheckBox;
