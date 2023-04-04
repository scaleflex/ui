import React, { useState, useRef } from 'react';
import PT, { Validator } from 'prop-types';
import ClockIcon from '@scaleflex/icons/clock';
import type { IconProps } from '@scaleflex/icons/icon.props';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import { TimePickerProps } from './time-picker.props';
import { propTypes as inputPropTypes } from '../input/input.component';
import Clock, { ClockProps } from '../clock ';
import { propTypes as clockPropTypes } from '../clock /clock.component';
import { propTypes as popperPropTypes } from '../popper/popper.component';

import Styled from './time-picker.styles';
import { InputProps } from '../input';
import { Position } from '../popper/types';
import { InputGroupProps } from '../input-group';

const Timepicker = intrinsicComponent<TimePickerProps, HTMLDivElement>(
  (
    {
      value = '',
      onChange,
      position,
      label,
      hint,
      popperOptions,
      InputProps: InputPropsData,
      ClockProps: ClockPropsData,
      inputGroupProps,
      fullWidth,
      ...rest
    }: TimePickerProps,
    ref
  ): JSX.Element => {
    const [open, setOpen] = useState(false);
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const [isHovering, setIsHovering] = useState(false);

    const timePickerRef = useRef(null);

    const handleOnChange = (timeInputValue: string): void => {
      if (onChange) {
        onChange(timeInputValue);
      }
    };

    return (
      <Styled.TimePicker {...rest} ref={timePickerRef}>
        <Styled.TimePickerInput
          label={label}
          fullWidth={fullWidth}
          onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => handleOnChange(currentTarget.value)}
          hint={hint}
          value={value}
          isHovering={isHovering}
          showPlaceholder={setShowPlaceholder}
          inputProps={{
            iconEnd: (props: IconProps) => <ClockIcon {...props} />,
            iconClickEnd: () => setOpen(!open),
            ...(InputPropsData || {}),
          }}
          ref={ref}
          {...inputGroupProps}
        />
        {!value && rest.placeholder && showPlaceholder && (
          <Styled.Placeholder
            onClick={() => setShowPlaceholder(false)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {rest.placeholder}
          </Styled.Placeholder>
        )}
        <Clock
          value={value}
          open={open}
          setOpen={setOpen}
          onChange={handleOnChange}
          popperOptions={popperOptions}
          position={position || 'bottom-start'}
          anchorEl={timePickerRef.current}
          {...ClockPropsData}
        />
      </Styled.TimePicker>
    );
  }
);

Timepicker.defaultProps = {};

export const propTypes = {
  value: PT.string,
  label: PT.string,
  hint: PT.string,
  onChange: PT.func,
  fullWidth: PT.bool,
  position: PT.oneOf(objectValues(Position)),
  popperOptions: popperPropTypes.popperOptions,
  InputProps: PT.exact(inputPropTypes) as Validator<InputProps>,
  inputGroupProps: PT.exact(inputPropTypes) as Validator<InputGroupProps>,
  ClockProps: PT.exact(clockPropTypes) as Validator<ClockProps>,
};

Timepicker.propTypes = propTypes;

export default Timepicker;
