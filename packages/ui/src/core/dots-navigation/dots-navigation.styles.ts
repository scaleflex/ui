import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import DotStyled from '../dot/dot.styles';

const baseClassName = 'DotsNavigation';

const DotsNavigation = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  () => css`
    ${DotStyled.Dot} {
      margin-left: 12px;

      &:first-child {
        margin-left: 0;
      }
    }
  `
);

const Styled = applyDisplayNames({ DotsNavigation });

export default Styled;
