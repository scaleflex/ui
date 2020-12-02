import { css } from 'styled-components';
import type { WithTheme } from '@sfx-ui/theme/entity';
import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';

export const activeDotMixin = ({ theme }: WithTheme) => css`
  background-color: ${theme.palette[PaletteColor.AccentPrimary]};
`;
