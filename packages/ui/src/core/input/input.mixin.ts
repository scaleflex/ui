import { css } from 'styled-components';
import type { WithTheme } from '../../theme/entity';
import { Color as PaletteColor } from '../../utils/types/palette';
import { FontVariant as FV } from '../../utils/types/typography';
import { Size } from './types';

export const sizeInputMixin = {
  [Size.Sm]: ({ theme: { typography: { font } } }: WithTheme) => css`
    padding: 4px 8px;
    height: 24px;
    ${font[FV.InputSm]}
  `,

  [Size.Md]: ({ theme: { typography: { font } } }: WithTheme) => css`
    padding: 8px 12px;
    height: 30px;
    ${font[FV.InputMd]}
  `,
};

export const errorMixin = ({ theme: { palette } }: WithTheme) => css`
  background: ${palette[PaletteColor.BackgroundSecondary]} !important;
  border: 1px solid ${palette[PaletteColor.Error]} !important;
`;
