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
      color: ${palette[PaletteColor.ButtonDisabledText]};
      background: ${palette[PaletteColor.AccentPrimaryDisabled]};
      cursor: default;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.ButtonDisabledText]};
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
      color: ${palette[PaletteColor.ButtonDisabledText]};
      background: ${palette[PaletteColor.AccentPrimaryDisabled]};
      border: none;
      cursor: default;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.ButtonDisabledText]};
      }
    }

    ${StyledBadge.Badge} {
      color: ${palette[PaletteColor.AccentPrimary]};
      background: transparent;
    }
  `,

  [ButtonColor.Basic]: ({ theme: { palette } }: WithTheme) => css`
    background-color: transparent;
    color: ${palette[PaletteColor.LinkPrimary]};

    ${StyledBadge.Badge} {
      background-color: transparent;
      color: ${palette[PaletteColor.LinkPrimary]};
    }

    &:hover {
      color: ${palette[PaletteColor.AccentPrimaryHover]};

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.AccentPrimaryHover]};
      }
    }

    &:active {
      color: ${palette[PaletteColor.AccentPrimaryActive]};

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.AccentPrimaryActive]};
      }
    }

    &:disabled {
      color: ${palette[PaletteColor.ButtonDisabledText]};
      cursor: default;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.ButtonDisabledText]};
      }
    }
  `,
};

export const warningButtonMixin = {
  [ButtonColor.Primary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.StatesError]};
    color: ${palette[PaletteColor.ButtonPrimaryText]};

    ${StyledBadge.Badge} {
      color: ${palette[PaletteColor.ButtonPrimaryText]};
      background: transparent;
    }

    &:hover {
      background-color: ${palette[PaletteColor.StatesErrorHovered]};
    }

    &:active {
      background-color: ${palette[PaletteColor.StatesErrorActive]};
    }

    &:disabled {
      background-color: ${palette[PaletteColor.StatesErrorOpacity_0_12]};
      color: ${palette[PaletteColor.StatesErrorDisabledText]};
      cursor: default;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.StatesErrorDisabledText]};
        background: transparent;
      }
    }
  `,

  [ButtonColor.Secondary]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.ButtonPrimaryText]};
    color: ${palette[PaletteColor.AccentPrimary]};
    border: 1px solid ${palette[PaletteColor.AccentPrimary]};

    ${StyledBadge.Badge} {
      color: ${palette[PaletteColor.AccentPrimary]};
      background-color: transparent;
    }

    &:hover {
      background-color: ${palette[PaletteColor.StatesErrorHovered]};
      color: ${palette[PaletteColor.ButtonPrimaryText]};
      border: none;

      ${StyledBadge.Badge} {
        color: ${palette[PaletteColor.ButtonPrimaryText]};
      }
    }

    &:active {
      background-color: ${palette[PaletteColor.StatesErrorActive]};
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

  [ButtonColor.Basic]: ({ theme: { palette } }: WithTheme) => css`
    color: ${palette[PaletteColor.LinkHover]};
    background-color: transparent;

    &:hover {
      color: ${palette[PaletteColor.StatesErrorHovered]};
    }

    &:active {
      color: ${palette[PaletteColor.StatesErrorActive]};
    }

    &:disabled {
      color: ${palette[PaletteColor.ButtonDisabledText]};
      cursor: default;
    }
  `,
}

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
