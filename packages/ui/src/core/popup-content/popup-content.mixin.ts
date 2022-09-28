import { css } from 'styled-components';
import { WithTheme } from '@scaleflex/ui/theme/entity';
import { Color as PaletteColor } from '@scaleflex/ui/utils/types/palette';

import { Status } from '../popup-status/types';

export const popupContentMixin = {
  [Status.Success]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.BackgroundLightGreen]};
  `,

  [Status.Info]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.BackgroundLightBlue]};
  `,

  [Status.Error]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.BackgroundLightRed]};
  `,

  [Status.Warning]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.BackgroundLightOrange]};
  `,
};
