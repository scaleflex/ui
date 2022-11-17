/* eslint-disable sonarjs/no-identical-functions */
import { css } from 'styled-components';

import type { WithTheme } from '../../theme/entity';
import { Color as PaletteColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';
import { NotificationStatus } from './types';

export const backgroundColorMixin = {
  [NotificationStatus.Info]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.BackgroundBlue]};
  `,

  [NotificationStatus.Error]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.BackgroundRed]};
  `,

  [NotificationStatus.Warning]: ({ theme: { palette } }: WithTheme) => css`
    background-color: ${palette[PaletteColor.BackgroundOrange]};
  `,
};

export const messageColorMixin = {
  [NotificationStatus.Info]: ({ theme }: WithTheme) => css`
    color: ${theme.palette[PaletteColor.Info]};
    ${theme.typography.font[FontVariant.TextSmallUp]};
  `,

  [NotificationStatus.Error]: ({ theme }: WithTheme) => css`
    color: ${theme.palette[PaletteColor.TextError]};
    ${theme.typography.font[FontVariant.TextSmallUp]};
  `,

  [NotificationStatus.Warning]: ({ theme }: WithTheme) => css`
    color: ${theme.palette[PaletteColor.TextWarning]};
    ${theme.typography.font[FontVariant.LabelSmallUp]};
  `,
};

export const messageWithIconMixin = {
  [NotificationStatus.Info]: ({ theme }: WithTheme) => css`
    ${theme.typography.font[FontVariant.TextSmallUp]};
  `,

  [NotificationStatus.Error]: ({ theme }: WithTheme) => css`
    ${theme.typography.font[FontVariant.TextSmallUp]};
  `,

  [NotificationStatus.Warning]: ({ theme }: WithTheme) => css`
    ${theme.typography.font[FontVariant.LabelSmallUp]};
  `,
};

export const messageFontMixin = {
  [NotificationStatus.Info]: ({ theme }: WithTheme) => css`
    ${theme.typography.font[FontVariant.TextSmall]};
  `,

  [NotificationStatus.Error]: ({ theme }: WithTheme) => css`
    ${theme.typography.font[FontVariant.TextSmall]};
  `,

  [NotificationStatus.Warning]: ({ theme }: WithTheme) => css`
    ${theme.typography.font[FontVariant.LabelSmall]};
  `,
};
