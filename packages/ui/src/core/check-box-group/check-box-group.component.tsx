import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import CheckBox from '../check-box';
import type { CheckBoxGroupProps } from './check-box-group.props';
import Styled from './check-box-group.styles';
import { LabelPosition } from './types';

const CheckBoxGroup = intrinsicComponent<CheckBoxGroupProps, HTMLLabelElement>(
  ({ label, checkBoxProps, readOnly, disabled, labelPosition, ...rest }: CheckBoxGroupProps, ref): JSX.Element => {
    const content = [<CheckBox checkBoxProps={checkBoxProps} disabled={disabled} readOnly={readOnly} {...rest} />];
    const labelContent = <Styled.Label labelPosition={labelPosition}>{label}</Styled.Label>;

    if (labelPosition === 'before') {
      content.unshift(labelContent);
    } else {
      content.push(labelContent);
    }
    return <Styled.CheckBoxGroup ref={ref}>{content}</Styled.CheckBoxGroup>;
  }
);

CheckBoxGroup.defaultProps = {
  checked: false,
  labelPosition: LabelPosition.After,
};

CheckBoxGroup.propTypes = {
  label: PT.string,
  checked: PT.bool,
  onChange: PT.func,
  // eslint-disable-next-line react/forbid-prop-types
  checkBoxProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool,
  labelPosition: PT.oneOf(objectValues(LabelPosition)),
};

export default CheckBoxGroup;
