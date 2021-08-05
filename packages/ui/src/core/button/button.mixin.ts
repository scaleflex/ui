import { css } from 'styled-components';
import { Color as PaletteColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';
import type { WithTheme } from '../../theme/entity';
import StyledBadge from '../badge/badge.styles';
import { ButtonSize, ButtonColor } from '../../utils/types';

export const colorButtonMixin = {
  [ButtonColor.Primary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.AccentPrimary]};
    color: ${palette[PaletteColor.ButtonPrimaryText]};

    ${StyledBadge.Badge} {
      background-color: ${palette[PaletteColor.ButtonPrimaryText]};
    }

    &:hover {
      background-color: ${palette[PaletteColor.AccentPrimaryHover]};
    }

    &:active {
      background-color: ${palette[PaletteColor.AccentPrimaryActive]};
    }

    &:disabled {
      color: ${palette[PaletteColor.ButtonDisabledText]};
      background: ${palette[PaletteColor.AccentPrimaryDisabled]};

      ${StyledBadge.Badge} {
        background-color: ${palette[PaletteColor.ButtonDisabledText]};
        color: ${palette[PaletteColor.AccentPrimaryDisabled]};
      }
    }
  `,

  [ButtonColor.Secondary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.ActiveSecondary]};
    color: ${palette[PaletteColor.IconsPrimary]};

    &:hover {
      background-color: ${palette[PaletteColor.ActiveSecondaryHover]};
    }

    &:active {
      background-color: ${palette[PaletteColor.ActiveSecondaryActive]};
    }

    &:disabled {
      color: ${palette[PaletteColor.ButtonDisabledText]};
      background: ${palette[PaletteColor.AccentPrimaryDisabled]};

      ${StyledBadge.Badge} {
        background-color: ${palette[PaletteColor.ButtonDisabledText]};
      }
    }

    ${StyledBadge.Badge} {
      background-color: ${palette[PaletteColor.IconsPrimary]};
    }
  `,

  [ButtonColor.Link]: ({ theme: { palette } }: WithTheme) => css`
    background-color: transparent;
    color: ${palette[PaletteColor.LinkPrimary]};

    &:hover {
      color: ${palette[PaletteColor.LinkHover]};

      ${StyledBadge.Badge} {
        background-color: ${palette[PaletteColor.LinkHover]};
      }
    }

    &:active {
      color: ${palette[PaletteColor.LinkActive]};

      ${StyledBadge.Badge} {
        background-color: ${palette[PaletteColor.LinkActive]};
      }
    }

    &:disabled {
      color: ${palette[PaletteColor.ButtonDisabledText]};

      ${StyledBadge.Badge} {
        background-color: ${palette[PaletteColor.ButtonDisabledText]};
      }
    }
  `,
  [ButtonColor.Error]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.Error]};
    color: ${palette[PaletteColor.ButtonPrimaryText]};

    ${StyledBadge.Badge} {
      background-color: ${palette[PaletteColor.ButtonPrimaryText]};
    }

    &:hover {
      background-color: rgba(224, 81, 44, 1); //need to be added to the general color palette in figma
    }

    &:active {
      background-color: rgba(201, 58, 23, 1); //need to be added to the general color palette in figma
    }

    &:disabled {
      color: ${palette[PaletteColor.ButtonDisabledText]};
      background: ${palette[PaletteColor.AccentPrimaryDisabled]};

      ${StyledBadge.Badge} {
        background-color: ${palette[PaletteColor.ButtonDisabledText]};
        color: ${palette[PaletteColor.AccentPrimaryDisabled]};
      }
    }
  `,
};

export const sizeButtonMixin = {
  [ButtonSize.Xs]: css`
    padding: 4px 8px;
  `,

  [ButtonSize.Sm]: css`
    padding: 6px 10px;
  `,

  [ButtonSize.Md]: css`
    padding: 8px 12px;
  `,

  [ButtonSize.Lg]: css`
    padding: 10px 14px;
  `,

  [ButtonSize.Xl]: css`
    padding: 12px 16px;
  `,
};

export const sizeButtonLabelMixin = {
  [ButtonSize.Xs]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FontVariant.ButtonXs]),

  [ButtonSize.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FontVariant.ButtonSm]),

  [ButtonSize.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FontVariant.ButtonMd]),

  [ButtonSize.Lg]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FontVariant.ButtonLg]),

  [ButtonSize.Xl]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FontVariant.ButtonXl]),
};
