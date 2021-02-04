import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';
import type { TableCellProps } from './table-cell.props';
const baseClassName = 'TableCell';




const TableCellHeader = styled.th.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme: { palette, typography }, align, padding, size }: With<WithTheme, TableCellProps>) => css`
   ${css(typography.font[FontVariant.TextNormal])}
    display: table-cell;
    vertical-align: inherit;
    text-align: left;
    padding: ${size === 'small' ? '6px 16px' : '14px'};
    border-bottom: 1px solid ${palette[PColor.BordersSecondary]};
    text-align: ${align};
    flex-direction:${align === 'right' ? 'row-reverse' : ''};
    padding: ${padding === 'options' ?
      `${size === 'small' ? '0 12px 0 16px' : '0px 0px 0px 4px'}`
      :
      `${padding === 'none' ? 0 : ''}`};
    width: ${padding === 'options' ?
      `${size === 'small' ? '24px' : '48px'}`
      :
      ''};
    & > * : {
      padding : ${padding === 'options' && size === 'small' ? 0 : ''}
    }
`);

const TableCellData = styled.td.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme: { palette, typography }, align, padding, size }: With<WithTheme, TableCellProps>) => css`
${css(typography.font[FontVariant.TextNormal])}
  display: table-cell;
  vertical-align: inherit;
  text-align: left;
  padding: ${size === 'small' ? '6px 16px' : '14px'};
  border-bottom: 1px solid ${palette[PColor.BordersSecondary]};
  text-align: ${align};
  flex-direction: ${align === 'right' ? 'row-reverse' : ''};
  padding: ${padding === 'options' ?
      `${size === 'small' ? '0 12px 0 16px' : '0px 0px 0px 4px'}`
      :
      `${padding === 'none' ? 0 : ''}`};
    width: ${padding === 'options' ?
      `${size === 'small' ? '24px' : '48px'}`
      :
      ''};
    & > * : {
      padding : ${padding === 'options' && size === 'small' ? 0 : ''}
    }
`);

const Styled = applyDisplayNames(
  {
    TableCellHeader,
    TableCellData
  }
);

export default Styled;
