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

const Overlay = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Overlay'),
})(
  () => css`
    position: fixed;
    right: 0px;
    bottom: 0px;
    top: 0px;
    left: 0px;
    background-color: transparent;
    z-index: 1200;
  `
);
const Styled = applyDisplayNames({ Popper, Overlay });

export default Styled;
