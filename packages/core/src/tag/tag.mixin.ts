import { css } from 'styled-components';
// import type { WithTheme } from '@sfx-ui/theme/entity';
// import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import { Size } from './types';

export const sizeTagLabelMixin = {
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

  [Size.Lg]: css`
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    padding: 6px 16px;
  `,
};

export const sizeTagCrossMixin = {
  [Size.Sm]: css`
    right: 1px;
    top: 1px;
  `,

  [Size.Md]: css`
    right: 3px;
    top: 3px;
  `,

  [Size.Lg]: css`
    right: 3px;
    top: 3px;
  `,
};
