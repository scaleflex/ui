/* eslint-disable sonarjs/no-duplicate-string */
import { FontVariant, FontWeight } from '../../../../utils/types/typography';

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
  [FontVariant.LabelExtraLargeEmphasis]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '24px',
    lineHeight: '28px',
  },
  [FontVariant.LabelExtraLarge]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Regular,
    fontSize: '24px',
    lineHeight: '28px',
  },
  [FontVariant.LabelXExtraLargeEmphasis]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '32px',
    lineHeight: '36px',
  },
  [FontVariant.LabelXExtraLarge]: {
    ...defaultFontValue,
    fontSize: '32px',
    lineHeight: '36px',
  },
  [FontVariant.LabelXXExtraLargeEmphasis]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '48px',
    lineHeight: '54px',
  },
  [FontVariant.LabelXXExtraLarge]: {
    ...defaultFontValue,
    fontSize: '48px',
    lineHeight: '54px',
  },
  [FontVariant.LabelXXXExtraLarge]: {
    ...defaultFontValue,
    fontSize: '60px',
    lineHeight: '68px',
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
  [FontVariant.TextXExtraLarge]: {
    ...defaultFontValue,
    fontSize: '28px',
    lineHeight: '40px',
  },
};

const buttonFontVariants = {
  [FontVariant.ButtonSmEmphasis]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '12px',
    lineHeight: '14px',
  },
  [FontVariant.ButtonSm]: {
    ...defaultFontValue,
    fontSize: '12px',
    lineHeight: '14px',
  },
  [FontVariant.ButtonSmUpEmphasis]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '13px',
    lineHeight: '16px',
  },
  [FontVariant.ButtonSmUp]: {
    ...defaultFontValue,
    fontSize: '13px',
    lineHeight: '16px',
  },
  [FontVariant.ButtonMdEmphasis]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '14px',
    lineHeight: '16px',
  },
  [FontVariant.ButtonMd]: {
    ...defaultFontValue,
    fontSize: '14px',
    lineHeight: '16px',
  },
  [FontVariant.ButtonLgEmphasis]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '16px',
    lineHeight: '18px',
  },
  [FontVariant.ButtonLg]: {
    ...defaultFontValue,
    fontSize: '16px',
    lineHeight: '18px',
  },
  [FontVariant.ButtonLgUpEmphasis]: {
    ...defaultFontValue,
    fontWeight: FontWeight.Medium,
    fontSize: '18px',
    lineHeight: '20px',
  },
  [FontVariant.ButtonLgUp]: {
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
    fontWeight: FontWeight.Medium,
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
    fontWeight: FontWeight.Medium,
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
    fontWeight: FontWeight.Medium,
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
    fontWeight: FontWeight.Medium,
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
    fontWeight: FontWeight.Medium,
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

export const defaultTypography = {
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
};
