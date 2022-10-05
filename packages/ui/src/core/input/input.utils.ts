import { lightPalette } from '@scaleflex/ui/theme/roots/palette';
import { Color } from '@scaleflex/ui/utils/types/palette';

export const getInputBackgroundColor = (readOnly?: boolean, disabled?: boolean): string | undefined => {
  if (readOnly || disabled) {
    return lightPalette[Color.BackgroundHover];
  }

  return lightPalette[Color.TextPrimaryInvert];
};

export const getInputTextColor = (readOnly?: boolean, disabled?: boolean): string | undefined => {
  if (readOnly) {
    return lightPalette[Color.AccentPrimaryHover];
  }

  if (disabled) {
    return lightPalette[Color.TextPlaceholder];
  }

  return lightPalette[Color.TextPrimary];
};
