import { css } from 'styled-components';

import type { WithTheme } from '../../theme/entity';
import { Color as PaletteColor } from '../../utils/types/palette';
import { FontVariant as FV } from '../../utils/types/typography';
import { Size, Type } from './types';

export const statusLabelMixin = {
  [Type.Default]: () => css`
    border: none;
  `,

  [Type.Inactive]: () => css`
    border: none;
  `,

  [Type.Received]: ({ theme: { palette } }: WithTheme) => css`
    border: 1px solid ${palette[PaletteColor.ButtonDisabledText]};
  `,

  [Type.Selected]: ({ theme: { palette } }: WithTheme) => css`
    border: 1px solid ${palette[PaletteColor.AccentStateless]};
  `,

  [Type.Modified]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.Modified]};
  `,

  [Type.Validated]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.Success]};
  `,
};

export const fontLabelMixin = {
  [Size.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => font[FV.LabelSmall],

  [Size.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => font[FV.LabelMedium],
};
