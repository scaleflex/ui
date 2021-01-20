import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

const baseClassName = 'Accordion';

const Accordion = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})``;

const Styled = applyDisplayNames(
  {
    Accordion,
  }
);

export default Styled;
