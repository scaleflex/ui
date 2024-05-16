import { css } from 'styled-components';
import type { WithTheme } from '../../theme/entity';
import { Color as PaletteColor } from '../../utils/types/palette';
import { BadgeColor } from './badge.props';

export const colorBadgeMixin = {
  [BadgeColor.Primary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.AccentPrimary]};
    color: ${palette[PaletteColor.ButtonPrimaryText]};
  `,

  [BadgeColor.White]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.ButtonPrimaryText]};
    color: ${palette[PaletteColor.AccentPrimary]};
  `,

  [BadgeColor.Secondary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.Accent_1_2_Opacity]};
    color: ${palette[PaletteColor.TextPrimary]};
  `,
};
