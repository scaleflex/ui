import { css } from 'styled-components';
import { Position } from './types';

export const PopperMixin = {
  [Position.Auto]: css`
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  `,
  [Position.AutoEnd]: css`
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  `,
  [Position.AutoStart]: css`
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  `,

  [Position.Right]: css`
    left: -4px;
  `,
  [Position.RightEnd]: css`
    left: -4px;
  `,
  [Position.RightStart]: css`
    left: -4px;
  `,

  [Position.Left]: css`
    right: -4px;
  `,
  [Position.LeftEnd]: css`
    right: -4px;
  `,
  [Position.LeftStart]: css`
    right: -4px;
  `,
  [Position.Top]: css`
    bottom: -4px;
  `,
  [Position.TopEnd]: css`
    bottom: -4px;
  `,
  [Position.TopStart]: css`
    bottom: -4px;
  `,

  [Position.Bottom]: css`
    top: -4px;
  `,
  [Position.BottomEnd]: css`
    top: -4px;
  `,
  [Position.BottomStart]: css`
    top: -4px;
  `,
};
