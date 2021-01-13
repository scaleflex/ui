import { css } from 'styled-components';
import type { WithTheme } from '../../theme/entity';
import { Color as PaletteColor } from '../../utils/types/palette';

export const errorMixin = ({ theme: { palette } }: WithTheme) => css`
  background: ${palette[PaletteColor.BackgroundSecondary]} !important;
  border: 1px solid ${palette[PaletteColor.Error]} !important;
`;
