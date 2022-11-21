import { css } from 'styled-components';
import { Size } from './types';

export const sizeCheckboxMixin = {
  [Size.Sm]: () => css`
    min-height: 16px;
    max-height: 16px;
    min-width: 16px;
    max-width: 16px;
  `,

  [Size.Md]: () => css`
    min-height: 20px;
    max-height: 20px;
    min-width: 20px;
    max-width: 20px;
  `,
};
