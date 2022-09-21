import { css } from 'styled-components';
import { WithTheme } from '../../theme/entity';
// import type { WithTheme } from '../../theme/entity';
// import { Color as PaletteColor } from '../../utils/types/palette';
import { FontVariant as FV } from '../../utils/types/typography';

import { Size } from './types';

export const fontTooltipMixin = {
  [Size.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => font[FV.LabelSmall],

  [Size.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => font[FV.LabelNormal],
};

export const sizeTooltipMixin = {
  [Size.Sm]: css`
    padding: 4px 8px;
  `,

  [Size.Md]: css`
    padding: 8px 12px;
  `,
};
