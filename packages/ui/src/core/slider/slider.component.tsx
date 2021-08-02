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

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { SliderProps } from './slider.props';
import Styled from './slider.styles';
import { NumberofSliders } from './types';

const Slider = intrinsicComponent<SliderProps, HTMLDivElement>(
  (
    {
      value: { from = 10, to = 50 } = {},
      min = 0,
      max = 100,
      onChange = () => '',
      step = 1,
      isActive = false,
      annotation = '',
      numberOfSliders = NumberofSliders.One,
      ...rest
    }: SliderProps,
    ref
  ): JSX.Element => {
    const [slider1Value, setSlider1Value] = useState<number | undefined>(parseInt(from.toString()));
    const [slider2Value, setSlider2Value] = useState<number | undefined>(
      numberOfSliders === 1 ? 0 : parseInt(to.toString())
    );
    const [heldSlider, setHeldSlider] = useState<number | null>(null);
    const [isSliding, setIsSliding] = useState(false);
    const [slidersContainer, setSlidersContainer] = useState<HTMLElement | null>(null);
    const slidersContainerRef = useRef<any | null>(null);
    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);
    const firstRender = useRef(true);

    useEffect(() => {
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }

      let slidersVals = { from: slider1Value, to: slider2Value };

      if (slider1Value && slider2Value && slider1Value > slider2Value) {
        slidersVals = { from: slider2Value, to: slider1Value };
      }

      onChange(slidersVals);
    }, [slider1Value, slider2Value]);

    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (slidersContainerRef.current) {
        setSlidersContainer(slidersContainerRef.current);
      }
    }, [slidersContainerRef]);

    const onDragSlider1 = (e: any): void => {
      dragSlider(prepareIfTouchEvent(e), setSlider1Value);
    };

    const onDragSlider2 = (e: any): void => {
      dragSlider(prepareIfTouchEvent(e), setSlider2Value);
    };

    const prepareIfTouchEvent = (e: any): TouchEvent => {
      if (e.touches) {
        e.pageX = e.touches[0].pageX;
      }

      return e;
    };

    const activateSlider1Dragging = (e: any): void => {
      setIsSliding(true);
      e.preventDefault();
      document.body.addEventListener('mousemove', onDragSlider1);
      document.body.addEventListener('touchmove', onDragSlider1);
      setHeldSlider(1);
      disablingEvents();
    };

    const activateSlider2Dragging = (e: any): void => {
      setIsSliding(true);
      e.preventDefault();
      document.body.addEventListener('mousemove', onDragSlider2);
      document.body.addEventListener('touchmove', onDragSlider2);
      setHeldSlider(2);
      disablingEvents();
    };

    const disableSlidersDragging = (): void => {
      document.body.removeEventListener('mousemove', onDragSlider1);
      document.body.removeEventListener('touchmove', onDragSlider1);
      document.body.removeEventListener('mousemove', onDragSlider2);
      document.body.removeEventListener('touchmove', onDragSlider2);
      document.body.removeEventListener('mouseup', disableSlidersDragging);
      document.body.removeEventListener('mouseleave', disableSlidersDragging);
      document.body.removeEventListener('touchend', disableSlidersDragging);
      document.body.removeEventListener('touchleave', disableSlidersDragging);
      document.body.removeEventListener('touchcancel', disableSlidersDragging);
      setTimeout(() => setIsSliding(false), 0);
    };

    const disablingEvents = (): void => {
      document.body.addEventListener('mouseup', disableSlidersDragging);
      document.body.addEventListener('touchend', disableSlidersDragging);
      document.body.addEventListener('touchleave', disableSlidersDragging);
      document.body.addEventListener('touchcancel', disableSlidersDragging);
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

          if (newPosition < min) {
            newPosition = min;
          } else if (newPosition > max) {
            newPosition = max;
          }

          let position;
          if (newPosition || newPosition === 0) {
            position = newPosition.toString();
          }
          return parseNumber(position);
        });

        document.body.addEventListener('mouseleave', disableSlidersDragging);
      }
    };

    const mapValueBySlidersWidth = (value: number | undefined, mapToWidth = true): number | undefined => {
      if (!slidersContainer) {
        return;
      }
      if (!value) {
        return 0;
      }
      // 10 = the slider controls circle's width
      const slidersContainerWidth = slidersContainer.getBoundingClientRect().width - 10;
      const mapRangeFromMin = mapToWidth ? min : 0;
      const mapRangeFromMax = mapToWidth ? max : slidersContainerWidth;
      const mapRangeToMin = mapToWidth ? 0 : min;
      const mapRangeToMax = mapToWidth ? slidersContainerWidth : max;

      return (
        ((value - mapRangeFromMin) / (mapRangeFromMax - mapRangeFromMin)) *
        (mapRangeToMax - mapRangeToMin + mapRangeToMin)
      );
    };

    const changeSliderValueByClick = ({ nativeEvent }: any): void => {
      let { offsetX } = nativeEvent;
      const offsetValue = mapValueBySlidersWidth(offsetX, false)?.toString();
      offsetX = parseNumber(offsetValue);
      const slider1Reminder = Math.abs(offsetX - slider1Value!);
      const slider2Reminder = Math.abs(offsetX - slider2Value!);
      if (numberOfSliders === 2) {
        if (slider1Reminder < slider2Reminder) {
          setSlider1Value(offsetX);
        } else {
          setSlider2Value(offsetX);
        }
      } else {
        setSlider1Value(offsetX);
      }
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

    if (slidersContainer) {
      let minSliderPercentage: number | undefined = 0;
      let maxSliderPercentage: number | undefined = 0;
      if (numberOfSliders === 1) {
        if (slider1Value) {
          minSliderPercentage = absToPercentage(mapValueBySlidersWidth(slider1Value));
          maxSliderPercentage = absToPercentage(mapValueBySlidersWidth(slider1Value));
        }
      } else if (slider1Value && slider2Value) {
        minSliderPercentage = absToPercentage(
          mapValueBySlidersWidth(slider1Value > slider2Value ? slider2Value : slider1Value)
        );
        maxSliderPercentage = absToPercentage(
          mapValueBySlidersWidth(slider2Value > slider1Value ? slider2Value : slider1Value)
        );
      }

      if (slidersContainerRef.current && minSliderPercentage && maxSliderPercentage) {
        if (numberOfSliders === 1) {
          slidersContainerRef.current!.children[0].style.left = 0;
          slidersContainerRef.current!.children[0].style.width = `${minSliderPercentage}%`;
        } else if (numberOfSliders === 2) {
          slidersContainerRef.current!.children[0].style.left = `${minSliderPercentage}%`;
          slidersContainerRef.current!.children[0].style.width = `${maxSliderPercentage - minSliderPercentage}%`;
        }
      }
    }

    const annotationText = annotation ? ` ${annotation}` : '';

    return (
      <Styled.Slider {...rest} ref={ref}>
        <Styled.SliderContainer onClick={isSliding ? undefined : changeSliderValueByClick} ref={slidersContainerRef}>
          <Styled.SliderOverlay isActive={isActive} />
          <Styled.SliderContainerLabel
            onMouseDown={(e) => activateSlider1Dragging(e)}
            onTouchStart={(e) => activateSlider1Dragging(e)}
            ref={slider1Ref}
            style={{
              left: `${mapValueBySlidersWidth(slider1Value)}px`,
              zIndex: heldSlider === 1 ? 1009 : undefined,
            }}
          >
            <Styled.SliderContainerControlTooltip isActive={isActive}>
              {slider1Value}
              {annotationText}
            </Styled.SliderContainerControlTooltip>

            <Styled.SliderContainerControl isActive={isActive} />
          </Styled.SliderContainerLabel>
          {numberOfSliders === 2 && (
            <Styled.SliderContainerLabel
              onMouseDown={activateSlider2Dragging}
              onTouchStart={activateSlider2Dragging}
              ref={slider2Ref}
              style={{
                left: `${mapValueBySlidersWidth(slider2Value)}px`,
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                zIndex: heldSlider === 2 ? 1009 : undefined,
              }}
            >
              <Styled.SliderContainerControlTooltip isActive={isActive}>
                {slider2Value}
                {annotationText}
              </Styled.SliderContainerControlTooltip>
              <Styled.SliderContainerControl isActive={isActive} />
            </Styled.SliderContainerLabel>
          )}
        </Styled.SliderContainer>
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
  numberOfSliders: NumberofSliders.One,
  annotation: 'MB',
  min: 0,
  max: 100,
  step: 1,
};

Slider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  value: PT.object.isRequired,
  min: PT.number,
  max: PT.number,
  onChange: PT.func.isRequired,
  step: PT.number,
  isActive: PT.bool.isRequired,
  annotation: PT.string,
  numberOfSliders: PT.oneOf(objectValues(NumberofSliders)),
};

export default Slider;
