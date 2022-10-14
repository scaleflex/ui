import { css } from 'styled-components';

import { FontVariant } from '../../utils/types/typography';
import { WithTheme } from '../../theme/entity';
import { RadioSize } from './size';

export const sizeRadioMixin = {
  [RadioSize.Sm]: css`
    width: 16px;
    height: 16px;
  `,

  [RadioSize.Md]: css`
    width: 20px;
    height: 20px;
  `,
};

export const sizeInnerRadioMixin = {
  [RadioSize.Sm]: css`
    width: 6px;
    height: 6px;
  `,

  [RadioSize.Md]: css`
    width: 8px;
    height: 8px;
  `,
};

export const fontSizeRadioLabelMixin = {
  [RadioSize.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FontVariant.LabelMedium]),

  [RadioSize.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FontVariant.LabelLarge]),
};
