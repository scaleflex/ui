import styled from 'styled-components';
import { generateClassNames } from '../../utils/functions';

const baseClassName = 'Accordion';

const Accordion = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})``;

const Styled = { Accordion };

export default Styled;
