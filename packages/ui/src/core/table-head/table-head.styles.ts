import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';

const baseClassName = 'TableHead';

const TableHead = styled.thead.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme }: WithTheme) => css`
  display: table-header-group;
  background-color: ${theme.palette[PColor.BackgroundPrimary]};
`
);

const Styled = applyDisplayNames(
  {
    TableHead
  }
);

export default Styled;
