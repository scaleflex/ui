import { css } from 'styled-components';
import type { WithTheme } from '@sfx-ui/theme/entity';
import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import { Size } from './types';

export const sizeInputMixin = {
  [Size.Sm]: css`
    padding: 4px 8px;
    height: 24px;
  `,

  [Size.Md]: css`
    padding: 8px 12px;
    height: 30px;
  `,
};

export const errorMixin = ({ theme: { palette } }: WithTheme) => css`
  background: ${palette[PaletteColor.BackgroundSecondary]} !important;
  border: 1px solid ${palette[PaletteColor.Error]} !important;
`;
