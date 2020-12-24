import { css } from 'styled-components';
// import type { With } from '@sfx-ui/utils/types';
import type { WithTheme } from '@sfx-ui/theme/entity';
// import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import { FontVariant as FV } from '@sfx-ui/utils/types/typography';
import { Size } from './types';

export const sizeMenuItemMixin = {
  [Size.Sm]: ({ theme: { typography: { font } } }: WithTheme) => css`
    padding: 4px 8px;
    min-height: 22px;
    ${font[FV.LabelSmall]}
  `,

  [Size.Md]: ({ theme: { typography: { font } } }: WithTheme) => css`
    padding: 8px 12px;
    min-height: 32px;
    ${font[FV.LabelNormal]}
  `,
};
