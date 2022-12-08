import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';

const baseClassName = 'TableHead';

const TableHead = styled.thead.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    display: table-header-group;
    height: 48px;
    border-bottom: 1px solid ${palette[PColor.BordersSecondary]};
  `
);

const Styled = applyDisplayNames({
  TableHead,
});

export default Styled;
