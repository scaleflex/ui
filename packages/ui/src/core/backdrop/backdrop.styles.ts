import styled, { css } from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import type { WithTheme } from '../../theme/entity';

const baseClassName = 'Backdrop';

const Backdrop = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<WithTheme>(
  ({ theme: { palette } }) => css`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0px;
    background-color: ${palette[PColor.Extra_0_3_Overlay]};
    transition: opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    opacity: 1;
    z-index: -1;
  `
);
const Styled = applyDisplayNames({ Backdrop });

export default Styled;
