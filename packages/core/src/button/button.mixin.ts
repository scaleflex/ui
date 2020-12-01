import { css } from 'styled-components';
import type { WithTheme } from '@sfx-ui/theme/entity';
import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import { Size, Color, Status } from './types';

export const colorButtonMixin = {
  [Color.Primary]: {
    common: ({ theme: { palette } }: WithTheme) => css`
      color: ${palette[PaletteColor.ButtonPrimaryText]};

      &:hover {
        background-color: ${palette[PaletteColor.AccentPrimaryHover]};
      }

      &:active {
        background-color: ${palette[PaletteColor.AccentPrimaryActive]};
      }
    `,

    [Status.Stateless]: ({ theme: { palette } }: WithTheme) => css`
      background-color: ${palette[PaletteColor.AccentPrimary]};
    `,

    [Status.Hover]: ({ theme: { palette } }: WithTheme) => css`
      background-color: ${palette[PaletteColor.AccentPrimaryHover]};
    `,

    [Status.Active]: ({ theme: { palette } }: WithTheme) => css`
      background-color: ${palette[PaletteColor.AccentPrimaryActive]};
    `,
  },

  [Color.Secondary]: {
    common: ({ theme: { palette } }: WithTheme) => css`
      color: ${palette[PaletteColor.IconsPrimary]};

      &:hover {
        background-color: #DFE4E9;
      }

      &:active {
        background-color: #CBD3DA;
      }
    `,

    [Status.Stateless]: () => css`
      background-color: #E9EEF2;
    `,

    [Status.Hover]: () => css`
      background-color: #DFE4E9;
    `,

    [Status.Active]: () => css`
      background-color: #CBD3DA;
    `,
  },
};

export const sizeButtonMixin = {
  [Size.Sm]: () => css`
    padding: 4px 8px;
    font-size: 12px;
  `,

  [Size.Md]: () => css`
    padding: 6px 10px;
    font-size: 13px;
  `,

  [Size.Lg]: () => css`
    padding: 7px 13px;
    font-size: 15px;
  `,
};
