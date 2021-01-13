import { css } from 'styled-components';
// import type { WithTheme } from '../../theme/entity';
// import { Color as PaletteColor } from '../../utils/types/palette';
import { Type } from './types';

export const typeArrowTickMixin = {
  [Type.Right]: css``,

  [Type.Left]: css`
    svg {
      transform: rotate(180deg);
    }
  `,

  [Type.Top]: css`
    svg {
      transform: rotate(-90deg);
    }
  `,

  [Type.Bottom]: css`
    svg {
      transform: rotate(90deg);
    }
  `,
};
