import { css } from 'styled-components';

import type { WithTheme } from '../../theme/entity';
import StyledBadge from '../badge/badge.styles';
import { Color as PaletteColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';
import { ButtonSize, ButtonColor } from '../../utils/types';

export const colorButtonMixin = {
  [ButtonColor.Primary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.AccentStateless]};
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
      color: ${palette[PaletteColor.BordersDisabled]};
      background: ${palette[PaletteColor.AccentPrimaryDisabled]};
      cursor: default;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.BordersDisabled]};
        background: transparent;
      }
    }
  `,

  [ButtonColor.Secondary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.ButtonPrimaryText]};
    color: ${palette[PaletteColor.AccentPrimary]};
    border: 1px solid ${palette[PaletteColor.AccentPrimary]};

    &:hover {
      color: ${palette[PaletteColor.ButtonPrimaryText]};
      background-color: ${palette[PaletteColor.AccentPrimaryHover]};

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.ButtonPrimaryText]};
      }
    }

    &:active {
      color: ${palette[PaletteColor.ButtonPrimaryText]};
      background-color: ${palette[PaletteColor.AccentPrimaryActive]};

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.ButtonPrimaryText]};
      }
    }

    &:disabled {
      color: ${palette[PaletteColor.BordersDisabled]};
      background: ${palette[PaletteColor.AccentPrimaryDisabled]};
      border: none;
      cursor: default;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.BordersDisabled]};
      }
    }

    ${StyledBadge.Badge} {
      color: ${palette[PaletteColor.AccentPrimary]};
      background: transparent;
    }
  `,

  [ButtonColor.Basic]: ({ theme: { palette } }: WithTheme) => css`
    background-color: transparent;
    border: 1px solid ${palette[PaletteColor.BordersButton]};
    color: ${palette[PaletteColor.LinkStateless]};

    ${StyledBadge.Badge} {
      background-color: transparent;
      color: ${palette[PaletteColor.LinkStateless]};
    }

    &:hover {
      background-color: ${palette[PaletteColor.BackgroundHover]};
      color: ${palette[PaletteColor.LinkHover]};

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.LinkHover]};
      }
    }

    &:active {
      background-color: ${palette[PaletteColor.BackgroundActive]};
      color: ${palette[PaletteColor.LinkHover]};

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.LinkHover]};
      }
    }

    &:disabled {
      background-color: ${palette[PaletteColor.Accent_1_2_Opacity]};
      color: ${palette[PaletteColor.BordersDisabled]};
      cursor: default;
      border: none;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.BordersDisabled]};
      }
    }
  `,

  [ButtonColor.LinkPrimary]: ({ theme: { palette } }: WithTheme) => css`
    color: ${palette[PaletteColor.AccentStateless]};
    background-color: transparent;
    padding: 0px !important;

    &:hover {
      background-color: transparent;
      color: ${palette[PaletteColor.AccentPrimaryHover]};
    }

    &:active {
      color: ${palette[PaletteColor.AccentPrimaryActive]};
    }

    &:disabled {
      background-color: transparent;
      color: ${palette[PaletteColor.ButtonDisabledText]};
      cursor: default;
    }
  `,

  [ButtonColor.LinkSecondary]: ({ theme: { palette } }: WithTheme) => css`
    color: ${palette[PaletteColor.IconsPrimary]};
    background-color: transparent;
    padding: 0px !important;

    &:hover {
      background-color: transparent;
      color: ${palette[PaletteColor.AccentPrimaryHover]};
    }

    &:active {
      color: ${palette[PaletteColor.AccentPrimaryActive]};
    }

    &:disabled {
      background-color: transparent;
      color: ${palette[PaletteColor.ButtonDisabledText]};
      cursor: default;
    }
  `,

  // eslint-disable-next-line sonarjs/no-identical-functions
  [ButtonColor.LinkBasic]: ({ theme: { palette } }: WithTheme) => css`
    color: ${palette[PaletteColor.AccentStateless]};
    background-color: transparent;
    padding: 0px !important;

    &:hover {
      background-color: transparent;
      color: ${palette[PaletteColor.AccentPrimaryHover]};
    }

    &:active {
      color: ${palette[PaletteColor.AccentPrimaryActive]};
    }

    &:disabled {
      background-color: transparent;
      color: ${palette[PaletteColor.ButtonDisabledText]};
      cursor: default;
    }
  `,

  [ButtonColor.WarningPrimary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.Error]};
    color: ${palette[PaletteColor.ButtonPrimaryText]};

    ${StyledBadge.Badge} {
      color: ${palette[PaletteColor.ButtonPrimaryText]};
      background: transparent;
    }

    &:hover {
      background-color: ${palette[PaletteColor.ErrorHover]};
    }

    &:active {
      background-color: ${palette[PaletteColor.ErrorActive]};
    }

    &:disabled {
      background-color: ${palette[PaletteColor.Error_0_12_Opacity]};
      color: ${palette[PaletteColor.StatesErrorDisabledText]};
      cursor: default;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.StatesErrorDisabledText]};
        background: transparent;
      }
    }
  `,

  [ButtonColor.WarningSecondary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.ButtonPrimaryText]};
    color: ${palette[PaletteColor.AccentPrimary]};
    border: 1px solid ${palette[PaletteColor.AccentPrimary]};

    ${StyledBadge.Badge} {
      color: ${palette[PaletteColor.AccentPrimary]};
      background-color: transparent;
    }

    &:hover {
      background-color: ${palette[PaletteColor.ErrorHover]};
      color: ${palette[PaletteColor.ButtonPrimaryText]};
      border: none;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.ButtonPrimaryText]};
      }
    }

    &:active {
      background-color: ${palette[PaletteColor.ErrorActive]};
    }

    &:disabled {
      color: ${palette[PaletteColor.ButtonDisabledText]};
      background: ${palette[PaletteColor.AccentPrimaryDisabled]};
      border: none;
      cursor: default;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.ButtonDisabledText]};
      }
    }
  `,

  [ButtonColor.WarningBasic]: ({ theme: { palette } }: WithTheme) => css`
    color: ${palette[PaletteColor.LinkStateless]};
    background-color: transparent;

    &:hover {
      color: ${palette[PaletteColor.ErrorHover]};
    }

    &:active {
      color: ${palette[PaletteColor.ErrorActive]};
    }

    &:disabled {
      color: ${palette[PaletteColor.ButtonDisabledText]};
      cursor: default;
    }
  `,
};

export const sizeButtonMixin = {
  [ButtonSize.Xs]: css`
    padding: 5px 10px;
  `,

  [ButtonSize.Sm]: css`
    padding: 8px 12px;
  `,

  [ButtonSize.Md]: css`
    padding: 11px 16px;
  `,

  [ButtonSize.Lg]: css`
    padding: 14px 24px;
  `,
};

export const sizeSidebarMixin = {
  [ButtonSize.Xs]: css`
    padding: 5px 10px;
  `,

  [ButtonSize.Sm]: css`
    padding: 8px 12px;
  `,

  [ButtonSize.Md]: css`
    padding: 11px 14px;
  `,

  [ButtonSize.Lg]: css`
    padding: 14px 16px;
  `,
};

export const sizeSidebarDividerMixin = {
  [ButtonSize.Xs]: css`
    height: 14px;
  `,

  [ButtonSize.Sm]: css`
    height: 16px;
  `,

  [ButtonSize.Md]: css`
    height: 18px;
  `,

  [ButtonSize.Lg]: css`
    height: 20px;
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
};
