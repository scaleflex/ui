import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
const baseClassName = 'TableContainer';

const TableContainer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    width: 100%;
    overflow-x: auto;
    background-color: #FFFFFF;
    border: 1px solid ${palette[PColor.BordersSecondary]};
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.35);
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.5);
    }
`);

const Styled = applyDisplayNames(
  {
    TableContainer
  }
);

export default Styled;
