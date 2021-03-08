import { css } from 'styled-components';
import { Size } from './types';

export const modalSizeMixin = {
  [Size.Xs]: css`
    max-width: 300px;
  `,

  [Size.Sm]: css`
    max-width: 600px;
  `,

  [Size.Md]: css`
    max-width: 960px;
  `,

  [Size.Lg]: css`
    max-width: 1280px;
  `,

  [Size.Xl]: css`
    max-width: 1920px;
  `,
};
