import { css } from 'styled-components';

import type { WithTheme } from '../../theme/entity';
import { FontVariant } from '../../utils/types/typography';
import { InputSize } from '../../utils/types';

export const sizeInputLabelMixin = {
  [InputSize.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FontVariant.LabelSm]),

  [InputSize.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FontVariant.LabelMd]),
};
