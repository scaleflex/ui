import { css, FlattenSimpleInterpolation } from 'styled-components';
import type { WithTheme } from '../../theme/entity';
import { Color as PaletteColor } from '../types/palette';

export const scrollBar = ({ theme: { palette } }: WithTheme): FlattenSimpleInterpolation => css`
  scrollbar-color: ${palette[PaletteColor.IconsMuted]} ${palette[PaletteColor.ActiveSecondary]};
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 12px;
    background: ${palette[PaletteColor.ActiveSecondary]};
  }

  ::-webkit-scrollbar-track {
    margin-block: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${palette[PaletteColor.IconsMuted]};
    border: 4px solid ${palette[PaletteColor.ActiveSecondary]};
    border-radius: 99px;
    padding: 4px 6px;
    background-clip: padding-box;
  }
`;
