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
import React, { useEffect, useRef, useState } from 'react';
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
      showAnntotaionTooltip = false,
      annotation = '',
      ...rest
    }: ContinuousSliderProps,
    ref
  ): JSX.Element => {
    const [sliderValue, setSliderValue] = useState<number | undefined>(value);

    const [heldSlider, setHeldSlider] = useState<number | null>(null);
    const [isSliding, setIsSliding] = useState(false);
    const [slidersContainer, setSlidersContainer] = useState<HTMLElement | null>(null);
    const slidersContainerRef = useRef<any | null>(null);

    const slider1Ref = useRef(null);

    const firstRender = useRef(true);

    useEffect(() => {
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }
      if (onChange) {
        onChange(sliderValue);
      }
    }, [sliderValue]);

    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (slidersContainerRef.current) {
        setSlidersContainer(slidersContainerRef.current);
      }
    }, [slidersContainerRef]);

    const handleClick = ({ nativeEvent }: any): void => {
      let { offsetX } = nativeEvent;
      const offsetValue = mapValueBySlidersWidth(offsetX, false)?.toString();
      offsetX = parseNumber(offsetValue);

      setSliderValue(offsetX);
    };

    const prepareIfTouchEvent = (e: any): TouchEvent => {
      if (e.touches) {
        e.pageX = e.touches[0].pageX;
      }

      return e;
    };

    const onDragSlider = (e: any): void => {
      dragSlider(prepareIfTouchEvent(e), setSliderValue);
    };

    const dragSlider = (
      { pageX }: any,
      setSliderPosition: React.Dispatch<React.SetStateAction<number | undefined>>
    ): number | void => {
      if (pageX) {
        let containerLeft: any;
        if (slidersContainer?.getBoundingClientRect()) {
          containerLeft = slidersContainer.getBoundingClientRect().left;
        }

        setSliderPosition(() => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          let newPosition = mapValueBySlidersWidth(pageX - containerLeft, false)!;

          if (newPosition < start || newPosition === 0) {
            newPosition = start;
          } else if (newPosition > end) {
            newPosition = end;
          }

          let position;
          if (newPosition || newPosition === 0) {
            position = newPosition.toString();
          }
          return parseNumber(position);
        });

        document.body.addEventListener('mouseleave', disableDragging);
      }
    };

    const activateDragging = (e: any): void => {
      if (onDragStart) {
        onDragStart(e);
      }
      setIsSliding(true);
      e.preventDefault();
      document.body.addEventListener('mousemove', onDragSlider);
      document.body.addEventListener('touchmove', onDragSlider);
      setHeldSlider(1);
      disablingEvents();
    };

    const disableDragging = (e: any): void => {
      document.body.removeEventListener('mousemove', onDragSlider);
      document.body.removeEventListener('touchmove', onDragSlider);

      document.body.removeEventListener('mouseup', disableDragging);
      document.body.removeEventListener('mouseleave', disableDragging);
      document.body.removeEventListener('touchend', disableDragging);
      document.body.removeEventListener('touchleave', disableDragging);
      document.body.removeEventListener('touchcancel', disableDragging);
      setTimeout(() => setIsSliding(false), 0);
      if (onDragEnd) {
        onDragEnd(e);
      }
    };

    const disablingEvents = (): void => {
      document.body.addEventListener('mouseup', disableDragging);
      document.body.addEventListener('touchend', disableDragging);
      document.body.addEventListener('touchleave', disableDragging);
      document.body.addEventListener('touchcancel', disableDragging);
    };

    const mapValueBySlidersWidth = (value: number | undefined, mapToWidth = true): number | undefined => {
      if (!slidersContainer) {
        return;
      }
      const slidersContainerWidth = slidersContainer.getBoundingClientRect().width - 10;

      if (value === 0 && start < 0 && mapToWidth) {
        return slidersContainerWidth / 2;
      }

      if (!value) {
        return 0;
      }
      // 10 = the slider controls circle's width

      const mapRangeFromStart = mapToWidth ? start : 0;
      const mapRangeFromEnd = mapToWidth ? end : slidersContainerWidth;
      const mapRangeToStart = mapToWidth ? 0 : start;
      const mapRangeToEnd = mapToWidth ? slidersContainerWidth : end;

      if (start < 0 && !mapToWidth) {
        return (
          ((value - mapRangeFromStart) / (mapRangeFromEnd - mapRangeFromStart)) * (mapRangeToEnd - mapRangeToStart) -
          end
        );
      }
      return (
        ((value - mapRangeFromStart) / (mapRangeFromEnd - mapRangeFromStart)) *
        (mapRangeToEnd - mapRangeToStart + mapRangeToStart)
      );
    };

    const parseNumber = (number: string | undefined): number | undefined => {
      if (number || number === '0') {
        return step % 1 === 0 ? parseInt(number) : +parseFloat(number).toFixed(2);
      }
    };

    const absToPercentage = (value: number | undefined): number | undefined => {
      if (slidersContainer && value) {
        return (value / slidersContainer.getBoundingClientRect().width) * 100;
      }
      return value;
    };

    if (slidersContainer && !hideOverlay) {
      let minSliderPercentage: number | undefined = 0;
      let maxSliderPercentage: number | undefined = 0;

      if (sliderValue) {
        minSliderPercentage = absToPercentage(mapValueBySlidersWidth(sliderValue));
        maxSliderPercentage = absToPercentage(mapValueBySlidersWidth(sliderValue));
      }

      if (slidersContainerRef.current && minSliderPercentage && maxSliderPercentage) {
        slidersContainerRef.current!.children[0].style.left = 0;
        slidersContainerRef.current!.children[0].style.width = `${minSliderPercentage}%`;
      }
    }

    const annotationText = annotation ? ` ${annotation}` : '';

    return (
      <Styled.Slider {...rest} ref={ref}>
        <Styled.SliderContainer onClick={isSliding ? undefined : handleClick} ref={slidersContainerRef}>
          {!hideOverlay && <Styled.SliderOverlay />}
          <Styled.SliderContainerLabel
            onMouseDown={(e) => activateDragging(e)}
            onTouchStart={(e) => activateDragging(e)}
            ref={slider1Ref}
            style={{
              left: `${mapValueBySlidersWidth(sliderValue)}px`,
              zIndex: heldSlider === 1 ? 1009 : undefined,
            }}
          >
            {showAnntotaionTooltip && (
              <Styled.SliderContainerControlTooltip>
                {sliderValue}
                {annotationText}
              </Styled.SliderContainerControlTooltip>
            )}
            <Styled.SliderContainerControl />
          </Styled.SliderContainerLabel>
        </Styled.SliderContainer>
        <Styled.SliderAnnotation>
          <span>
            {sliderValue}
            {annotationText}
          </span>
        </Styled.SliderAnnotation>
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
  showAnntotaionTooltip: false,
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
  showAnntotaionTooltip: PT.bool,
  hideOverlay: PT.bool,
};

export default ContinuousSlider;
