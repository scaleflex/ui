import { css } from 'styled-components';

import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import type { IconButtonProps } from './icon-button.props';
import { Color as PaletteColor } from '../../utils/types/palette';
import { ButtonSize, IconButtonColor } from '../../utils/types';

export const colorButtonMixin = {
  [IconButtonColor.Primary]: ({ theme: { palette }, active }: With<WithTheme, IconButtonProps>) => css`
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

    ${active &&
    css`
      background-color: ${palette[PaletteColor.AccentPrimaryActive]};

      &:hover,
      &:focus {
        background-color: ${palette[PaletteColor.AccentPrimaryActive]};
      }
    `}

    &:disabled {
      color: ${palette[PaletteColor.BordersDisabled]};
      background: ${palette[PaletteColor.Accent_1_2_Opacity]};
      cursor: default;
    }
  `,

  [IconButtonColor.Secondary]: ({ theme: { palette }, active }: With<WithTheme, IconButtonProps>) => css`
    background-color: ${palette[PaletteColor.BackgroundStateless]};
    color: ${palette[PaletteColor.AccentStateless]};
    border: 1px solid ${palette[PaletteColor.AccentStateless]};

    &:hover {
      color: ${palette[PaletteColor.IconsInvert]};
      background-color: ${palette[PaletteColor.AccentPrimaryHover]};
    }

    &:focus {
      background-color: ${palette[PaletteColor.Accent_1_2_Opacity]};
      color: ${palette[PaletteColor.AccentPrimaryActive]};
      border: 1px solid ${palette[PaletteColor.AccentPrimaryActive]};
    }

    &:active {
      color: ${palette[PaletteColor.IconsInvert]};
      background-color: ${palette[PaletteColor.AccentPrimaryActive]};
    }

    ${active &&
    css`
      color: ${palette[PaletteColor.IconsInvert]};
      background-color: ${palette[PaletteColor.AccentPrimaryActive]};

      &:hover,
      &:focus {
        color: ${palette[PaletteColor.IconsInvert]};
        background-color: ${palette[PaletteColor.AccentPrimaryActive]};
      }
    `}

    &:disabled {
      color: ${palette[PaletteColor.BordersDisabled]};
      background: ${palette[PaletteColor.Accent_1_2_Opacity]};
      border: none;
      cursor: default;
    }
  `,

  [IconButtonColor.Basic]: ({ theme: { palette }, active }: With<WithTheme, IconButtonProps>) => css`
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

    ${active &&
    css`
      background-color: ${palette[PaletteColor.BackgroundActive]};
      color: ${palette[PaletteColor.LinkActive]};

      &:hover,
      &:focus {
        background-color: ${palette[PaletteColor.BackgroundActive]};
        color: ${palette[PaletteColor.LinkActive]};
      }
    `}

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
