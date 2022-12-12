import { lightPalette } from '../../theme/roots/palette';
import { Color } from '../../utils/types/palette';

export const getInputBackgroundColor = (readOnly?: boolean, disabled?: boolean): string | undefined => {
  if (readOnly || disabled) {
    return lightPalette[Color.BackgroundHover];
  }

  return lightPalette[Color.BackgroundStateless];
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

export const getInputBorderColor = (readOnly?: boolean, disabled?: boolean): string | undefined => {
  if (readOnly) {
    return lightPalette[Color.BordersItem];
  }

  if (disabled) {
    return lightPalette[Color.BordersSecondary];
  }

  return lightPalette[Color.BorderPrimaryStateless];
};

export const handleCopyIcon = (value: string): void => {
  navigator.clipboard.writeText(value);
};
