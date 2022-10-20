import { css } from 'styled-components';
import { Size } from './types';

export const sizeCheckboxMixin = {
  [Size.Sm]: () => css`
    min-height: 10px;
    max-height: 10px;
    min-width: 10px;
    max-width: 10px;
  `,

  [Size.Md]: () => css`
    min-height: 20px;
    max-height: 20px;
    min-width: 20px;
    max-width: 20px;
  `,
};
