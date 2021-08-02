import styled from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';

const baseClassName = 'AccordionDetails';

const AccordionDetails = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  margin: 16px 0;
`;

const Styled = applyDisplayNames({
  AccordionDetails,
});

export default Styled;
