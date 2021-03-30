import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

const baseClassName = 'Popper';

const Popper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  () => css`
    z-index: 1300;
  `
);

const Styled = applyDisplayNames({ Popper });

export default Styled;
