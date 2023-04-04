import React, { useState, useEffect } from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import { ClockProps } from './clock.props';
import { HOURS, MINUTES, PERIOD } from './clock.utils';
import Styled from './clock.styles';

const Clock = intrinsicComponent<ClockProps, HTMLDivElement>(
  ({ value, open = false, scroll = true, clockStyles, onChange, ...rest }: ClockProps, ref): JSX.Element => {
    const [hour, setHour] = useState(HOURS[0]);
    const [minute, setMinute] = useState(MINUTES[0]);
    const [period, setPeriod] = useState(PERIOD[0]);

    useEffect(() => {
      const [, newHour, newMin, newPeriod] = [...(value || '').matchAll(/^(\d+):(\d+)\s*([a-z]{2})$/gi)]?.[0];
      setHour(newHour || HOURS[0]);
      setMinute(newMin || MINUTES[0]);
      setPeriod(newPeriod || PERIOD[0]);
    }, [value]);

    const onHandleClick = (timeInputValue: string): void => {
      if (onChange) {
        onChange(timeInputValue);
      }
    };

    return (
      <>
        {open && (
          <Styled.ClockWrapper value={value} style={{ ...clockStyles }} {...rest} ref={ref}>
            <Styled.Scroll scroll={scroll}>
              <Styled.ClockBody>
                {HOURS.map((hourItem) => (
                  <Styled.ClockTimeContainer
                    active={hour === hourItem}
                    onClick={() => onHandleClick(`${hourItem}:${minute} ${period}`)}
                    key={hourItem}
                  >
                    <Styled.ClockNumberContainer>{hourItem}</Styled.ClockNumberContainer>
                  </Styled.ClockTimeContainer>
                ))}
              </Styled.ClockBody>
              <Styled.ClockBody>
                {MINUTES.map((minuteItem) => (
                  <Styled.ClockTimeContainer
                    active={minute === minuteItem}
                    onClick={() => onHandleClick(`${hour}:${minuteItem} ${period}`)}
                    key={minuteItem}
                  >
                    <Styled.ClockNumberContainer>{minuteItem}</Styled.ClockNumberContainer>
                  </Styled.ClockTimeContainer>
                ))}
              </Styled.ClockBody>
            </Styled.Scroll>
            <Styled.ClockBody>
              {PERIOD.map((periodItem) => (
                <Styled.ClockTimeContainer
                  active={period === periodItem}
                  onClick={() => onHandleClick(`${hour}:${minute} ${periodItem}`)}
                  key={periodItem}
                >
                  <Styled.ClockNumberContainer>{periodItem}</Styled.ClockNumberContainer>
                </Styled.ClockTimeContainer>
              ))}
            </Styled.ClockBody>
          </Styled.ClockWrapper>
        )}
      </>
    );
  }
);

Clock.defaultProps = {
  open: false,
  scroll: true,
  active: true,
};

export const propTypes = {
  open: PT.bool,
  scroll: PT.bool,
  active: PT.bool,
  setOpen: PT.func,
  clockStyles: PT.object,
  onChange: PT.func,
};

Clock.propTypes = propTypes;

export default Clock;
