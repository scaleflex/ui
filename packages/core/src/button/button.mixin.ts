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

    ${StyledBadge.Badge} {
      background-color: ${palette[PaletteColor.ButtonPrimaryText]};
    }

    &:hover {
      background-color: ${palette[PaletteColor.AccentPrimaryHover]};
    }

    &:active {
      background-color: ${palette[PaletteColor.AccentPrimaryActive]};
    }

    &:disabled {
      color: ${palette[PaletteColor.ButtonDisabledText]};
      background: ${palette[PaletteColor.AccentPrimaryDisabled]};

      ${StyledBadge.Badge} {
        background-color: ${palette[PaletteColor.ButtonDisabledText]};
        color: ${palette[PaletteColor.AccentPrimaryDisabled]};
      }
    }
  `,

  [Color.Secondary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.ActiveSecondary]};
    color: ${palette[PaletteColor.IconsPrimary]};

    &:hover {
      background-color: ${palette[PaletteColor.ActiveSecondaryHover]};
    }

    &:active {
      background-color: ${palette[PaletteColor.ActiveSecondaryActive]};
    }

    &:disabled {
      color: ${palette[PaletteColor.ButtonDisabledText]};
      background: ${palette[PaletteColor.AccentPrimaryDisabled]};

      ${StyledBadge.Badge} {
        background-color: ${palette[PaletteColor.ButtonDisabledText]};
      }
    }

    ${StyledBadge.Badge} {
      background-color: ${palette[PaletteColor.IconsPrimary]};
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

    &:disabled {
      color: ${palette[PaletteColor.ButtonDisabledText]};

      ${StyledBadge.Badge} {
        background-color: ${palette[PaletteColor.ButtonDisabledText]};
      }
    }
  `,
};

export const sizeButtonMixin = {
  [Size.Xs]: css`padding: 6px 8px;`,

  [Size.Sm]: css`padding: 8px 10px;`,

  [Size.Md]: css`padding: 9px 12px;`,

  [Size.Lg]: css`padding: 11px 14px;`,

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
