import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import ButtonStyled from '../button/button.styles';
import type { IconButtonProps } from './icon-button.props';
import { Color as PaletteColor } from '../../utils/types/palette';
import type { WithTheme } from '../../theme/entity';
import { ButtonSize, With } from '../../utils/types';

const baseClassName = 'IconButton';

const squarePaddingMixin = {
  [ButtonSize.Sm]: css`
    padding: 9px;
  `,
  [ButtonSize.Md]: css`
    padding: 12px;
  `,
  [ButtonSize.Lg]: css`
    padding: 15px;
  `,
};

const IconButton = styled(ButtonStyled.Button).attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ square = true, disabled = false, size = ButtonSize.Md, theme }: With<WithTheme, IconButtonProps>) => css`
    ${squarePaddingMixin[size]}

    ${square &&
    !disabled &&
    css`
      &:hover {
        color: ${theme.palette[PaletteColor.ButtonPrimaryText]};
        background-color: ${theme.palette[PaletteColor.AccentPrimaryHover]};
      }

      &:active {
        color: ${theme.palette[PaletteColor.ButtonPrimaryText]};
        background-color: ${theme.palette[PaletteColor.AccentPrimaryActive]};
      }
    `}
  `
);

const Styled = applyDisplayNames({
  IconButton,
});

export default Styled;
