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

export const positionGenerateButtonMixin = {
  [Size.Sm]: css`
    position: absolute;
    bottom: 8px;
    left: 12px;
  `,

  [Size.Md]: css`
    position: absolute;
    bottom: 12px;
    left: 16px;
  `,
};

export const positionClearAllButtonMixin = {
  [Size.Sm]: css`
    position: absolute;
    bottom: 8px;
    left: 110px;
  `,

  [Size.Md]: css`
    position: absolute;
    bottom: 12px;
    left: 125px;
  `,
};

export const positionIconMixin = {
  [Size.Sm]: css`
    position: absolute;
    bottom: 8px;
    right: 12px;
  `,

  [Size.Md]: css`
    position: absolute;
    bottom: 12px;
    right: 16px;
  `,
};

export const marginTagFieldListMixin = {
  [Size.Sm]: css`
    margin-bottom: 16px;
  `,

  [Size.Md]: css`
    margin-bottom: 18px;
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
