import { css } from 'styled-components';
import type { WithTheme } from '../../theme/entity';
import { Color as PaletteColor } from '../../utils/types/palette';
import { Color } from './types';

export const colorBadgeMixin = {
  [Color.Primary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.AccentPrimary]};
    color: ${palette[PaletteColor.ButtonPrimaryText]};
  `,

  [Color.White]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.ButtonPrimaryText]};
    color: ${palette[PaletteColor.AccentPrimary]};
  `,

  [Color.Secondary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.IconsPrimary]};
    color: #E9EEF2;
  `
};
