import { css } from 'styled-components';
// import type { WithTheme } from '@sfx-ui/theme/entity';
// import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import { Type } from './types';

export const typeArrowMixin = {
  [Type.Right]: css``,

  [Type.Left]: css`
    transform: rotate(180deg);
  `,

  [Type.Top]: css`
    transform: rotate(-90deg);
  `,

  [Type.Bottom]: css`
    transform: rotate(90deg);
  `,
};
