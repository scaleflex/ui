import { css } from 'styled-components';

import type { WithTheme } from '../../theme/entity';
import { FontVariant as FV } from '../../utils/types/typography';
import { InputSize } from '../../utils/types';

export const sizeHintMixin = {
  [InputSize.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FV.LabelExtraSmallUp]),

  [InputSize.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FV.LabelSmall]),
};
