/* eslint-disable sonarjs/no-duplicate-string */
import { FontVariant, FontWeight } from '../../../../utils/types/typography';
import { FontObjectType, FontOverrideType } from '../typography.props';

const defaultFontValue = {
  fontFamily: '"Roboto"',
  fontStyle: 'normal',
  fontWeight: FontWeight.Regular,
};

const getLabelFontVariants = (fontOverride: FontOverrideType = {}): Partial<FontObjectType> => {
  return {
    [FontVariant.LabelExtraSmall]: {
      ...defaultFontValue,
      fontSize: '10px',
      lineHeight: '12px',
      ...fontOverride,
    },
    [FontVariant.LabelExtraSmallEmphasis]: {
      ...defaultFontValue,
      fontWeight: 'Bold',
      fontSize: '10px',
      lineHeight: '12px',
      ...fontOverride,
    },
    [FontVariant.LabelExtraSmallUp]: {
      ...defaultFontValue,
      fontSize: '11px',
      lineHeight: '12px',
      ...fontOverride,
    },
    [FontVariant.LabelSmall]: {
      ...defaultFontValue,
      fontSize: '12px',
      lineHeight: '14px',
      ...fontOverride,
    },
    [FontVariant.LabelSmallEmphasis]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '12px',
      lineHeight: '14px',
      ...fontOverride,
    },
    [FontVariant.LabelSmallUp]: {
      fontSize: '13px',
      lineHeight: '16px',
      ...defaultFontValue,
      ...fontOverride,
    },
    [FontVariant.LabelSmallUpEmphasis]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '13px',
      lineHeight: '16px',
      ...fontOverride,
    },
    [FontVariant.LabelMedium]: {
      fontSize: '14px',
      lineHeight: '16px',
      ...defaultFontValue,
      ...fontOverride,
    },
    [FontVariant.LabelMediumEmphasis]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '14px',
      lineHeight: '16px',
      ...fontOverride,
    },
    [FontVariant.LabelLarge]: {
      ...defaultFontValue,
      fontSize: '16px',
      lineHeight: '18px',
      ...fontOverride,
    },
    [FontVariant.LabelLargeEmphasis]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '16px',
      lineHeight: '18px',
      ...fontOverride,
    },
    [FontVariant.LabelLargeUp]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Regular,
      fontSize: '18px',
      lineHeight: '20px',
      ...fontOverride,
    },
    [FontVariant.LabelExtraLargeEmphasis]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '24px',
      lineHeight: '28px',
      ...fontOverride,
    },
    [FontVariant.LabelExtraLarge]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Regular,
      fontSize: '24px',
      lineHeight: '28px',
      ...fontOverride,
    },
    [FontVariant.LabelXExtraLargeEmphasis]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '32px',
      lineHeight: '36px',
      ...fontOverride,
    },
    [FontVariant.LabelXExtraLarge]: {
      ...defaultFontValue,
      fontSize: '32px',
      lineHeight: '36px',
      ...fontOverride,
    },
    [FontVariant.LabelXXExtraLargeEmphasis]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '48px',
      lineHeight: '54px',
      ...fontOverride,
    },
    [FontVariant.LabelXXExtraLarge]: {
      ...defaultFontValue,
      fontSize: '48px',
      lineHeight: '54px',
      ...fontOverride,
    },
    [FontVariant.LabelXXXExtraLarge]: {
      ...defaultFontValue,
      fontSize: '60px',
      lineHeight: '68px',
      ...fontOverride,
    },
  };
};

const getTextFontVariants = (fontOverride: FontOverrideType = {}): Partial<FontObjectType> => {
  return {
    [FontVariant.TextExtraSmall]: {
      ...getLabelFontVariants()[FontVariant.LabelExtraSmallUp],
      lineHeight: '14px',
      ...fontOverride,
    },
    [FontVariant.TextSmall]: {
      ...defaultFontValue,
      fontSize: '12px',
      lineHeight: '18px',
      ...fontOverride,
    },
    [FontVariant.TextSmallUp]: {
      ...defaultFontValue,
      fontSize: '13px',
      lineHeight: '18px',
      ...fontOverride,
    },
    [FontVariant.TextMedium]: {
      ...defaultFontValue,
      fontSize: '14px',
      lineHeight: '20px',
      ...fontOverride,
    },
    [FontVariant.TextLarge]: {
      ...defaultFontValue,
      fontSize: '16px',
      lineHeight: '22px',
      ...fontOverride,
    },
    [FontVariant.TextExtraLarge]: {
      ...defaultFontValue,
      fontSize: '18px',
      lineHeight: '26px',
      ...fontOverride,
    },
    [FontVariant.TextXExtraLarge]: {
      ...defaultFontValue,
      fontSize: '28px',
      lineHeight: '40px',
      ...fontOverride,
    },
  };
};

const getButtonFontVariants = (fontOverride: FontOverrideType = {}): Partial<FontObjectType> => {
  return {
    [FontVariant.ButtonSmEmphasis]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '12px',
      lineHeight: '14px',
      ...fontOverride,
    },
    [FontVariant.ButtonSm]: {
      ...defaultFontValue,
      fontSize: '12px',
      lineHeight: '14px',
      ...fontOverride,
    },
    [FontVariant.ButtonSmUpEmphasis]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '13px',
      lineHeight: '16px',
      ...fontOverride,
    },
    [FontVariant.ButtonSmUp]: {
      ...defaultFontValue,
      fontSize: '13px',
      lineHeight: '16px',
      ...fontOverride,
    },
    [FontVariant.ButtonMdEmphasis]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '14px',
      lineHeight: '16px',
      ...fontOverride,
    },
    [FontVariant.ButtonMd]: {
      ...defaultFontValue,
      fontSize: '14px',
      lineHeight: '16px',
      ...fontOverride,
    },
    [FontVariant.ButtonLgEmphasis]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '16px',
      lineHeight: '18px',
      ...fontOverride,
    },
    [FontVariant.ButtonLg]: {
      ...defaultFontValue,
      fontSize: '16px',
      lineHeight: '18px',
      ...fontOverride,
    },
    [FontVariant.ButtonLgUpEmphasis]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '18px',
      lineHeight: '20px',
      ...fontOverride,
    },
    [FontVariant.ButtonLgUp]: {
      ...defaultFontValue,
      fontSize: '18px',
      lineHeight: '20px',
      ...fontOverride,
    },
  };
};

const getLinkFontVariants = (fontOverride: FontOverrideType = {}): Partial<FontObjectType> => {
  return {
    [FontVariant.LinkSmall]: {
      ...defaultFontValue,
      fontSize: '12px',
      lineHeight: '14px',
      ...fontOverride,
    },
    [FontVariant.LinkSmallEmphasis]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '12px',
      lineHeight: '14px',
      ...fontOverride,
    },
    [FontVariant.LinkSmallUp]: {
      ...defaultFontValue,
      fontSize: '13px',
      lineHeight: '16px',
      ...fontOverride,
    },
    [FontVariant.LinkSmallUpEmphasis]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '13px',
      lineHeight: '16px',
      ...fontOverride,
    },
    [FontVariant.LinkMedium]: {
      ...defaultFontValue,
      fontSize: '14px',
      lineHeight: '16px',
      ...fontOverride,
    },
    [FontVariant.LinkMediumEmphasis]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '14px',
      lineHeight: '16px',
      ...fontOverride,
    },
    [FontVariant.LinkLarge]: {
      ...defaultFontValue,
      fontSize: '16px',
      lineHeight: '18px',
      ...fontOverride,
    },
    [FontVariant.LinkLargeEmphasis]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '16px',
      lineHeight: '18px',
      ...fontOverride,
    },
    [FontVariant.LinkLargeUp]: {
      ...defaultFontValue,
      fontSize: '18px',
      lineHeight: '20px',
      ...fontOverride,
    },
    [FontVariant.LinkLargeUpEmphasis]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '18px',
      lineHeight: '20px',
      ...fontOverride,
    },
  };
};

const getInputFontVariants = (fontOverride: FontOverrideType = {}): Partial<FontObjectType> => {
  return {
    [FontVariant.InputSm]: {
      ...defaultFontValue,
      fontSize: '12px',
      lineHeight: '14px',
      ...fontOverride,
    },
    [FontVariant.InputSmUp]: {
      ...defaultFontValue,
      fontSize: '13px',
      lineHeight: '16px',
      ...fontOverride,
    },
    [FontVariant.InputMd]: {
      ...defaultFontValue,
      fontSize: '14px',
      lineHeight: '16px',
      ...fontOverride,
    },
    [FontVariant.InputLg]: {
      ...defaultFontValue,
      fontSize: '16px',
      lineHeight: '18px',
      ...fontOverride,
    },
  };
};

const getTitleFontVariants = (fontOverride: FontOverrideType = {}): Partial<FontObjectType> => {
  return {
    [FontVariant.TitleH6]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '12px',
      lineHeight: '18px',
      ...fontOverride,
    },
    [FontVariant.TitleH5]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '14px',
      lineHeight: '21px',
      ...fontOverride,
    },
    [FontVariant.TitleH4]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '16px',
      lineHeight: '24px',
      ...fontOverride,
    },
    [FontVariant.TitleH3]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '18px',
      lineHeight: '27px',
      ...fontOverride,
    },
    [FontVariant.TitleH2]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '20px',
      lineHeight: '30px',
      ...fontOverride,
    },
    [FontVariant.TitleH1]: {
      ...defaultFontValue,
      fontWeight: FontWeight.Medium,
      fontSize: '28px',
      lineHeight: '42px',
      ...fontOverride,
    },
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getDefaultTypography = (typographyOverride = {}) => {
  return {
    fontFamily: defaultFontValue.fontFamily,
    baseLineHeight: 1.375,
    ...typographyOverride,
    font: {
      ...getLabelFontVariants(typographyOverride),
      ...getTextFontVariants(typographyOverride),
      ...getButtonFontVariants(typographyOverride),
      ...getLinkFontVariants(typographyOverride),
      ...getInputFontVariants(typographyOverride),
      ...getTitleFontVariants(typographyOverride),
    },
  };
};
