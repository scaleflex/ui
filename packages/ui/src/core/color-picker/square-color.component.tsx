/* eslint-disable id-length */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import PT, { Validator } from 'prop-types';
import throttle from 'lodash.throttle';
import Circle from '@scaleflex/icons/circle';

import { intrinsicComponent, drawSquare, RGBToHex } from '../../utils/functions';
import type { SquareColorProps, ColorType } from './color-picker.props';
import Styled from './color-picker.styles';

const CROSS_OFFSET = 12;
const DELAY = 20;
const SquareColor = intrinsicComponent<SquareColorProps, HTMLDivElement>(
  ({ onChange, reviewRef, squareSize, color }: SquareColorProps, ref): JSX.Element => {
    const width = squareSize;
    const height = Number((squareSize * 1.09).toFixed(2));
    const [squareRef, setSquareRef] = useState<HTMLDivElement | null>(null);
    const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null);

    useEffect(() => {
      if (canvasRef) {
        drawSquare(canvasRef, color.hue, width, height);
      }
    }, [canvasRef, color.hue, height, width]);

    useEffect(() => {
      if (squareRef && canvasRef && reviewRef) {
        const { offsetTop, offsetLeft } = squareRef;
        const ctx = canvasRef.getContext('2d');

        const computePosition = (e: MouseEvent): [number, number] => {
          const x = Math.max(
            CROSS_OFFSET * -1,
            Math.min(e.clientX - (offsetLeft + reviewRef.getBoundingClientRect().x - 20), width - CROSS_OFFSET)
          );

          const y = Math.max(
            CROSS_OFFSET * -1,
            Math.min(e.clientY - (offsetTop + reviewRef.getBoundingClientRect().y - 20), height - CROSS_OFFSET)
          );

          return [x, y];
        };

        const changeColor = (e: MouseEvent) => {
          if (ctx) {
            const [x, y] = computePosition(e);
            const x1 = Math.min(x + CROSS_OFFSET, width - 1);
            const y1 = Math.min(y + CROSS_OFFSET, height - 1);
            const [r, g, b] = ctx.getImageData(x1, y1, 1, 1).data;
            return {
              rgb: [r, g, b],
              hex: RGBToHex([r, g, b]),
            };
          }
        };

        const onMouseMove = throttle((e: MouseEvent) => {
          const val = changeColor(e);
          if (val) {
            onChange(val.hex, val.rgb, computePosition(e));
          }
        }, DELAY);

        const onMouseUp = (e: MouseEvent): void => {
          const val = changeColor(e);
          if (val) {
            onChange(val.hex, val.rgb, computePosition(e));
          }
          document.body.removeEventListener('mousemove', onMouseMove);
          document.body.removeEventListener('mouseup', onMouseUp);
        };

        const onMouseDown = (): void => {
          document.body.addEventListener('mousemove', onMouseMove);
          document.body.addEventListener('mouseup', onMouseUp);
        };

        canvasRef.addEventListener('mousedown', onMouseDown);
        return () => {
          canvasRef.removeEventListener('mousedown', onMouseDown);
        };
      }
    }, [canvasRef, reviewRef, squareRef, height, width, onChange]);

    return (
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      <Styled.SquareColorContainer ref={setSquareRef || ref}>
        <Styled.SquareColorCanvas ref={setCanvasRef} width={width} height={height} />
        <Styled.SquareColorController style={{ left: color.circleSquarePos[0], top: color.circleSquarePos[1] }}>
          <Circle color="white" />
        </Styled.SquareColorController>
      </Styled.SquareColorContainer>
    );
  }
);

SquareColor.defaultProps = {};

SquareColor.propTypes = {
  onChange: PT.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  reviewRef: PT.any,
  squareSize: PT.number.isRequired,
  color: PT.object.isRequired as Validator<ColorType>,
};

export default SquareColor;
