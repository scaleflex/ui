import React, { useMemo } from 'react';
import Tick from '@scaleflex/icons/tick';

import { intrinsicComponent } from '../../utils/functions';
import type { ColorItemProps } from './color-picker.props';
import Styled from './color-picker.styles';

const ColorItem = intrinsicComponent<ColorItemProps, HTMLLabelElement>(
  ({ value, onChange, checked, size = 24 }: ColorItemProps, ref): JSX.Element => {
    const checkIconColor = useMemo(() => {
      if (value === '#ffffff' || value === 'rgba(0,0,0,0)') {
        return 'black';
      }
      return 'white';
    }, [value]);

    return (
      <Styled.ColorItemWrapper
        ref={ref}
        color={value}
        size={size}
        stroke={value === 'rgba(0,0,0,0)' ? '#a8a8a8' : '#E9EEF2'}
        value={value}
      >
        <input type="radio" value={value} checked={checked} onChange={onChange} />
        {checked && <Tick color={checkIconColor} />}
      </Styled.ColorItemWrapper>
    );
  }
);

export default ColorItem;
