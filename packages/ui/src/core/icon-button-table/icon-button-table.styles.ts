import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { IconButtonTableProps } from './icon-button-table.props';
import { Color as PaletteColor } from '../../utils/types/palette';
import type { WithTheme } from '../../theme/entity';
import { Size } from './types';
import { With } from '../../utils/types';

const baseClassName = 'IconButtonTable';

const IconButtonTablePaddingMixin = {
  [Size.Sm]: css`
    padding: 6px;
  `,

  [Size.Md]: css`
    padding: 9px;
  `,
};

const IconButtonTable = styled.button.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ size = Size.Md, theme }: With<WithTheme, IconButtonTableProps>) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;
    ${IconButtonTablePaddingMixin[size]}

    color: ${theme.palette[PaletteColor.IconsSecondary]};
    background: transparent;
    border: none;
    transition: all 100ms ease-out;

    &:hover {
      color: ${theme.palette[PaletteColor.IconsPrimary]};
      background: ${theme.palette[PaletteColor.BordersSecondary]};
    }

    &:active {
      color: ${theme.palette[PaletteColor.IconsPrimaryHover]};
      background: ${theme.palette[PaletteColor.BordersItem]};
    }
  `
);

const Styled = applyDisplayNames({
  IconButtonTable,
});

export default Styled;
