import { css } from 'styled-components';
import { WithTheme } from '../../theme/entity';
import { FontVariant as FV } from '../../utils/types/typography';
import { Size } from './types';

export const fontTooltipMixin = {
  [Size.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => font[FV.TextExtraSmall],

  [Size.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => font[FV.TextSmall],

  [Size.Lg]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => font[FV.TextSmall],
};

export const sizeTooltipMixin = {
  [Size.Sm]: css`
    padding: 4px 8px;
  `,

  [Size.Md]: css`
    padding: 6px 12px;
  `,

  [Size.Lg]: css`
    padding: 12px 16px;
  `,
};
