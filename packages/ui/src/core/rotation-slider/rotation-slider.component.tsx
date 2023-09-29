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
      angle = 10,
      onChange,
      onMouseDown,
      onMouseUp,
      step = 1,
      labelTooltipOptions = LabelTooltip.Off,
      annotation = '°',
      hideMarkText = false,
      showCurrentMarkText = false,
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

    const showMarkText = (index: number): boolean => {
      if (hideMarkText) return false;

      if (!showCurrentMarkText) return true;

      return getValue() === index;
    };

    const renderBar = (): JSX.Element[] => {
      const barDom = [];
      let barDiv;

      for (let i = min; i <= max; i += step) {
        barDiv = [];
        if (i % angle === 0 || i === max) {
          barDiv = (
            <Styled.RotationSliderMark key={i} style={{ ...markStyles }}>
              {showMarkText(i) && (
                <Styled.RotationSliderMarkText style={{ ...markTextStyles }}>
                  {i === min + 1 ? max : i}
                  <sup>{annotation}</sup>
                </Styled.RotationSliderMarkText>
              )}
              <Styled.RotationSliderBigDot />
            </Styled.RotationSliderMark>
          );
        } else if (i % 10 === 0) {
          barDiv = (
            <Styled.RotationSliderSmallDotWrapper key={i}>
              <Styled.RotationSliderSmallDot />
            </Styled.RotationSliderSmallDotWrapper>
          );
        }
        if (!Array.isArray(barDiv)) {
          barDom.push(barDiv);
        }
      }
      return barDom;
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
  angle: PT.number,
  onChange: PT.func,
  onMouseDown: PT.func,
  onMouseUp: PT.func,
  step: PT.number,
  annotation: PT.string,
  hideMarkText: PT.bool,
  showCurrentMarkText: PT.bool,
  railProps: PT.object,
  trackProps: PT.object,
  thumbProps: PT.object,
  labelTooltipProps: PT.object,
  markStyles: PT.object,
  markTextStyles: PT.object,
  labelTooltipOptions: PT.oneOf(objectValues(LabelTooltip)),
};

export default RotationSlider;
