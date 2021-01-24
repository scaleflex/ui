import { css } from 'styled-components';
import type { WithTheme } from '../../theme/entity';
import { FontVariant as FV } from '../../utils/types/typography/font-variant';
import { Size } from './types';

export const tabSizeMixin = {
  [Size.Md]: ({ theme: { typography: { font } } }: WithTheme) => css`
    ${font[FV.LabelSmall]}
    padding: 8px 0px;
  `,

  [Size.Lg]: ({ theme: { typography: { font } } }: WithTheme) => css`
    ${font[FV.LabelNormal]}
    padding: 15px 0px;
  `,
};

export const iconSizeMixin = {
  [Size.Md]: css`
    width: 12px;
    height: 12px;
  `,
  [Size.Lg]: css`
    width: 16px;
    height: 16px;
  `,
};
