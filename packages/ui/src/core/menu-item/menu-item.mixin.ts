import { css } from 'styled-components';

import type { WithTheme } from '../../theme/entity';
import { FontVariant as FV } from '../../utils/types/typography';
import { Size } from './types';

export const sizeMenuItemMixin = {
  [Size.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css`
    padding: 8px 16px;
    min-height: 32px;
    ${font[FV.LabelMedium]}
  `,

  [Size.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css`
    padding: 11px 16px;
    min-height: 40px;
    ${font[FV.LabelLarge]}
  `,
};
