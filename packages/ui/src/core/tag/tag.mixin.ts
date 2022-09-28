import { css } from 'styled-components';
// import type { WithTheme } from '../../theme/entity';
// import { Color as PaletteColor } from '../../utils/types/palette';
import { Size } from './types';

export const sizeTagLabelMixin = {
  [Size.Sm]: css`
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    padding: 3px 8px;
  `,

  [Size.Md]: css`
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    padding: 4px 12px;
  `,
};

export const sizeTagCrossMixin = {
  [Size.Sm]: css`
    width: 8px;
    height: 8px;
    margin-left: 6px;
  `,

  [Size.Md]: css`
    width: 8px;
    height: 8px;
    margin-left: 8px;
  `,
};
