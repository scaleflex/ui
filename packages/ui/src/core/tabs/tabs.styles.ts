import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import TabStyled from '../tab/tab.styles';

const baseClassName = 'Tabs';

const Tabs = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  display: flex;
  align-items: flex-start;
  overflow: auto;

  ${TabStyled.Tab} {
    &:not(:first-child) {
      margin-left: 24px;
    }
  }
`;

const Styled = applyDisplayNames({
  Tabs,
});

export default Styled;
