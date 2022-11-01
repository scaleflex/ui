import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import { CalendarProps } from './calendar.props';
import DatePicker from './date-picker';

const Calendar = intrinsicComponent<CalendarProps, HTMLDivElement>(
  ({ value, onChange, open = false, setOpenState, maxWidth, ...rest }: CalendarProps, ref): JSX.Element => {
    return (
      <DatePicker
        maxWidth={maxWidth}
        ref={ref}
        setOpenState={setOpenState}
        open={open}
        onChange={onChange}
        value={value}
        {...rest}
      />
    );
  }
);

Calendar.defaultProps = {
  open: false,
  maxWidth: false,
};

export const propTypes = {
  value: PT.string,
  onChange: PT.func,
  open: PT.bool,
  omaxWidthen: PT.bool,
};

Calendar.propTypes = propTypes;

export default Calendar;
