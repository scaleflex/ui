import { css } from 'styled-components';
import { FontVariant as FV } from '../../utils/types/typography';
import type { WithTheme } from '../../theme/entity';
import { Size } from './types';

export const sizeTagFieldMixin = {
  [Size.Sm]: css`
    padding: 8px 12px;
  `,

  [Size.Md]: css`
    padding: 12px 16px;
  `,
};

export const fontTagFieldMixin = {
  [Size.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css`
    ${font[FV.InputMd]}
  `,

  [Size.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css`
    ${font[FV.InputLg]}
  `,
};
