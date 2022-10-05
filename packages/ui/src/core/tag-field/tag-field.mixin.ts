import { css } from 'styled-components';
import { FontVariant as FV } from '../../utils/types/typography';
import type { WithTheme } from '../../theme/entity';
import { Size } from './types';

export const sizeTagFieldMixin = {
  [Size.Lg]: css`
    padding: 12px 16px;
  `,

  [Size.Md]: css`
    padding: 8px 12px;
  `,
};

export const fontTagFieldMixin = {
  [Size.Lg]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css`
    ${font[FV.LabelNormal]}
    font-weight: 500;
  `,

  [Size.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css`
    ${font[FV.LabelSmall]}
    font-weight: 500;
  `,
};
