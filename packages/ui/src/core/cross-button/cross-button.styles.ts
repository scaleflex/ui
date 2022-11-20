import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
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

const CrossButton = styled.button.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ size = Size.Lg, theme }: With<WithTheme, CrossButtonProps>) => css`
    cursor: pointer;
    ${crossButtonPaddingMixin[size]}

    color: ${theme.palette[PaletteColor.IconsSecondary]};
    background: transparent;
    border: none;
    transition: all 100ms ease-out;

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
