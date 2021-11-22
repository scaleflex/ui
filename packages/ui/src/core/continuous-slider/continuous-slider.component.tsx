/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable consistent-return */
/* eslint-disable unicorn/prefer-number-properties */
/* eslint-disable id-length */
/* eslint-disable no-use-before-define */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable radix */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { ContinuousSliderProps } from './continuous-slider.props';
import Styled from './continuous-slider.styles';

const ContinuousSlider = intrinsicComponent<ContinuousSliderProps, HTMLDivElement>(
  (
    {
      value = 0,
      start = 0,
      end = 100,
      onChange,
      onDragStart,
      onDragEnd,
      step = 1,
      hideOverlay = false,
      // showAnntotaionTooltip = false,
      annotation = '',
      ...rest
    }: ContinuousSliderProps,
    ref
  ): JSX.Element => {
    const [sliderValue, setSliderValue] = useState<number | undefined>(value);

    useEffect(() => {
      if (onChange) {
        onChange(sliderValue);
      }
    }, [sliderValue]);

    const handleClick = (e: any): void => {
      setSliderValue(e.target.value);
    };

    const handleOnChange = (e: any) => {
      if (onDragStart) {
        onDragStart(e);
      }
      setSliderValue(e.target.value);
      if (onDragEnd) {
        onDragEnd(e);
      }
    };

    const annotationText = annotation ? ` ${annotation}` : '';
    return (
      <Styled.Slider hideOverlay={hideOverlay} {...rest} ref={ref}>
        <input
          type="range"
          min={start}
          max={end}
          value={sliderValue}
          step={step}
          className="slider"
          onClick={handleClick}
          onChange={handleOnChange}
        />

        {/* {showAnntotaionTooltip && (
          <Styled.SliderContainerControlTooltip>
            {sliderValue}
            {annotationText}
          </Styled.SliderContainerControlTooltip>
        )} */}
        <Styled.SliderAnnotation>{`${sliderValue}${annotationText}`}</Styled.SliderAnnotation>
      </Styled.Slider>
    );
  }
);

ContinuousSlider.defaultProps = {
  annotation: '%',
  start: 0,
  end: 100,
  step: 1,
  hideOverlay: false,
  // showAnntotaionTooltip: false,
};

ContinuousSlider.propTypes = {
  value: PT.number.isRequired,
  start: PT.number,
  end: PT.number,
  onChange: PT.func,
  onDragStart: PT.func,
  onDragEnd: PT.func,
  step: PT.number,
  annotation: PT.string,
  // showAnntotaionTooltip: PT.bool,
  hideOverlay: PT.bool,
};

export default ContinuousSlider;
