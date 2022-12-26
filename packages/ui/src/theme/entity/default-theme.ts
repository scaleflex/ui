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
    ...labelFontVariants[FontVariant.LabelExtraSmallUp],
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
  [FontVariant.ButtonSm]: {
    ...defaultFontValue,
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '14px',
  },
  [FontVariant.ButtonSmLink]: {
    ...defaultFontValue,
    fontSize: '12px',
    lineHeight: '14px',
  },
  [FontVariant.ButtonSmUp]: {
    ...defaultFontValue,
    fontWeight: '500',
    fontSize: '13px',
    lineHeight: '16px',
  },
  [FontVariant.ButtonSmUpLink]: {
    ...defaultFontValue,
    fontSize: '13px',
    lineHeight: '16px',
  },
  [FontVariant.ButtonMd]: {
    ...defaultFontValue,
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
  },
  [FontVariant.ButtonMdLink]: {
    ...defaultFontValue,
    fontSize: '14px',
    lineHeight: '16px',
  },
  [FontVariant.ButtonLg]: {
    ...defaultFontValue,
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '18px',
  },
  [FontVariant.ButtonLgLink]: {
    ...defaultFontValue,
    fontSize: '16px',
    lineHeight: '18px',
  },
  [FontVariant.ButtonLgUp]: {
    ...defaultFontValue,
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '20px',
  },
  [FontVariant.ButtonLgUpLink]: {
    ...defaultFontValue,
    fontSize: '18px',
    lineHeight: '20px',
  },
};

const linkFontVariants = {
  [FontVariant.LinkSmall]: {
    ...defaultFontValue,
    fontSize: '12px',
    lineHeight: '14px',
  },
  [FontVariant.LinkSmallEmphasis]: {
    ...defaultFontValue,
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '14px',
  },
  [FontVariant.LinkSmallUp]: {
    ...defaultFontValue,
    fontSize: '13px',
    lineHeight: '16px',
  },
  [FontVariant.LinkSmallUpEmphasis]: {
    ...defaultFontValue,
    fontWeight: '500',
    fontSize: '13px',
    lineHeight: '16px',
  },
  [FontVariant.LinkMedium]: {
    ...defaultFontValue,
    fontSize: '14px',
    lineHeight: '16px',
  },
  [FontVariant.LinkMediumEmphasis]: {
    ...defaultFontValue,
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
  },
  [FontVariant.LinkLarge]: {
    ...defaultFontValue,
    fontSize: '16px',
    lineHeight: '18px',
  },
  [FontVariant.LinkLargeEmphasis]: {
    ...defaultFontValue,
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '18px',
  },
  [FontVariant.LinkLargeUp]: {
    ...defaultFontValue,
    fontSize: '18px',
    lineHeight: '20px',
  },
  [FontVariant.LinkLargeUpEmphasis]: {
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
      [Breakpoint.Sm]: 576,
      [Breakpoint.Md]: 768,
      [Breakpoint.Lg]: 1084,
      [Breakpoint.Xl]: 1342,
      [Breakpoint.Xxl]: 1600,
      [Breakpoint.Xxxl]: 1920,
    },
    classes: {
      [Breakpoint.Xs]: '.sfx-breakpoint-xs',
      [Breakpoint.Sm]: '.sfx-breakpoint-sm',
      [Breakpoint.Md]: '.sfx-breakpoint-md',
      [Breakpoint.Lg]: '.sfx-breakpoint-lg',
      [Breakpoint.Xl]: '.sfx-breakpoint-xl',
      [Breakpoint.Xxl]: '.sfx-breakpoint-xxl',
      [Breakpoint.Xxxl]: '.sfx-breakpoint-xxxl',
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
      ...linkFontVariants,
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
