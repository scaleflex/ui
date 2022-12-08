import { css } from 'styled-components';
import { WithTheme } from '@scaleflex/ui/theme/entity';
import { FontVariant as FV } from '@scaleflex/ui/utils/types/typography';
import { SwitcherSize } from './switcher-size';

export const fontSizeSwitcherMixin = {
  [SwitcherSize.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => font[FV.LabelMedium],

  [SwitcherSize.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => font[FV.LabelLarge],

  [SwitcherSize.Lg]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => font[FV.LabelLarge],
};

export const translateSwitcherMixin = {
  [SwitcherSize.Sm]: css`
    transform: translate(16px, -50%);
  `,

  [SwitcherSize.Md]: css`
    transform: translate(19.5px, -50%);
  `,

  [SwitcherSize.Lg]: css`
    transform: translate(30.5px, -50%);
  `,
};

export const translateInnerSwitcherMixin = {
  [SwitcherSize.Sm]: css`
    transform: translate(18.2px, -50%);
  `,

  [SwitcherSize.Md]: css`
    transform: translate(22.5px, -50%);
  `,

  [SwitcherSize.Lg]: css`
    transform: translate(34.7px, -50%);
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

  [SwitcherSize.Lg]: css`
    width: 8px;
    height: 8px;
  `,
};
