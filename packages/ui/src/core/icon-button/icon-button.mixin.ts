import { css } from 'styled-components';

import type { WithTheme } from '../../theme/entity';
import { Color as PaletteColor } from '../../utils/types/palette';
import { ButtonSize, IconButtonColor } from '../../utils/types';

export const colorButtonMixin = {
  [IconButtonColor.Primary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.AccentStateless]};
    color: ${palette[PaletteColor.IconsInvert]};

    &:hover {
      background-color: ${palette[PaletteColor.AccentPrimaryHover]};
    }

    &:focus {
      background-color: ${palette[PaletteColor.AccentPrimaryActive]};
    }

    &:active {
      background-color: ${palette[PaletteColor.AccentPrimaryActive]};
    }

    &:disabled {
      color: ${palette[PaletteColor.BordersDisabled]};
      background: ${palette[PaletteColor.BackgroundAccentBlue_0_12_Opacity]};
      cursor: default;
    }
  `,

  [IconButtonColor.Secondary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.BackgroundStateless]};
    color: ${palette[PaletteColor.AccentStateless]};
    border: 1px solid ${palette[PaletteColor.AccentStateless]};

    &:hover {
      color: ${palette[PaletteColor.IconsInvert]};
      background-color: ${palette[PaletteColor.AccentPrimaryHover]};
    }

    &:focus {
      background-color: ${palette[PaletteColor.BackgroundAccentBlue_0_12_Opacity]};
      color: ${palette[PaletteColor.AccentPrimaryActive]};
      border: 1px solid ${palette[PaletteColor.AccentPrimaryActive]};
    }

    &:active {
      color: ${palette[PaletteColor.IconsInvert]};
      background-color: ${palette[PaletteColor.AccentPrimaryActive]};
    }

    &:disabled {
      color: ${palette[PaletteColor.BordersDisabled]};
      background: ${palette[PaletteColor.BackgroundAccentBlue_0_12_Opacity]};
      border: none;
      cursor: default;
    }
  `,

  [IconButtonColor.Basic]: ({ theme: { palette } }: WithTheme) => css`
    background-color: transparent;
    color: ${palette[PaletteColor.IconsPrimary]};
    border: none;

    &:hover {
      background-color: ${palette[PaletteColor.BackgroundHover]};
      color: ${palette[PaletteColor.IconsPrimaryHover]};
    }

    &:focus {
      background-color: ${palette[PaletteColor.BackgroundActive]};
      color: ${palette[PaletteColor.LinkActive]};
    }

    &:active {
      background-color: ${palette[PaletteColor.BackgroundActive]};
      color: ${palette[PaletteColor.LinkActive]};
    }

    &:disabled {
      background-color: transparent;
      color: ${palette[PaletteColor.BordersDisabled]};
      cursor: default;
    }
  `,
};

export const squarePaddingMixin = {
  [ButtonSize.Xs]: css`
    padding: 6px;
  `,
  [ButtonSize.Sm]: css`
    padding: 9px;
  `,
  [ButtonSize.Md]: css`
    padding: 12px;
  `,
  [ButtonSize.Lg]: css`
    padding: 11px;
  `,
};
