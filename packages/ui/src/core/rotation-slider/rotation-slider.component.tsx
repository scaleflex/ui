/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { RotationSliderProps } from './rotation-slider.props';
import Slider from '../slider';
import { LabelTooltip } from '../slider/types';
import Styled from './rotation-slider.styles';

const RotationSlider = intrinsicComponent<RotationSliderProps, HTMLSpanElement>(
  (
    {
      min = 0,
      max = 100,
      onChange,
      onMouseDown,
      onMouseUp,
      step = 1,
      labelTooltipOptions = LabelTooltip.Off,
      annotation = '°',
      hideMarkText = false,
      value,
      railProps = {},
      trackProps = {},
      thumbProps = {},
      labelTooltipProps = {},
      markStyles = {},
      markTextStyles = {},
      ...rest
    }: RotationSliderProps,
    ref
  ): JSX.Element => {
    const handleChange = (event: any, newValue: number | number[]): void => {
      if (onChange) {
        onChange(event, newValue);
      }
    };

    const renderBar = (): JSX.Element[] => {
      const barDom = [];
      let barDiv;

      for (let i = min; i <= max; i += step) {
        if (i % 10 === 0 || i === max || (step === 1 && i % 5 === 0)) {
          barDiv = (
            <Styled.RotationSliderMark key={i} style={{ ...markStyles }}>
              {!hideMarkText && (
                <Styled.RotationSliderMarkText style={{ ...markTextStyles }}>
                  {i === min + 1 ? max : i}
                  <sup>{annotation}</sup>
                </Styled.RotationSliderMarkText>
              )}
              <Styled.RotationSliderBigDot />
            </Styled.RotationSliderMark>
          );
        } else {
          barDiv = (
            <Styled.RotationSliderSmallDotWrapper key={i}>
              <Styled.RotationSliderSmallDot />
            </Styled.RotationSliderSmallDotWrapper>
          );
        }
        barDom.push(barDiv);
      }
      return barDom;
    };

    const getValue = (): number | number[] => {
      if (value || value === 0) {
        if (value > max) {
          return max;
        }
        if (value < min) {
          return min;
        }
        return value;
      }
      return min;
    };

    return (
      <Slider
        min={min}
        max={max}
        step={step}
        value={getValue()}
        hideTrack
        hideAnnotation
        annotation={annotation}
        onChange={handleChange}
        labelTooltip={labelTooltipOptions}
        ref={ref}
        components={{
          Rail: (props: any, style: any) => (
            <Styled.RotationSliderList {...props} styles={{ ...style }}>
              {renderBar()}
            </Styled.RotationSliderList>
          ),
          Thumb: Styled.RotationSliderControl,
        }}
        componentsProps={{
          rail: {
            ...railProps,
            style: {
              ...railProps.style,
            },
          },
          track: {
            ...trackProps,
            style: {
              ...trackProps.style,
            },
          },
          thumb: {
            ...thumbProps,
            style: {
              top: '15%',
              ...thumbProps.style,
            },
          },
          labelTooltip: {
            ...labelTooltipProps,
            style: {
              ...labelTooltipProps.style,
            },
          },
        }}
        {...rest}
        defaultValue={Number(rest.defaultValue)}
        style={{ width: 'auto', height: 'auto', ...rest.style }}
      />
    );
  }
);

RotationSlider.defaultProps = {
  annotation: '°',
  min: 0,
  max: 100,
  step: 1,
  labelTooltipOptions: LabelTooltip.Off,
};

RotationSlider.propTypes = {
  value: PT.oneOfType([PT.array, PT.number]),
  min: PT.number,
  max: PT.number,
  onChange: PT.func,
  onMouseDown: PT.func,
  onMouseUp: PT.func,
  step: PT.number,
  annotation: PT.string,
  hideMarkText: PT.bool,
  railProps: PT.object,
  trackProps: PT.object,
  thumbProps: PT.object,
  labelTooltipProps: PT.object,
  markStyles: PT.object,
  markTextStyles: PT.object,
  labelTooltipOptions: PT.oneOf(objectValues(LabelTooltip)),
};

export default RotationSlider;
