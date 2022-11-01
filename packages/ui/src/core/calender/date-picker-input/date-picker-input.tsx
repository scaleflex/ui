import React from 'react';
import PT from 'prop-types';
import Calendar from '@scaleflex/icons/calendar';

import { intrinsicComponent } from '../../../utils/functions';
import Styled from '../calendar.styles';
import { CalendarProps } from '../calendar.props';

const DatepickerInput = intrinsicComponent<CalendarProps, HTMLDivElement>(
  (
    { value, onChange, open = true, maxWidth, datepickerInput, setOpenState, ...rest }: CalendarProps,
    ref
  ): JSX.Element => {
    return (
      <Styled.DatepickerWrapper maxWidth={maxWidth} ref={datepickerInput} {...rest}>
        <Styled.DatepickerInput value={value} onChange={(e: any) => onChange?.(e.target.value)} />
        <Styled.DatepickerIcon ref={ref} onClick={() => setOpenState?.(!open)}>
          <Calendar size={14} />
        </Styled.DatepickerIcon>
      </Styled.DatepickerWrapper>
    );
  }
);

DatepickerInput.defaultProps = {
  open: true,
};

export const propTypes = {
  value: PT.string,
  onChange: PT.func,
  open: PT.bool,
};

DatepickerInput.propTypes = propTypes;

export default DatepickerInput;
