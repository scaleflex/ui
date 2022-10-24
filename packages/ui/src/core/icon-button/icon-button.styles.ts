import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import ButtonStyled from '../button/button.styles';
import type { IconButtonProps } from './icon-button.props';
import { Color as PaletteColor } from '../../utils/types/palette';
import type { WithTheme } from '../../theme/entity';
import { colorButtonMixin } from '../button/button.mixin';
import { ButtonSize, ButtonColor, With } from '../../utils/types';

const baseClassName = 'IconButton';

const squarePaddingMixin = {
  [ButtonSize.Xs]: css`
    padding: 6px;
  `,
  [ButtonSize.Sm]: css`
    padding: 9px;
  `,
  [ButtonSize.Md]: css`
    padding: 12px;
  `,
  [ButtonSize.Lg]: css`
    padding: 11px;
  `,
};

const IconButton = styled(ButtonStyled.Button).attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({
    color = ButtonColor.Secondary,
    disabled = false,
    size = ButtonSize.Md,
    theme,
  }: With<WithTheme, IconButtonProps>) => css`
    ${squarePaddingMixin[size]}
    ${colorButtonMixin[color]}

    ${!disabled &&
    color === ButtonColor.Basic &&
    css`
      &:hover {
        color: ${theme.palette[PaletteColor.IconsPrimaryHover]};
        background-color: ${theme.palette[PaletteColor.AccentSecondaryDisabled]};
      }

      &:active {
        color: ${theme.palette[PaletteColor.LinkActive]};
        background-color: ${theme.palette[PaletteColor.BackgroundActive]};
      }
    `}
  `
);

const Styled = applyDisplayNames({
  IconButton,
});

export default Styled;
