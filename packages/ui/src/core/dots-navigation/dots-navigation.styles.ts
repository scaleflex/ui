import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
// import type { With } from '../../utils/types';
// import type { WithTheme } from '../../theme/entity';
// import { Color as PColor } from '../../utils/types/palette';
import DotStyled from '../dot/dot.styles';
// import type { DotsNavigationProps } from './dots-navigation.props';

const baseClassName = 'DotsNavigation';

const DotsNavigation = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  // ({ theme }: With<WithTheme, DotsNavigationProps>) =>
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
