import styled, { css } from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import type { WithTheme } from '../../theme/entity';

const baseClassName = 'Divider';

const Divider = styled.hr.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme }: WithTheme) => css`
    margin: 0px;
    flex-shrink: 0;
    border-width: 0px 0px thin;
    border-style: solid;
    border-color: ${theme.palette[PColor.BordersSecondary]};
  `
);

const Styled = applyDisplayNames({ Divider });

export default Styled;
