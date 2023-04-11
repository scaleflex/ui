import React, { useState, useEffect } from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import { ClockProps } from './clock.props';
import { HOURS, MINUTES, PERIOD } from './clock.constants';
import { Position } from '../popper/types';
import Styled from './clock.styles';

const Clock = intrinsicComponent<ClockProps, HTMLDivElement>(
  (
    { value, open = false, scroll = true, clockStyles, onChange, popperPosition, ...rest }: ClockProps,
    ref
  ): JSX.Element => {
    const [hour, setHour] = useState(HOURS[0]);
    const [minute, setMinute] = useState(MINUTES[0]);
    const [period, setPeriod] = useState(PERIOD[0]);

    useEffect(() => {
      const [, newHour, newMin, newPeriod] = [...(value || '').matchAll(/^(\d+):(\d+)\s*([a-z]{2})$/gi)]?.[0];
      setHour(newHour || HOURS[0]);
      setMinute(newMin || MINUTES[0]);
      setPeriod(newPeriod || PERIOD[0]);
    }, [value]);

    const handleTimeClick = (timeInputValue: string): void => {
      if (onChange) {
        onChange(timeInputValue);
      }
    };

    return (
      <>
        {open && (
          <Styled.ClockWrapper
            ref={ref}
            value={value}
            popperPosition={popperPosition}
            style={{ ...clockStyles }}
            {...rest}
          >
            <Styled.Scroll scroll={scroll}>
              <Styled.ClockBody>
                {HOURS.map((hourItem) => (
                  <Styled.ClockTimeContainer
                    key={hourItem}
                    active={hour === hourItem}
                    onClick={() => handleTimeClick(`${hourItem}:${minute} ${period}`)}
                  >
                    <Styled.ClockNumberContainer>{hourItem}</Styled.ClockNumberContainer>
                  </Styled.ClockTimeContainer>
                ))}
              </Styled.ClockBody>
              <Styled.ClockBody>
                {MINUTES.map((minuteItem) => (
                  <Styled.ClockTimeContainer
                    key={minuteItem}
                    active={minute === minuteItem}
                    onClick={() => handleTimeClick(`${hour}:${minuteItem} ${period}`)}
                  >
                    <Styled.ClockNumberContainer>{minuteItem}</Styled.ClockNumberContainer>
                  </Styled.ClockTimeContainer>
                ))}
              </Styled.ClockBody>
            </Styled.Scroll>
            <Styled.ClockBody>
              {PERIOD.map((periodItem) => (
                <Styled.ClockTimeContainer
                  key={periodItem}
                  active={period === periodItem}
                  onClick={() => handleTimeClick(`${hour}:${minute} ${periodItem}`)}
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
  value: PT.string,
  open: PT.bool,
  scroll: PT.bool,
  active: PT.bool,
  setOpen: PT.func,
  clockStyles: PT.object,
  onChange: PT.func,
  popperPosition: PT.oneOf(objectValues(Position)),
};

Clock.propTypes = propTypes;

export default Clock;
