import React, { useState, useRef } from 'react';
import { lightPalette } from '../../theme/roots/palette';
import { Color } from '../../utils/types/palette';

import CheckBox from '../check-box';
import type { CheckBoxGroupProps } from './check-box-group.props';
import Styled from './check-box-group.styles';
import { LabelPosition } from './types';
import { Size } from '../check-box/types';
import { getCheckboxInfoIconSize } from '../check-box/check-box.utils';

const CheckBoxGroup = ({
  size = Size.Sm,
  label,
  checkBoxProps,
  checkBoxGroupProps,
  readOnly = false,
  disabled = false,
  labelPosition = LabelPosition.After,
  icon,
  checked = false,
  ref,
  ...rest
}: CheckBoxGroupProps): JSX.Element => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [isEllipsisActive, setIsEllipsisActive] = useState(false);

  const getTextTooltip = (): string | undefined => {
    if (typeof label === 'string' && isEllipsisActive) {
      return label;
    }
  };

  const handleTextTooltip = (): void => {
    if (textRef.current !== null && textRef.current) {
      setIsEllipsisActive(textRef?.current?.offsetWidth < textRef?.current?.scrollWidth);
    }
  };

  const content = [
    <CheckBox
      size={size}
      key="checkbox"
      checkBoxProps={checkBoxProps}
      disabled={disabled}
      readOnly={readOnly}
      checked={checked}
      {...rest}
    />,
  ];

  const labelContent = (
    <Styled.Label
      key="label"
      title={getTextTooltip()}
      onMouseOver={handleTextTooltip}
      ref={textRef}
      disabled={Boolean(disabled)}
      $labelPosition={labelPosition}
      size={size}
    >
      {label}
    </Styled.Label>
  );

  if (labelPosition === 'before') {
    content.unshift(labelContent);
  } else {
    content.push(labelContent);
  }
  return (
    <Styled.CheckBoxGroup disabled={disabled} ref={ref} {...checkBoxGroupProps}>
      {content}
      {typeof icon === 'function'
        ? icon({ size: getCheckboxInfoIconSize(size), color: lightPalette[Color.IconsSecondary] })
        : icon}
    </Styled.CheckBoxGroup>
  );
};

export default CheckBoxGroup;
