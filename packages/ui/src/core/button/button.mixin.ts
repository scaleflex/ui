import { css } from 'styled-components';

import type { WithTheme } from '../../theme/entity';
import StyledBadge from '../badge/badge.styles';
import { Color as PaletteColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';
import { ButtonSize, ButtonColor } from '../../utils/types';

export const colorButtonMixin = {
  [ButtonColor.Primary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.AccentPrimary]};
    color: ${palette[PaletteColor.ButtonPrimaryText]};

    ${StyledBadge.Badge} {
      color: ${palette[PaletteColor.ButtonPrimaryText]};
      background: transparent;
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
        color: ${palette[PaletteColor.ButtonDisabledText]};
        background: transparent;
      }
    }
  `,

  [ButtonColor.Secondary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.ActiveSecondary]};
    color: ${palette[PaletteColor.AccentPrimary]};
    border: 1px solid ${palette[PaletteColor.AccentPrimary]};

    &:hover {
      color: ${palette[PaletteColor.AccentPrimaryHover]};
      background-color: ${palette[PaletteColor.ActiveSecondaryHover]};
      border: 1px solid ${palette[PaletteColor.AccentPrimaryHover]};
    }

    &:active {
      color: ${palette[PaletteColor.AccentPrimaryActive]};
      background-color: ${palette[PaletteColor.ActiveSecondaryActive]};
      border: 1px solid ${palette[PaletteColor.AccentPrimaryActive]};
    }

    &:disabled {
      color: ${palette[PaletteColor.ButtonSecondaryDisabledText]};
      background: ${palette[PaletteColor.ButtonPrimaryText]};
      border: 1px solid ${palette[PaletteColor.ButtonSecondaryDisabledText]};

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.ButtonSecondaryDisabledText]};
      }
    }

    ${StyledBadge.Badge} {
      color: ${palette[PaletteColor.AccentPrimary]};
      background: transparent;
    }
  `,

  [ButtonColor.Link]: ({ theme: { palette } }: WithTheme) => css`
    background-color: transparent;
    color: ${palette[PaletteColor.LinkPrimary]};

    ${StyledBadge.Badge} {
      background-color: transparent;
      color: ${palette[PaletteColor.LinkPrimary]};
    }

    &:hover {
      color: ${palette[PaletteColor.LinkHover]};

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.LinkHover]};
      }
    }

    &:active {
      color: ${palette[PaletteColor.LinkActive]};

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.LinkActive]};
      }
    }

    &:disabled {
      color: ${palette[PaletteColor.ButtonSecondaryDisabledText]};

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.ButtonSecondaryDisabledText]};
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
  [ButtonSize.Sm]: css`
    padding: 4px 8px;
  `,

  [ButtonSize.Sm_m]: css`
    padding: 4px 8px;
  `,

  [ButtonSize.Sm_up]: css`
    padding: 6px 10px;
  `,

  [ButtonSize.Md]: css`
    padding: 8px 12px;
  `,

  [ButtonSize.Lg]: css`
    padding: 12px 16px;
  `,

  [ButtonSize.Xl]: css`
    padding: 14px 24px;
  `,
};

export const sizeButtonLabelMixin = {
  [ButtonSize.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FontVariant.ButtonSm]),

  [ButtonSize.Sm_m]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FontVariant.ButtonSmM]),

  [ButtonSize.Sm_up]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FontVariant.ButtonSmUp]),

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
