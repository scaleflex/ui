import React, { useState, useRef } from 'react';
import PT, { Validator } from 'prop-types';
import Clock from '@scaleflex/icons/clock';
import { Popper } from '@scaleflex/ui/core';

import { InputSize } from '../../utils/types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { propTypes as inputPropTypes } from '../input/input.component';
import { propTypes as popperPropTypes } from '../popper/popper.component';
import { InputProps } from '../input';
import { Position } from '../popper/types';
import { TimePickerProps } from './time-picker.props';
import Styled from './time-picker.styles';

const TimePicker = intrinsicComponent<TimePickerProps, HTMLDivElement>(
  (
    {
      position,
      size = InputSize.Md,
      popperOptions,
      InputProps: InputPropsData,
      readOnly = true,
      fullWidth,
      inputGroupProps,
      hint,
      label,
    }: TimePickerProps,
    ref
  ): JSX.Element => {
    const [open, setOpen] = useState(false);
    const [selectedHour, setSelectedHour] = useState('00');
    const [selectedMinute, setSelectedMinute] = useState('00');
    const [selectedPeriod, setSelectedPeriod] = useState('AM');

    const timePickerRef = useRef(null);

    const toggleDropdown = (): void => {
      setOpen(!open);
    };

    const handleHourChange = (hour: string): void => {
      const hourValue = Number.parseInt(hour, 10) < 10 ? `0${hour}` : hour;
      setSelectedHour(hourValue);
    };

    const handleMinuteChange = (minute: string): void => {
      const minuteValue = Number.parseInt(minute, 10) < 10 ? `0${minute}` : minute;
      setSelectedMinute(minuteValue);
    };

    const handlePeriodChange = (period: string): void => {
      setSelectedPeriod(period);
    };

    return (
      <Styled.TimePicker ref={timePickerRef} fullWidth={fullWidth}>
        <Styled.TimePickerInput
          label={label}
          fullWidth={fullWidth}
          hint={hint}
          size={size}
          value={`${selectedHour}:${selectedMinute} ${selectedPeriod}`}
          readOnly={readOnly}
          hideCopyIcon
          inputProps={{
            iconEnd: () => <Clock size={size === 'md' ? 16 : 14} onClick={toggleDropdown} />,
            type: 'text',
            ...(InputPropsData || {}),
          }}
          {...inputGroupProps}
          ref={ref}
        />
        <Popper
          anchorEl={timePickerRef.current}
          onClick={() => toggleDropdown()}
          open={open}
          popperOptions={popperOptions}
          position={position || 'bottom-start'}
          overlay
        >
          {open && (
            <Styled.TimePickerDropdownContainer>
              <Styled.TimePickerDropdown>
                <Styled.TimePickerDropdownColumn>
                  {[...new Array(12).keys()].map((hour) => (
                    <Styled.TimePickerHour
                      selected={selectedHour === JSON.stringify(hour + 1)}
                      key={hour}
                      onClick={() => handleHourChange(JSON.stringify(hour + 1))}
                    >
                      {hour + 1}
                    </Styled.TimePickerHour>
                  ))}
                </Styled.TimePickerDropdownColumn>
                <Styled.TimePickerDropdownColumn>
                  {[...new Array(60).keys()].map((minute) => (
                    <Styled.TimePickerMinute
                      selected={selectedMinute === JSON.stringify(minute)}
                      key={minute}
                      onClick={() => handleMinuteChange(JSON.stringify(minute))}
                    >
                      {minute < 10 ? `0${minute}` : minute}
                    </Styled.TimePickerMinute>
                  ))}
                </Styled.TimePickerDropdownColumn>
              </Styled.TimePickerDropdown>
              <Styled.TimePickerDropdownColumn>
                <Styled.TimePickerPeriod selected={selectedPeriod === 'AM'} onClick={() => handlePeriodChange('AM')}>
                  AM
                </Styled.TimePickerPeriod>
                <Styled.TimePickerPeriod selected={selectedPeriod === 'PM'} onClick={() => handlePeriodChange('PM')}>
                  PM
                </Styled.TimePickerPeriod>
              </Styled.TimePickerDropdownColumn>
            </Styled.TimePickerDropdownContainer>
          )}
        </Popper>
      </Styled.TimePicker>
    );
  }
);

TimePicker.defaultProps = {
  size: InputSize.Md,
  disabled: false,
  readOnly: true,
  fullWidth: false,
};

export const propTypes = {
  position: PT.oneOf(objectValues(Position)),
  size: PT.oneOf(objectValues(InputSize)),
  popperOptions: popperPropTypes.popperOptions,
  InputProps: PT.exact(inputPropTypes) as Validator<InputProps>,
  fullWidth: PT.bool,
};

TimePicker.propTypes = propTypes;

export default TimePicker;
