import { css } from 'styled-components';
import { Horizontal, Vertical } from './types';

export const positionHorizontalMixin = {
  [Horizontal.Left]: css`
    left: 25px;
    right: auto;
  `,

  [Horizontal.Center]: css`
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  `,

  [Horizontal.Right]: css`
    left: auto;
    right: 25px;
  `,
};

export const positionVerticalMixin = {
  [Vertical.Top]: css`
    top: 25px;
    bottom: auto;
  `,

  [Vertical.Bottom]: css`
    top: auto;
    bottom: 25px;
  `,
};
