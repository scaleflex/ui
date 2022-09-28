import { WithTheme } from '@scaleflex/ui/theme/entity';
import { FontVariant as FV } from '@scaleflex/ui/utils/types/typography';

import { css } from 'styled-components';
import { SwitcherSize } from './switcher-size';

export const fontSizeSwitcherMixin = {
  [SwitcherSize.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => font[FV.LabelSmall],

  [SwitcherSize.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => font[FV.LabelNormal],
};

export const translateSwitcherMixin = {
  [SwitcherSize.Sm]: css`
    transform: translate(13px, -50%);
  `,

  [SwitcherSize.Md]: css`
    transform: translate(16px, -50%);
  `,
};

export const translateInnerSwitcherMixin = {
  [SwitcherSize.Sm]: css`
    transform: translate(15.5px, -50%);
  `,

  [SwitcherSize.Md]: css`
    transform: translate(19.5px, -50%);
  `,
};

export const sizeInnerSwitcherMixin = {
  [SwitcherSize.Sm]: css`
    width: 4px;
    height: 4px;
  `,

  [SwitcherSize.Md]: css`
    width: 6px;
    height: 6px;
  `,
};
