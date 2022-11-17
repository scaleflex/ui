import { css } from 'styled-components';
// import type { WithTheme } from '../../theme/entity';
// import { Color as PaletteColor } from '../../utils/types/palette';
import { Position } from '../../utils/types';

export const typeArrowTickMixin = {
  [Position.Right]: css`
    svg {
      transform: rotate(-90deg);
      transition: transform 150ms ease-out;
    }
  `,

  [Position.Left]: css`
    svg {
      transform: rotate(90deg);
      transition: transform 150ms ease-out;
    }
  `,

  [Position.Top]: css`
    svg {
      transform: rotate(180deg);
      transition: transform 150ms ease-out;
    }
  `,

  [Position.Bottom]: css`
    svg {
      transform: rotate(0);
      transition: transform 150ms ease-out;
    }
  `,
};
