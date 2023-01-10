import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import type { TableRowProps } from './table-row.props';

const baseClassName = 'TableRow';

const TableRow = styled.tr.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme: { palette }, hover, selected }: With<WithTheme, TableRowProps>) => css`
    color: inherit;
    display: table-row;
    vertical-align: middle;
    outline: 0;
    background-color: ${selected ? `${palette[PColor.BackgroundActive]}` : ''};
    &:hover {
      background-color: ${hover && !selected ? `${palette[PColor.BackgroundHover]}` : ''};
    }
  `
);

const Styled = applyDisplayNames({
  TableRow,
});

export default Styled;
