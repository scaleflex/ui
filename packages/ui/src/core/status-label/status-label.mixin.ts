import { css } from 'styled-components';

import { Size } from './types';

export const sizeStatusLabelMixin = {
  [Size.Sm]: css`
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    padding: 4px 8px;
  `,

  [Size.Md]: css`
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    padding: 4px 12px;
  `,

};
