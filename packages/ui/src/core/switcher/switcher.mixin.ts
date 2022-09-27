import { WithTheme } from '@scaleflex/ui/theme/entity';
import { FontVariant as FV } from '@scaleflex/ui/utils/types/typography';

import { css } from 'styled-components';
import { Size } from '../menu-item/types';

export const fontSizeSwitcherMixin = {
  [Size.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => font[FV.LabelSmall],

  [Size.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => font[FV.LabelNormal],
};

export const translateSwitcherMixin = {
  [Size.Sm]: css`
    transform: translate(13px, -50%);
  `,

  [Size.Md]: css`
    transform: translate(16px, -50%);
  `,
};

export const translateInnerSwitcherMixin = {
  [Size.Sm]: css`
    transform: translate(15.5px, -50%);
  `,

  [Size.Md]: css`
    transform: translate(19.5px, -50%);
  `,
};

export const sizeInnerSwitcherMixin = {
  [Size.Sm]: css`
    width: 4px;
    height: 4px;
  `,

  [Size.Md]: css`
    width: 6px;
    height: 6px;
  `,
};
