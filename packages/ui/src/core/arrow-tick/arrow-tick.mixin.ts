import { css } from 'styled-components';
// import type { WithTheme } from '../../theme/entity';
// import { Color as PaletteColor } from '../../utils/types/palette';
import { Type } from './types';

export const typeArrowTickMixin = {
  [Type.Right]: css`
    svg {
      transform: rotate(0);
      transition: transform 150ms;
    }
  `,

  [Type.Left]: css`
    svg {
      transform: rotate(180deg);
      transition: transform 150ms;
    }
  `,

  [Type.Top]: css`
    svg {
      transform: rotate(-90deg);
      transition: transform 150ms;
    }
  `,

  [Type.Bottom]: css`
    svg {
      transform: rotate(90deg);
      transition: transform 150ms;
    }
  `,
};
