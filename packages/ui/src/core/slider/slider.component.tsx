/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-use-before-define */
/* eslint-disable sonarjs/cognitive-complexity */
import React, { useEffect, useRef, useState, useCallback } from 'react';
import PT from 'prop-types';

import {
  intrinsicComponent,
  objectValues,
  asc,
  valueToPercent,
  percentToValue,
  roundValueToStep,
  setValueIndex,
  findClosest,
  ownerDocument,
  clamp,
  trackFinger,
} from '../../utils/functions';
import useControlled from '../../hooks/use-controlled';
import useEventCallback from '../../hooks/use-event-callback';
import type { SliderProps } from './slider.props';
import { LabelTooltip } from './types';
import Styled from './slider.styles';

const INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;

function focusThumb({
  sliderRef,
  activeIndex,
  setActive,
}: {
  sliderRef: any;
  activeIndex: number;
  setActive?: any;
}): void {
  const doc = ownerDocument(sliderRef.current);
  if (
    !sliderRef.current.contains(doc.activeElement) ||
    Number(doc.activeElement!.getAttribute('data-index')) !== activeIndex
  ) {
    sliderRef.current.querySelector(`[type="range"][data-index="${activeIndex}"]`)?.focus();
  }

  if (setActive) {
    setActive(activeIndex);
  }
}

const axisProps = {
  horizontal: {
    offset: (percent: number) => ({ left: `${percent}%` }),
    leap: (percent: number) => ({ width: `${percent}%` }),
  },
  'horizontal-reverse': {
    offset: (percent: number) => ({ right: `${percent}%` }),
    leap: (percent: number) => ({ width: `${percent}%` }),
  },
  vertical: {
    offset: (percent: number) => ({ bottom: `${percent}%` }),
    leap: (percent: number) => ({ height: `${percent}%` }),
  },
};

const Slider = intrinsicComponent<SliderProps, HTMLSpanElement>(
  (
    {
      defaultValue,
      disabled = false,
      disableSwap = false,
      hideTrack = false,
      value: valueProp,
      min = 0,
      max = 100,
      // orientation = 'horizontal',
      onChange,
      onMouseDown,
      onMouseUp,
      step = 1,
      labelTooltip = LabelTooltip.Off,
      annotation = '',
      ...rest
    }: SliderProps,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref
  ): JSX.Element => {
    const [active, setActive] = useState(-1);
    const [open, setOpen] = useState(-1);
    const [dragging, setDragging] = useState(false);

    const moveCount = useRef(0);
    const previousIndex = useRef(0);
    const touchId = useRef();
    const sliderRef = useRef<HTMLSpanElement | null>(null);

    const [valueDerived, setValueState] = useControlled({
      controlled: valueProp,
      default: defaultValue ?? min,
    });

    const axis = 'horizontal';
    const range = Array.isArray(valueDerived);

    const values = range ? valueDerived.slice().sort(asc) : [valueDerived];

    const getFingerNewValue = ({
      finger,
      move = false,
      values: values2,
    }: {
      finger: any;
      move?: boolean;
      values: any;
    }): { newValue: number | number[]; activeIndex: number } | null => {
      const { current: slider } = sliderRef;
      if (slider) {
        const { width, height, bottom, left } = slider.getBoundingClientRect();
        let percent;

        if (axis.indexOf('vertical') === 0) {
          percent = (bottom - finger.y) / height;
        } else {
          percent = (finger.x - left) / width;
        }

        if (axis.includes('-reverse')) {
          percent = 1 - percent;
        }

        let newValue;
        newValue = percentToValue(percent, min, max);
        if (step) {
          newValue = roundValueToStep(newValue, step, min);
        }

        newValue = clamp(newValue, min, max);
        let activeIndex = 0;

        if (range) {
          if (!move) {
            activeIndex = findClosest(values2, newValue);
          } else {
            activeIndex = previousIndex.current;
          }

          if (disableSwap) {
            newValue = clamp(newValue, values2[activeIndex - 1] || -Infinity, values2[activeIndex + 1] || Infinity);
          }

          const previousValue = newValue;

          newValue = setValueIndex({
            values: values2,
            newValue,
            index: activeIndex,
          });

          if (!(disableSwap && move) && Array.isArray(newValue)) {
            activeIndex = newValue.indexOf(previousValue);

            previousIndex.current = activeIndex;
          }
        }

        return { newValue, activeIndex };
      }
      return null;
    };

    const handleChange = (event: any, value: number | number[], thumbIndex: number): void => {
      if (onChange) {
        onChange(event, value, thumbIndex);
      }
    };

    const handleHiddenInputChange = (event: any) => {
      const index = Number(event.currentTarget.getAttribute('data-index'));

      let newValue = event.target.valueAsNumber;

      if (range) {
        if (disableSwap) {
          newValue = clamp(newValue, values[index - 1] || -Infinity, values[index + 1] || Infinity);
        }

        const previousValue = newValue;
        newValue = setValueIndex({
          values,
          newValue,
          index,
        });

        let activeIndex = index;

        if (!disableSwap) {
          activeIndex = newValue.indexOf(previousValue);
        }

        focusThumb({ sliderRef, activeIndex });
      }

      setValueState(newValue);

      if (handleChange) {
        handleChange(event, newValue, index);
      }

      if (onMouseUp) {
        onMouseUp(event);
      }
    };

    const handleTouchMove = useEventCallback((nativeEvent: any) => {
      const finger = trackFinger(nativeEvent, touchId);

      if (!finger) {
        return;
      }

      moveCount.current += 1;
      if (nativeEvent.type === 'mousemove' && nativeEvent.buttons === 0) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        handleTouchEnd(nativeEvent);
        return;
      }

      const { newValue, activeIndex } = getFingerNewValue({
        finger,
        move: true,
        values,
      })!;

      focusThumb({ sliderRef, activeIndex, setActive });
      setValueState(newValue);

      if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
        setDragging(true);
      }

      if (handleChange) {
        handleChange(nativeEvent, newValue, activeIndex);
      }
    });

    const handleTouchEnd = useEventCallback((nativeEvent: any) => {
      const finger = trackFinger(nativeEvent, touchId);
      setDragging(false);

      if (!finger) {
        return;
      }

      setActive(-1);
      if (nativeEvent.type === 'touchend') {
        setOpen(-1);
      }

      if (onMouseUp) {
        onMouseUp(nativeEvent);
      }

      touchId.current = undefined;

      stopListening();
    });

    const handleTouchStart = useEventCallback((nativeEvent: any) => {
      const touch = nativeEvent.changedTouches[0];
      if (touch != null) {
        touchId.current = touch.identifier;
      }
      const finger = trackFinger(nativeEvent, touchId);
      const { newValue, activeIndex } = getFingerNewValue({ finger, values })!;
      focusThumb({ sliderRef, activeIndex, setActive });

      setValueState(newValue);

      handleChange(nativeEvent, newValue, activeIndex);

      moveCount.current = 0;
      const doc = ownerDocument(sliderRef.current);
      doc.addEventListener('touchmove', handleTouchMove);
      doc.addEventListener('touchend', handleTouchEnd);
    });

    const handleMouseOver = useEventCallback((event: any) => {
      const index = Number(event.currentTarget.getAttribute('data-index'));
      setOpen(index);
    });

    const handleMouseLeave = useEventCallback(() => {
      setOpen(-1);
    });

    const handleMouseDown = useEventCallback((event: any) => {
      if (!disabled) {
        if (onMouseDown) {
          onMouseDown(event);
        }

        if (event.button !== 0) {
          return;
        }

        // Avoid text selection
        event.preventDefault();
        const finger = trackFinger(event, touchId);

        const { newValue, activeIndex } = getFingerNewValue({ finger, values })!;
        focusThumb({ sliderRef, activeIndex, setActive });

        setValueState(newValue);

        if (handleChange) {
          handleChange(event, newValue, activeIndex);
        }

        moveCount.current = 0;
        const doc = ownerDocument(sliderRef.current);
        doc.addEventListener('mousemove', handleTouchMove);
        doc.addEventListener('mouseup', handleTouchEnd);
      } else {
        // Avoid text selection
        event.preventDefault();
      }
    });

    const stopListening = useCallback(() => {
      const doc = ownerDocument(sliderRef.current);
      doc.removeEventListener('mousemove', handleTouchMove);
      doc.removeEventListener('mouseup', handleTouchEnd);
      doc.removeEventListener('touchmove', handleTouchMove);
      doc.removeEventListener('touchend', handleTouchEnd);
    }, [handleTouchEnd, handleTouchMove]);

    useEffect(() => {
      const { current: slider } = sliderRef;
      if (slider) {
        return () => {
          stopListening();
        };
      }
    }, [stopListening, handleTouchStart]);

    useEffect(() => {
      if (disabled) {
        stopListening();
      }
    }, [disabled, stopListening]);

    if (disabled && active !== -1) {
      setActive(-1);
    }

    const trackOffset = valueToPercent(range ? values[0] : min, min, max);
    const trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;
    const trackStyle = {
      ...axisProps[axis].offset(trackOffset),
      ...axisProps[axis].leap(trackLeap),
    };
    const annotationText = annotation ? ` ${annotation}` : '';
    return (
      <Styled.Slider ref={sliderRef} disabled={disabled} onMouseDown={handleMouseDown} {...rest}>
        <Styled.Rail />
        {!hideTrack && <Styled.Track style={{ ...trackStyle }} />}
        {values.map((value, index) => {
          const percent = valueToPercent(value, min, max);
          const style = axisProps[axis].offset(percent);

          return (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={index}>
              <Styled.Thumb
                data-index={index}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                style={{
                  ...style,
                  pointerEvents: disableSwap && active !== index ? 'none' : undefined,
                }}
              >
                <input
                  data-index={index}
                  type="range"
                  min={min}
                  max={max}
                  value={values[index]}
                  step={step}
                  disabled={disabled}
                  onChange={handleHiddenInputChange}
                />
                <Styled.LabelTooltip
                  open={open === index || active === index || labelTooltip === 'on'}
                  disabled={disabled}
                >
                  {values[index]}
                  {annotationText}
                </Styled.LabelTooltip>
              </Styled.Thumb>
            </React.Fragment>
          );
        })}
        <Styled.SliderAnnotation>
          <span>
            {min}
            {annotationText}
          </span>
          <span>
            {max}
            {annotationText}
          </span>
        </Styled.SliderAnnotation>
      </Styled.Slider>
    );
  }
);

Slider.defaultProps = {
  annotation: 'MB',
  min: 0,
  max: 100,
  step: 1,
  labelTooltip: LabelTooltip.Off,
};

Slider.propTypes = {
  defaultValue: PT.oneOfType([PT.array, PT.number]),
  value: PT.oneOfType([PT.array, PT.number]),
  min: PT.number,
  max: PT.number,
  onChange: PT.func,
  onMouseDown: PT.func,
  onMouseUp: PT.func,
  step: PT.number,
  annotation: PT.string,
  disabled: PT.bool,
  disableSwap: PT.bool,
  hideTrack: PT.bool,
  labelTooltip: PT.oneOf(objectValues(LabelTooltip)),
};

export default Slider;
