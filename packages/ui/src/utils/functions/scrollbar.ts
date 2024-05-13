import { css } from 'styled-components';

import type { WithTheme } from '../../theme/entity';
import { Color as PaletteColor } from '../types/palette';

export const scrollBar = ({ theme: { palette } }: WithTheme) => css`
  scrollbar-color: ${palette[PaletteColor.IconsMuted]} ${palette[PaletteColor.ActiveSecondary]};
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    margin-block: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${palette[PaletteColor.Extra_0_3_Overlay]};
    border: 4px solid ${palette[PaletteColor.ActiveSecondary]};
    border-radius: 99px;
    padding: 4px 6px;
    background-clip: padding-box;
  }
`;
