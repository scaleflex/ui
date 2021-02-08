import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

import type { PopperProps } from './popper.props';

const baseClassName = 'Popper';

const Popper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ open }: PopperProps) => css`
    position: fixed;
    top: 0;
    left: 0;
    display:${!open ? 'none' : null};
  `
);

const Styled = applyDisplayNames({ Popper });

export default Styled;
