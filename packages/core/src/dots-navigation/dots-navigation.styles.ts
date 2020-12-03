import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
// import type { With } from '@sfx-ui/utils/types';
// import type { WithTheme } from '@sfx-ui/theme/entity';
// import { Color as PColor } from '@sfx-ui/utils/types/palette';
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

const Styled = { DotsNavigation };

export default Styled;
