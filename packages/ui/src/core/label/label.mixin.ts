import { css } from 'styled-components';

import type { WithTheme } from '../../theme/entity';
import { FontVariant as FV } from '../../utils/types/typography';
import { LabelSize } from './types/size';

export const fontSizeLabelMixin = {
  [LabelSize.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FV.LabelSmallUpEmphasis]),

  [LabelSize.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FV.LabelMediumEmphasis]),

  [LabelSize.Lg]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FV.LabelLargeEmphasis]),

  [LabelSize.Xl]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FV.LabelExtraLargeEmphasis]),
};
