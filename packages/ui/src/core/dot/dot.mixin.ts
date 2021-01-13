import { css } from 'styled-components';
import type { WithTheme } from '../../theme/entity';
import { Color as PaletteColor } from '../../utils/types/palette';

export const activeDotMixin = ({ theme }: WithTheme) => css`
  background-color: ${theme.palette[PaletteColor.AccentPrimary]};
`;
