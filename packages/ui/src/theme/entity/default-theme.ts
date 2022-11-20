import { Breakpoint } from '../../utils/types/css';
import { FontVariant, FontWeight } from '../../utils/types/typography';
import { BorderRadiusSize } from '../../utils/types/shape';

import type { Theme } from './theme';

const fontFamily = '"Roboto"';
const defaultFontValue = {
  fontFamily,
  fontStyle: 'normal',
  fontWeight: FontWeight.Regular,
};
const labelFontVariants = {
  [FontVariant.LabelExtraSmall]: {
    ...defaultFontValue,
    fontSize: '10px',
    lineHeight: '12px',
  },
  [FontVariant.LabelExtraSmallEmphasis]: {
    ...defaultFontValue,
    fontWeight: 'Bold',
    fontSize: '10px',
    lineHeight: '12px',
  },
  [FontVariant.LabelExtraSmallUp]: {
    ...defaultFontValue,
    fontSize: '11px',
    lineHeight: '12px',
  },
  [FontVariant.LabelSmall]: {
    ...defaultFontValue,
    fontSize: '12px',
    lineHeight: '14px',
  },
  [FontVariant.LabelSmallEmphasis]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '12px',
    lineHeight: '14px',
  },
  [FontVariant.LabelSmallUp]: {
    ...defaultFontValue,
    fontSize: '13px',
    lineHeight: '16px',
  },
  [FontVariant.LabelSmallUpEmphasis]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '13px',
    lineHeight: '16px',
  },
  [FontVariant.LabelMedium]: {
    ...defaultFontValue,
    fontSize: '14px',
    lineHeight: '16px',
  },
  [FontVariant.LabelMediumEmphasis]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '14px',
    lineHeight: '16px',
  },
  [FontVariant.LabelLarge]: {
    ...defaultFontValue,
    fontSize: '16px',
    lineHeight: '18px',
  },
  [FontVariant.LabelLargeEmphasis]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '16px',
    lineHeight: '18px',
  },
  [FontVariant.LabelLargeUp]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Regular,
    fontSize: '18px',
    lineHeight: '20px',
  },
  [FontVariant.LabelExtraLarge]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '24px',
    lineHeight: '28px',
  },
  [FontVariant.LabelXExtraLarge]: {
    ...defaultFontValue,
    fontSize: '32px',
    lineHeight: '36px',
  },
};

const textFontVariants = {
  [FontVariant.TextExtraSmall]: {
    ...labelFontVariants[FontVariant.LabelExtraSmall],
    lineHeight: '14px',
  },
  [FontVariant.TextSmall]: {
    ...defaultFontValue,
    fontSize: '12px',
    lineHeight: '18px',
  },
  [FontVariant.TextSmallUp]: {
    ...defaultFontValue,
    fontSize: '13px',
    lineHeight: '18px',
  },
  [FontVariant.TextMedium]: {
    ...defaultFontValue,
    fontSize: '14px',
    lineHeight: '20px',
  },
  [FontVariant.TextLarge]: {
    ...defaultFontValue,
    fontSize: '16px',
    lineHeight: '22px',
  },
  [FontVariant.TextExtraLarge]: {
    ...defaultFontValue,
    fontSize: '18px',
    lineHeight: '26px',
  },
};

const buttonFontVariants = {
  [FontVariant.ButtonXsLink]: {
    ...defaultFontValue,
    fontSize: '12px',
    lineHeight: '14px',
  },
  [FontVariant.ButtonXs]: {
    ...defaultFontValue,
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '14px',
  },
  [FontVariant.ButtonXsUp]: {
    ...defaultFontValue,
    fontWeight: '500',
    fontSize: '13px',
    lineHeight: '16px',
  },
  [FontVariant.ButtonSmLink]: {
    ...defaultFontValue,
    fontSize: '14px',
    lineHeight: '16px',
  },
  [FontVariant.ButtonSm]: {
    ...defaultFontValue,
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
  },
  [FontVariant.ButtonMdLink]: {
    ...defaultFontValue,
    fontSize: '16px',
    lineHeight: '18px',
  },
  [FontVariant.ButtonMd]: {
    ...defaultFontValue,
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '18px',
  },
  [FontVariant.ButtonLg]: {
    ...defaultFontValue,
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '20px',
  },
};

const inputFontVariants = {
  [FontVariant.InputSm]: {
    ...defaultFontValue,
    fontSize: '12px',
    lineHeight: '14px',
  },
  [FontVariant.InputSmUp]: {
    ...defaultFontValue,
    fontSize: '13px',
    lineHeight: '16px',
  },
  [FontVariant.InputMd]: {
    ...defaultFontValue,
    fontSize: '14px',
    lineHeight: '16px',
  },
  [FontVariant.InputLg]: {
    ...defaultFontValue,
    fontSize: '16px',
    lineHeight: '18px',
  },
};

const titleFontVariants = {
  [FontVariant.TitleH6]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '12px',
    lineHeight: '18px',
  },
  [FontVariant.TitleH5]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '14px',
    lineHeight: '21px',
  },
  [FontVariant.TitleH4]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '16px',
    lineHeight: '24px',
  },
  [FontVariant.TitleH3]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '18px',
    lineHeight: '27px',
  },
  [FontVariant.TitleH2]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '20px',
    lineHeight: '30px',
  },
  [FontVariant.TitleH1]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '28px',
    lineHeight: '42px',
  },
};

export const defaultTheme: Pick<Theme, 'breakpoints' | 'typography' | 'shape'> = {
  breakpoints: {
    keys: [Breakpoint.Xs, Breakpoint.Sm, Breakpoint.Md, Breakpoint.Lg, Breakpoint.Xl],
    values: {
      [Breakpoint.Xs]: 0,
      [Breakpoint.Sm]: 768,
      [Breakpoint.Md]: 1201,
      [Breakpoint.Lg]: 1921,
      [Breakpoint.Xl]: 2560,
    },
    classes: {
      [Breakpoint.Xs]: '.sfx-breakpoint-xs',
      [Breakpoint.Sm]: '.sfx-breakpoint-sm',
      [Breakpoint.Md]: '.sfx-breakpoint-md',
      [Breakpoint.Lg]: '.sfx-breakpoint-lg',
      [Breakpoint.Xl]: '.sfx-breakpoint-xl',
    },
    getBreakpointClass: () => '',
    up: () => '',
    down: () => '',
    between: () => '',
    only: () => '',
  },

  typography: {
    // htmlFontSize: '14px',
    fontFamily,
    baseLineHeight: 1.375,

    font: {
      ...labelFontVariants,
      ...textFontVariants,
      ...buttonFontVariants,
      ...inputFontVariants,
      ...titleFontVariants,
    },
  },

  shape: {
    borderRadius: {
      [BorderRadiusSize.Sm]: '2px',
      [BorderRadiusSize.Md]: '4px',
      [BorderRadiusSize.Lg]: '8px',
    },
  },
};
