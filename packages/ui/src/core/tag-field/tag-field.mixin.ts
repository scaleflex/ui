import { css } from 'styled-components';
import { FontVariant as FV } from '../../utils/types/typography';
import type { WithTheme } from '../../theme/entity';
import { Size } from './types';

export const sizeTagFieldMixin = {
  [Size.Sm]: css`
    padding: 12px;
    gap: 8px;
  `,

  [Size.Md]: css`
    padding: 16px;
    gap: 16px;
  `,
};

export const heightTagFieldMixin = {
  [Size.Sm]: () => css`
    min-height: 80px;
    max-height: 252px;
  `,

  [Size.Md]: () => css`
    min-height: 100px;
    max-height: 284px;
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
