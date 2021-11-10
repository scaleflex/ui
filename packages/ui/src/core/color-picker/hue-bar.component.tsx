/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import PT from 'prop-types';
import throttle from 'lodash.throttle';
import { intrinsicComponent, initHueBar } from '../../utils/functions';
import type { HueBarProps } from './color-picker.props';
import Styled from './color-picker.styles';

const DELAY = 20;
const HueBar = intrinsicComponent<HueBarProps, HTMLDivElement>(
  ({ onChange, reviewRef, hueWidth, sliderPos }: HueBarProps, ref): JSX.Element => {
    const hueHeight = 8;
    const [barRef, setBarRef] = useState<HTMLDivElement | null>(null);
    const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null);

    useEffect(() => {
      if (canvasRef) {
        initHueBar(canvasRef, hueWidth, hueHeight);
      }
    }, [canvasRef, hueWidth]);

    useEffect(() => {
      if (barRef && canvasRef && reviewRef) {
        const computePosition = (e: MouseEvent) =>
          Math.max(
            canvasRef.offsetLeft * -1,
            Math.min(e.clientX - (reviewRef.getBoundingClientRect().x + barRef.offsetLeft - 20), hueWidth - 5)
          );

        const computeHue = (x: number) => (x + canvasRef.offsetLeft) * (360 / hueWidth);

        const onMouseMove = throttle((e) => {
          const x = computePosition(e);
          onChange(computeHue(x), x);
        }, DELAY);
        const onMouseUp = (e: MouseEvent) => {
          const x = computePosition(e);
          onChange(computeHue(x), x);
          document.body.removeEventListener('mousemove', onMouseMove);
          document.body.removeEventListener('mouseup', onMouseUp);
        };
        const onMouseDown = () => {
          document.body.addEventListener('mousemove', onMouseMove);
          document.body.addEventListener('mouseup', onMouseUp);
        };
        barRef.addEventListener('mousedown', onMouseDown);
        return () => {
          barRef.removeEventListener('mousedown', onMouseDown);
        };
      }
    }, [barRef, hueWidth, canvasRef, reviewRef, onChange]);
    return (
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      <Styled.HueBarContainer ref={setBarRef || ref}>
        <Styled.HueBarCanvas ref={setCanvasRef} width={hueWidth} height={hueHeight} />
        <Styled.HueBarSlider
          style={{
            left: sliderPos,
            top: (canvasRef ? canvasRef.offsetTop : 0) - 1,
          }}
        />
      </Styled.HueBarContainer>
    );
  }
);

HueBar.defaultProps = {};

HueBar.propTypes = {
  onChange: PT.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  reviewRef: PT.any,
  hueWidth: PT.number.isRequired,
  sliderPos: PT.number.isRequired,
};

export default HueBar;
