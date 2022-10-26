import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import { CalendarProps } from './calendar.props';
import Popper from '../popper';
import DatePicker from './date-picker';

const Calendar = intrinsicComponent<CalendarProps, HTMLDivElement>(
  ({ value, onChange, open = true, setOpenState, ...rest }: CalendarProps, ref): JSX.Element => {
    return (
      <Popper position="auto" open ref={ref}>
        <DatePicker setOpenState={setOpenState} open={open} onChange={onChange} value={value} {...rest} />
      </Popper>
    );
  }
);

Calendar.defaultProps = {
  open: true,
};

export const propTypes = {
  value: PT.string,
  onChange: PT.func,
  open: PT.bool,
};

Calendar.propTypes = propTypes;

export default Calendar;
