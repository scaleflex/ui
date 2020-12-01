import { css } from 'styled-components';
import type { WithTheme } from '@sfx-ui/theme/entity';
import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
// import { Type } from './types';

// export const sizeInputMixin = {
//   [Size.Sm]: css`
//     height: 24px;
//   `,

//   [Size.Md]: css`
//     height: 30px;
//   `,
// };

export const errorMixin = ({ theme: { palette } }: WithTheme) => css`
  color: ${palette[PaletteColor.Error]} !important;
`;
