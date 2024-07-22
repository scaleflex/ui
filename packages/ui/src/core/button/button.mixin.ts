import { css } from 'styled-components';

import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import StyledBadge from '../badge/badge.styles';
import type { ButtonProps } from './button.props';
import { Color as PaletteColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';
import { ButtonSize, ButtonColor } from '../../utils/types';

export const colorButtonMixin = {
  [ButtonColor.Primary]: ({ theme: { palette }, active }: With<WithTheme, ButtonProps>) => css`
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

    ${active &&
    css`
      background-color: ${palette[PaletteColor.AccentPrimaryActive]};

      &:hover,
      &:focus {
        background-color: ${palette[PaletteColor.AccentPrimaryActive]};
      }
    `}

    &:disabled {
      color: ${palette[PaletteColor.BordersDisabled]};
      background: ${palette[PaletteColor.Accent_1_2_Opacity]};
      cursor: default;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.BordersDisabled]};
        background: transparent;
      }
    }
  `,

  [ButtonColor.Secondary]: ({ theme: { palette }, active }: With<WithTheme, ButtonProps>) => css`
    background-color: ${palette[PaletteColor.BackgroundStateless]};
    color: ${palette[PaletteColor.AccentStateless]};
    border: 1px solid ${palette[PaletteColor.AccentStateless]};

    ${StyledBadge.Badge} {
      color: ${palette[PaletteColor.AccentStateless]};
      background: transparent;
    }

    &:hover {
      color: ${palette[PaletteColor.ButtonPrimaryText]};
      background-color: ${palette[PaletteColor.AccentPrimaryHover]};

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.ButtonPrimaryText]};
      }
    }

    &:focus {
      color: ${palette[PaletteColor.AccentPrimaryActive]};
      background-color: ${palette[PaletteColor.Accent_1_2_Opacity]};
      border: 1px solid ${palette[PaletteColor.AccentPrimaryActive]};

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.AccentPrimaryActive]};
      }
    }

    &:active {
      color: ${palette[PaletteColor.ButtonPrimaryText]};
      background-color: ${palette[PaletteColor.AccentPrimaryActive]};

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.ButtonPrimaryText]};
      }
    }

    ${active &&
    css`
      color: ${palette[PaletteColor.ButtonPrimaryText]};
      background-color: ${palette[PaletteColor.AccentPrimaryActive]};

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.ButtonPrimaryText]};
      }

      &:hover,
      &:focus {
        color: ${palette[PaletteColor.ButtonPrimaryText]};
        background-color: ${palette[PaletteColor.AccentPrimaryActive]};

        ${StyledBadge.Badge} {
          color: ${palette[PaletteColor.ButtonPrimaryText]};
        }
      }
    `}

    &:disabled {
      color: ${palette[PaletteColor.BordersDisabled]};
      background: ${palette[PaletteColor.Accent_1_2_Opacity]};
      border: none;
      cursor: default;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.BordersDisabled]};
      }
    }
  `,

  [ButtonColor.Basic]: ({ theme: { palette }, active }: With<WithTheme, ButtonProps>) => css`
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

    ${active &&
    css`
      background-color: ${palette[PaletteColor.BackgroundActive]};
      color: ${palette[PaletteColor.LinkHover]};

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.LinkHover]};
      }

      &:hover,
      &:focus {
        background-color: ${palette[PaletteColor.BackgroundActive]};
        color: ${palette[PaletteColor.LinkHover]};
      }
    `}

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

  [ButtonColor.LinkPrimary]: ({ theme: { palette }, active }: With<WithTheme, ButtonProps>) => css`
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

    ${active &&
    css`
      color: ${palette[PaletteColor.AccentPrimaryActive]};

      &:hover,
      &:focus {
        color: ${palette[PaletteColor.AccentPrimaryActive]};
    `}

    &:disabled {
      background-color: transparent;
      color: ${palette[PaletteColor.BordersDisabled]};
      cursor: default;
    }
  `,

  [ButtonColor.LinkSecondary]: ({ theme: { palette }, active }: With<WithTheme, ButtonProps>) => css`
    color: ${palette[PaletteColor.LinkStateless]};
    background-color: transparent;
    padding: 0px !important;

    &:hover {
      background-color: transparent;
      color: ${palette[PaletteColor.AccentPrimaryHover]};
    }

    &:active {
      color: ${palette[PaletteColor.AccentPrimaryActive]};
    }

    ${active &&
    css`
      color: ${palette[PaletteColor.AccentPrimaryActive]};

      &:hover,
      &:focus {
        color: ${palette[PaletteColor.AccentPrimaryActive]};
      }
    `}

    &:disabled {
      background-color: transparent;
      color: ${palette[PaletteColor.BordersDisabled]};
      cursor: default;
    }
  `,

  [ButtonColor.LinkBasicPrimary]: ({ theme: { palette }, active }: With<WithTheme, ButtonProps>) => css`
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

    ${active &&
    css`
      color: ${palette[PaletteColor.AccentPrimaryActive]};

      &:hover,
      &:focus {
        color: ${palette[PaletteColor.AccentPrimaryActive]};
      }
    `}

    &:disabled {
      background-color: transparent;
      color: ${palette[PaletteColor.BordersDisabled]};
      cursor: default;
    }
  `,

  [ButtonColor.LinkBasicSecondary]: ({ theme: { palette }, active }: With<WithTheme, ButtonProps>) => css`
    color: ${palette[PaletteColor.LinkStateless]};
    background-color: transparent;
    padding: 0px !important;

    &:hover {
      background-color: transparent;
      color: ${palette[PaletteColor.AccentPrimaryHover]};
    }

    &:active {
      color: ${palette[PaletteColor.AccentPrimaryActive]};
    }

    ${active &&
    css`
      color: ${palette[PaletteColor.AccentPrimaryActive]};

      &:hover,
      &:focus {
        color: ${palette[PaletteColor.AccentPrimaryActive]};
      }
    `}

    &:disabled {
      background-color: transparent;
      color: ${palette[PaletteColor.BordersDisabled]};
      cursor: default;
    }
  `,

  [ButtonColor.ErrorPrimary]: ({ theme: { palette }, active }: With<WithTheme, ButtonProps>) => css`
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

    ${active &&
    css`
      background-color: ${palette[PaletteColor.ErrorActive]};

      &:hover,
      &:focus {
        background-color: ${palette[PaletteColor.ErrorActive]};
      }
    `}

    &:disabled {
      background-color: ${palette[PaletteColor.Accent_1_2_Opacity]};
      color: ${palette[PaletteColor.BordersDisabled]};
      cursor: default;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.BordersDisabled]};
        background: transparent;
      }
    }
  `,

  [ButtonColor.ErrorSecondary]: ({ theme: { palette }, active }: With<WithTheme, ButtonProps>) => css`
    background-color: ${palette[PaletteColor.BackgroundStateless]};
    color: ${palette[PaletteColor.LinkStateless]};
    border: 1px solid ${palette[PaletteColor.BordersButton]};

    ${StyledBadge.Badge} {
      color: ${palette[PaletteColor.LinkStateless]};
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
      color: ${palette[PaletteColor.ButtonPrimaryText]};
      border: none;
    }

    ${active &&
    css`
      background-color: ${palette[PaletteColor.ErrorActive]};
      color: ${palette[PaletteColor.ButtonPrimaryText]};
      border: none;

      &:hover,
      &:focus {
        background-color: ${palette[PaletteColor.ErrorActive]};
      }
    `}

    &:disabled {
      color: ${palette[PaletteColor.BordersDisabled]};
      background: ${palette[PaletteColor.Accent_1_2_Opacity]};
      border: none;
      cursor: default;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.BordersDisabled]};
      }
    }
  `,

  [ButtonColor.ErrorBasic]: ({ theme: { palette }, active }: With<WithTheme, ButtonProps>) => css`
    color: ${palette[PaletteColor.LinkStateless]};
    background-color: transparent;

    &:hover {
      color: ${palette[PaletteColor.ErrorHover]};
    }

    &:active {
      color: ${palette[PaletteColor.ErrorActive]};
    }

    ${active &&
    css`
      color: ${palette[PaletteColor.ErrorActive]};

      &:hover,
      &:focus {
        color: ${palette[PaletteColor.ErrorActive]};
      }
    `}

    &:disabled {
      color: ${palette[PaletteColor.BordersDisabled]};
      cursor: default;
    }
  `,

  [ButtonColor.WarningPrimary]: ({ theme: { palette }, active }: With<WithTheme, ButtonProps>) => css`
    background-color: ${palette[PaletteColor.Warning]};
    color: ${palette[PaletteColor.ButtonPrimaryText]};

    ${StyledBadge.Badge} {
      color: ${palette[PaletteColor.ButtonPrimaryText]};
      background: transparent;
    }

    &:hover {
      background-color: ${palette[PaletteColor.WarningHover]};
    }

    &:active {
      background-color: ${palette[PaletteColor.WarningActive]};
    }

    ${active &&
    css`
      background-color: ${palette[PaletteColor.WarningActive]};

      &:hover,
      &:focus {
        background-color: ${palette[PaletteColor.WarningActive]};
      }
    `}

    &:disabled {
      background-color: ${palette[PaletteColor.Accent_1_2_Opacity]};
      color: ${palette[PaletteColor.BordersDisabled]};
      cursor: default;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.BordersDisabled]};
        background: transparent;
      }
    }
  `,

  [ButtonColor.WarningSecondary]: ({ theme: { palette }, active }: With<WithTheme, ButtonProps>) => css`
    background-color: ${palette[PaletteColor.BackgroundStateless]};
    color: ${palette[PaletteColor.LinkStateless]};
    border: 1px solid ${palette[PaletteColor.BordersButton]};

    ${StyledBadge.Badge} {
      color: ${palette[PaletteColor.LinkStateless]};
      background-color: transparent;
    }

    &:hover {
      background-color: ${palette[PaletteColor.WarningHover]};
      color: ${palette[PaletteColor.ButtonPrimaryText]};
      border: none;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.ButtonPrimaryText]};
      }
    }

    &:active {
      background-color: ${palette[PaletteColor.WarningActive]};
      color: ${palette[PaletteColor.ButtonPrimaryText]};
      border: none;
    }

    ${active &&
    css`
      background-color: ${palette[PaletteColor.WarningActive]};
      color: ${palette[PaletteColor.ButtonPrimaryText]};
      border: none;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.ButtonPrimaryText]};
        background-color: transparent;
      }

      &:hover,
      &:focus {
        background-color: ${palette[PaletteColor.WarningActive]};
      }
    `}

    &:disabled {
      color: ${palette[PaletteColor.BordersDisabled]};
      background: ${palette[PaletteColor.Accent_1_2_Opacity]};
      border: none;
      cursor: default;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.BordersDisabled]};
      }
    }
  `,

  [ButtonColor.WarningBasic]: ({ theme: { palette }, active }: With<WithTheme, ButtonProps>) => css`
    color: ${palette[PaletteColor.LinkStateless]};
    background-color: transparent;

    &:hover {
      color: ${palette[PaletteColor.WarningHover]};
    }

    &:active {
      color: ${palette[PaletteColor.WarningActive]};
    }

    ${active &&
    css`
      color: ${palette[PaletteColor.WarningActive]};

      &:hover,
      &:focus {
        color: ${palette[PaletteColor.WarningActive]};
      }
    `}

    &:disabled {
      color: ${palette[PaletteColor.BordersDisabled]};
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

export const sizeSecondaryButtonMixin = {
  [ButtonSize.Xs]: css`
    padding: 4px 10px;
  `,

  [ButtonSize.Sm]: css`
    padding: 7px 12px;
  `,

  [ButtonSize.Md]: css`
    padding: 10px 16px;
  `,

  [ButtonSize.Lg]: css`
    padding: 13px 24px;
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

export const paddingIconLabelMixin = {
  [ButtonSize.Xs]: css`
    margin-right: 5px;
  `,

  [ButtonSize.Sm]: css`
    margin-right: 6px;
  `,

  [ButtonSize.Md]: css`
    margin-right: 7px;
  `,

  [ButtonSize.Lg]: css`
    margin-right: 8px;
  `,
};

export const sizeButtonLabelMixin = {
  [ButtonSize.Xs]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FontVariant.ButtonSmEmphasis]),

  [ButtonSize.Sm]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FontVariant.ButtonMdEmphasis]),

  [ButtonSize.Md]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FontVariant.ButtonLgEmphasis]),

  [ButtonSize.Lg]: ({
    theme: {
      typography: { font },
    },
  }: WithTheme) => css(font[FontVariant.ButtonLgUpEmphasis]),
};
