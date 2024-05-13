import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

const baseClassName = 'TabPanel';

const TabPanel = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  margin-top: 20px;
`;

const Styled = applyDisplayNames({
  TabPanel,
});

export default Styled;
