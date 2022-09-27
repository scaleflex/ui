import { css } from 'styled-components';
import type { WithTheme } from '../../theme/entity';
import { FontVariant as FV } from '../../utils/types/typography/font-variant';
import { Size } from './types';

export const tabSizeMixin = {
  [Size.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css`
    ${font[FV.TabLabelMedium]}
    padding: 8px 0px;
  `,

  [Size.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css`
    ${font[FV.TabLabelSmall]}
    padding: 8px 0px;
  `,
};

export const iconSizeMixin = {
  [Size.Sm]: css`
    width: 14px;
    height: 14px;
  `,
  [Size.Md]: css`
    width: 16px;
    height: 16px;
  `,
};
