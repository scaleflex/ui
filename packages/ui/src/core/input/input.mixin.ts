import { css } from 'styled-components';
import type { WithTheme } from '../../theme/entity';
import { Color as PaletteColor } from '../../utils/types/palette';
import { FontVariant as FV } from '../../utils/types/typography';
import { InputSize } from '../../utils/types';

export const sizeInputMixin = {
  [InputSize.Sm]: `
    padding: 8px 12px;
    height: 32px;
  `,

  [InputSize.Md]: `
    padding: 11px 16px;
    height: 40px;
  `,
};

export const fontSizeInputMixin = {
  [InputSize.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css`
    ${font[FV.InputMd]}
  `,

  [InputSize.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css`
    ${font[FV.InputLg]}
  `,
};

export const sizeInputLabelMixin = {
  [InputSize.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FV.LabelSmall]),

  [InputSize.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FV.LabelMedium]),
};

export const errorMixin = ({ theme: { palette } }: WithTheme) => css`
  background: ${palette[PaletteColor.BackgroundSecondary]} !important;
  border: 1px solid ${palette[PaletteColor.Error]} !important;
`;
