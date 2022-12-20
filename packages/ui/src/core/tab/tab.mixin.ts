import { css } from 'styled-components';
import type { WithTheme } from '../../theme/entity';
import { FontVariant as FV } from '../../utils/types/typography/font-variant';
import { Size } from './types';

export const tabSizeMixin = {
  [Size.Lg]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css`
    ${font[FV.LabelLargeUp]}
    padding: 8px 0px;
  `,

  [Size.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css`
    ${font[FV.LabelMedium]}
    padding: 8px 0px;
  `,

  [Size.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css`
    ${font[FV.LabelSmall]}
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
  [Size.Lg]: css`
    width: 20px;
    height: 20px;
  `,
};
