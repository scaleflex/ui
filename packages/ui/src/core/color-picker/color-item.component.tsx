/* eslint-disable import/no-unresolved */
import React, { useMemo } from 'react';
import PT from 'prop-types';
import Tick from '@scaleflex/icons/tick';
import { intrinsicComponent } from '../../utils/functions';
import type { ColorItemProps } from './color-picker.props';
import Styled from './color-picker.styles';

const ColorItem = intrinsicComponent<ColorItemProps, HTMLLabelElement>(
  ({ value, onChange, checked, size = 24 }: ColorItemProps, ref): JSX.Element => {
    const checkIconColor = useMemo(() => {
      if (value === '#ffffff') {
        return 'black';
      }
      return 'white';
    }, [value]);

    return (
      <Styled.ColorItemWrapper ref={ref} color={value} size={size} stroke={checked ? '#ffffff' : '#E9EEF2'}>
        <input type="radio" value={value} checked={checked} onChange={onChange} />
        {checked && <Tick color={checkIconColor} />}
      </Styled.ColorItemWrapper>
    );
  }
);

ColorItem.defaultProps = {};

ColorItem.propTypes = {
  value: PT.string.isRequired,
  checked: PT.bool,
  onChange: PT.func.isRequired,
  size: PT.number,
};

export default ColorItem;
