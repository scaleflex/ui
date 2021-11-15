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
import throttle from 'lodash.throttle';

import { intrinsicComponent } from '../../utils/functions';
import type { RotationSliderProps } from './rotation-slider.props';
import Styled from './rotation-slider.styles';

const RotationSlider = intrinsicComponent<RotationSliderProps, HTMLDivElement>(
  (
    {
      start = -60,
      end = 60,
      onChange,
      step = 1,
      isActive = false,
      showAnntotaionTooltip = false,
      annotation = '°',
      value = 0,
      ...rest
    }: RotationSliderProps,
    ref
  ): JSX.Element => {
    const [val, setValue] = useState<number | undefined>(value);
    const [barRef, seBarRef] = useState<HTMLDivElement | null>(null);
    const [lastPointRef, setLastPointRef] = useState<HTMLLIElement | null>(null);
    const [isSliding, setIsSliding] = useState(false);
    const annotationText = annotation ? ` ${annotation}` : '';

    useEffect(() => {
      if (onChange) {
        onChange(val);
      }
    }, [val]);

    const barClick = ({ nativeEvent }: any): void => {
      const { pageX } = nativeEvent;
      const offsetValue = mapValueBySlidersWidth(pageX, false)?.toString();

      const val = parseNumber(offsetValue);

      setValue(val);
    };

    const activateDragging = (e: any): void => {
      setIsSliding(true);
      e.preventDefault();
      document.body.addEventListener('mousemove', dragSlider);

      disablingEvents();
    };

    const disableDragging = (): void => {
      document.body.removeEventListener('mousemove', dragSlider);

      document.body.removeEventListener('mouseup', disableDragging);
      document.body.removeEventListener('mouseleave', disableDragging);
      setTimeout(() => setIsSliding(false), 0);
      // onDragEnd(percentage);
    };

    const disablingEvents = (): void => {
      document.body.addEventListener('mouseup', disableDragging);
    };

    const dragSlider = throttle(({ pageX }: any): void => {
      if (pageX) {
        let containerLeft: any;
        if (barRef?.getBoundingClientRect()) {
          containerLeft = barRef.getBoundingClientRect().left;
        }

        setValue((): any => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          let newPosition = mapValueBySlidersWidth(pageX - containerLeft, false)!;

          if (newPosition < start) {
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
    });

    const parseNumber = (number: string | undefined): number | undefined => {
      if (number || number === '0') {
        return step % 1 === 0 ? parseInt(number) : +parseFloat(number).toFixed(2);
      }
    };

    const mapValueBySlidersWidth = (value: number | undefined, mapToWidth = true): number | undefined => {
      if (!barRef || !lastPointRef) {
        return;
      }

      const slidersContainerWidth = lastPointRef.getBoundingClientRect().x;

      if (value === 0 && mapToWidth) {
        return slidersContainerWidth / 2;
      }

      if (!value) {
        return;
      }

      const mapRangeFromStart = mapToWidth ? start : 0;
      const mapRangeFromEnd = mapToWidth ? end : slidersContainerWidth;
      const mapRangeToStart = mapToWidth ? 0 : start;
      const mapRangeToEnd = mapToWidth ? slidersContainerWidth : end;

      if (!mapToWidth) {
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

    const renderBar = () => {
      const barDom = [];
      let barDiv;

      const endloop = start < 0 ? end : end + start;

      for (let i = start; i <= endloop; i += step) {
        if (i % 10 === 0 || i === end || (step === 1 && i % 5 === 0)) {
          barDiv = (
            <Styled.RotationSliderMark key={i}>
              <Styled.RotationSliderMarkText>
                {i === end + 1 ? end : i}
                {annotationText}
              </Styled.RotationSliderMarkText>
              <Styled.RotationSliderBigDot ref={i === end ? setLastPointRef : null} />
            </Styled.RotationSliderMark>
          );
        } else {
          barDiv = <Styled.RotationSliderSmallDot key={i} />;
        }
        barDom.push(barDiv);
      }
      return barDom;
    };

    return (
      <Styled.RotationSlider {...rest} ref={ref}>
        <Styled.RotationSliderContainer ref={seBarRef} onClick={isSliding ? undefined : barClick}>
          <Styled.RotationSliderList>{renderBar()}</Styled.RotationSliderList>

          <Styled.RotationSliderDrag
            onMouseDown={(e) => activateDragging(e)}
            style={{
              left: `${mapValueBySlidersWidth(val, true)}px`,
            }}
          >
            <Styled.RotationSliderLabel>
              {showAnntotaionTooltip && (
                <Styled.RotationSliderTooltip isActive={isActive}>
                  {val === 0 ? val : val || start}
                  {annotationText}
                </Styled.RotationSliderTooltip>
              )}
              <Styled.RotationSliderControl />
            </Styled.RotationSliderLabel>
          </Styled.RotationSliderDrag>
        </Styled.RotationSliderContainer>
      </Styled.RotationSlider>
    );
  }
);

RotationSlider.defaultProps = {
  annotation: '°',
  start: 0,
  end: 100,
  step: 1,
};

RotationSlider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  value: PT.number.isRequired,
  start: PT.number,
  end: PT.number,
  onChange: PT.func,
  step: PT.number,
  isActive: PT.bool,
  showAnntotaionTooltip: PT.bool,
  annotation: PT.string,
};

export default RotationSlider;
