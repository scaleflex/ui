import { css } from 'styled-components';
import { Size } from './size';

export const sizeCheckboxMixin = {
  [Size.Sm]: () => css`
    min-height: 14px;
    max-height: 14px;
    min-width: 14px;
    max-width: 14px;
  `,

  [Size.Md]: () => css`
    min-height: 18px;
    max-height: 18px;
    min-width: 18px;
    max-width: 18px;
  `,
};
