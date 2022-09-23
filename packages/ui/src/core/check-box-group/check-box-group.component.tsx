import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import CheckBox from '../check-box';
import type { CheckBoxGroupProps } from './check-box-group.props';
import Styled from './check-box-group.styles';
import { LabelPosition } from './types';
import { Size } from '../check-box/size';
import CheckBoxGroupWithIcon from './check-box-group-with-icon.component';

const CheckBoxGroup = intrinsicComponent<CheckBoxGroupProps, HTMLLabelElement>(
  (
    {
      size = Size.Sm,
      label,
      checkBoxProps,
      readOnly,
      disabled,
      labelPosition,
      withIcon = false,
      title,
      icon,
      ...rest
    }: CheckBoxGroupProps,
    ref
  ): JSX.Element => {
    const content = [
      <CheckBox
        size={size}
        key="checkbox"
        checkBoxProps={checkBoxProps}
        disabled={disabled}
        readOnly={readOnly}
        {...rest}
      />,
    ];
    const labelContent = (
      <Styled.Label key="label" disabled={Boolean(disabled)} labelPosition={labelPosition} size={size}>
        {label}
      </Styled.Label>
    );

    if (labelPosition === 'before') {
      content.unshift(labelContent);
    } else {
      content.push(labelContent);
    }
    return (
      <Styled.CheckBoxGroup withIcon={withIcon} ref={ref}>
        {content}
        {withIcon && <CheckBoxGroupWithIcon icon={icon} title={title} />}
      </Styled.CheckBoxGroup>
    );
  }
);

CheckBoxGroup.defaultProps = {
  checked: false,
  labelPosition: LabelPosition.After,
  size: Size.Sm,
};

CheckBoxGroup.propTypes = {
  label: PT.string,
  title: PT.string,
  checked: PT.bool,
  onChange: PT.func,
  // eslint-disable-next-line react/forbid-prop-types
  checkBoxProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool,
  withIcon: PT.bool,
  size: PT.oneOf(objectValues(Size)),
  labelPosition: PT.oneOf(objectValues(LabelPosition)),
  icon: PT.oneOfType([PT.node, PT.func]),
};

export default CheckBoxGroup;
