import { css } from 'styled-components';
import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import { FontVariant } from '@sfx-ui/utils/types/typography';
import type { WithTheme } from '@sfx-ui/theme/entity';
import StyledBadge from '../badge/badge.styles';
import { Size, Color } from './types';

export const colorButtonMixin = {
  [Color.Primary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.AccentPrimary]};
    color: ${palette[PaletteColor.ButtonPrimaryText]};

    &:hover {
      background-color: ${palette[PaletteColor.AccentPrimaryHover]};
    }

    &:active {
      background-color: ${palette[PaletteColor.AccentPrimaryActive]};
    }
  `,

  [Color.Secondary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: #E9EEF2;
    color: ${palette[PaletteColor.IconsPrimary]};

    &:hover {
      background-color: #DFE4E9;
    }

    &:active {
      background-color: #CBD3DA;
    }
  `,

  [Color.Link]: ({ theme: { palette } }: WithTheme) => css`
    background-color: transparent;
    color: ${palette[PaletteColor.LinkPrimary]};

    &:hover {
      color: ${palette[PaletteColor.LinkHover]};

      ${StyledBadge.Badge} {
        background-color: ${palette[PaletteColor.LinkHover]};
      }
    }

    &:active {
      color: ${palette[PaletteColor.LinkActive]};

      ${StyledBadge.Badge} {
        background-color: ${palette[PaletteColor.LinkActive]};
      }
    }
  `,
};

export const sizeButtonMixin = {
  [Size.Xs]: css`padding: 4px 8px;`,

  [Size.Sm]: css`padding: 6px 10px;`,

  [Size.Md]: css`padding: 8px 12px;`,

  [Size.Lg]: css`padding: 10px 14px;`,

  [Size.Xl]: css`padding: 12px 16px;`,
};

export const sizeButtonLabelMixin = {
  [Size.Xs]: ({ theme: { typography: { font } } }: WithTheme) => css(
    font[FontVariant.ButtonXs]
  ),

  [Size.Sm]: ({ theme: { typography: { font } } }: WithTheme) => css(
    font[FontVariant.ButtonSm]
  ),

  [Size.Md]: ({ theme: { typography: { font } } }: WithTheme) => css(
    font[FontVariant.ButtonMd]
  ),

  [Size.Lg]: ({ theme: { typography: { font } } }: WithTheme) => css(
    font[FontVariant.ButtonLg]
  ),

  [Size.Xl]: ({ theme: { typography: { font } } }: WithTheme) => css(
    font[FontVariant.ButtonXl]
  ),
};
