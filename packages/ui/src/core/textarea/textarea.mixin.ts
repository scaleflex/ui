import { css } from 'styled-components';
import { InputSize } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PaletteColor } from '../../utils/types/palette';
import { FontVariant as FV } from '../../utils/types/typography';

export const errorMixin = ({ theme: { palette } }: WithTheme) => css`
  background: ${palette[PaletteColor.BackgroundSecondary]} !important;
  border: 1px solid ${palette[PaletteColor.Error]} !important;
`;

export const sizeTextAreaMixin = {
  [InputSize.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css`
    padding: 6px 12px;
    height: 64px;
    ${font[FV.InputMd]}
  `,

  [InputSize.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css`
    padding: 9px 16px;
    height: 80px;
    ${font[FV.InputLg]}
  `,
};
