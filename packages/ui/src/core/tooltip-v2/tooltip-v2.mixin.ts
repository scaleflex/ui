import { css, RuleSet } from 'styled-components';

import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { Variant } from './types';
import Styled from './tooltip-v2.styles';

export const variantMixin = {
  [Variant.Default]: ({ theme: { palette } }: WithTheme): RuleSet => css`
    background: ${palette[PColor.IconsPlaceholder]};
    color: ${palette[PColor.LinkActive]};

    ${Styled.TooltipText} {
      color: ${palette[PColor.LinkActive]};
    }

    .tippy-arrow {
      color: ${palette[PColor.IconsPlaceholder]};
    }
  `,

  [Variant.Warning]: ({ theme: { palette } }: WithTheme): RuleSet => css`
    background: ${palette[PColor.BackgroundOrange]};
    color: ${palette[PColor.TextWarning]};

    ${Styled.TooltipText} {
      color: ${palette[PColor.TextWarning]};
    }

    .tippy-arrow {
      color: ${palette[PColor.BackgroundOrange]};
    }
  `,

  [Variant.Info]: ({ theme: { palette } }: WithTheme): RuleSet => css`
    background: ${palette[PColor.BackgroundBlue]};
    color: ${palette[PColor.TextInfo]};

    ${Styled.TooltipText} {
      color: ${palette[PColor.TextInfo]};
    }

    .tippy-arrow {
      color: ${palette[PColor.BackgroundBlue]};
    }
  `,

  [Variant.Error]: ({ theme: { palette } }: WithTheme): RuleSet => css`
    background: ${palette[PColor.BackgroundRedLight]};
    color: ${palette[PColor.TextError]};

    ${Styled.TooltipText} {
      color: ${palette[PColor.TextError]};
    }

    .tippy-arrow {
      color: ${palette[PColor.BackgroundRedLight]};
    }
  `,
};
