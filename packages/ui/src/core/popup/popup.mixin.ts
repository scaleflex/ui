import { css } from 'styled-components';
// import type { WithTheme } from '../../theme/entity';
// import { Color as PaletteColor } from '../../utils/types/palette';
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

// export const errorMixin = ({ theme: { palette } }: WithTheme) => css`
//   background: ${palette[PaletteColor.BackgroundSecondary]} !important;
//   border: 1px solid ${palette[PaletteColor.Error]} !important;
// `;
