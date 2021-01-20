import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
// import type { WithTheme } from '../../theme/entity';
// import { Color as PColor } from '../../utils/types/palette';
import TabStyled from '../tab/tab.styles';

const baseClassName = 'Tabs';

const Tabs = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  () => css`
    display: flex;
    align-items: flex-start;
    overflow: auto;

    ${TabStyled.Tab} {
      &:not(:first-child) {
        margin-left: 24px;
      }
    }
  `
);

const Styled = applyDisplayNames({
  Tabs,
});

export default Styled;
