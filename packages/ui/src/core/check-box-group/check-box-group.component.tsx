import React from 'react';
import PT from 'prop-types';
import { lightPalette } from '../../theme/roots/palette';
import { Color } from '../../utils/types/palette';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import CheckBox from '../check-box';
import type { CheckBoxGroupProps } from './check-box-group.props';
import Styled from './check-box-group.styles';
import { LabelPosition } from './types';
import { Size } from '../check-box/types';
import { getCheckboxInfoIconSize } from '../check-box/check-box.utils';

const CheckBoxGroup = intrinsicComponent<CheckBoxGroupProps, HTMLLabelElement>(
  (
    {
      size = Size.Sm,
      label,
      checkBoxProps,
      checkBoxGroupProps,
      readOnly,
      disabled,
      labelPosition,
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
      <Styled.CheckBoxGroup icon={icon} disabled={disabled} ref={ref} {...checkBoxGroupProps}>
        {content}
        {typeof icon === 'function'
          ? icon({ size: getCheckboxInfoIconSize(size), color: lightPalette[Color.IconsSecondary] })
          : icon}
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
  checked: PT.bool,
  onChange: PT.func,
  checkBoxProps: PT.object,
  checkBoxGroupProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool,
  size: PT.oneOf(objectValues(Size)),
  labelPosition: PT.oneOf(objectValues(LabelPosition)),
  icon: PT.oneOfType([PT.node, PT.func]),
};

export default CheckBoxGroup;
