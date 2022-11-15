import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import ButtonStyled from '../button/button.styles';
import type { CrossButtonProps } from './cross-button.props';
import { Color as PaletteColor } from '../../utils/types/palette';
import type { WithTheme } from '../../theme/entity';
import { Size } from './types';
import { With } from '../../utils/types';

const baseClassName = 'CrossButton';

const crossButtonPaddingMixin = {
  [Size.Sm]: css`
    padding: 6px;
  `,
  [Size.Lg]: css`
    padding: 12px;
  `,
};

const CrossButton = styled(ButtonStyled.Button).attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({
    size = Size.Lg,
    theme,
  }: With<WithTheme, CrossButtonProps>) => css`
    ${crossButtonPaddingMixin[size]}

    color: ${theme.palette[PaletteColor.IconsSecondary]};
    background: transparent;
    border: none;
    
    &:hover {
      color: ${theme.palette[PaletteColor.IconsPrimary]};
      background: transparent;
    }

    &:active {
      color: ${theme.palette[PaletteColor.IconsPrimaryHover]};
      background: transparent;
    }
  `
);

const Styled = applyDisplayNames({
  CrossButton,
});

export default Styled;
