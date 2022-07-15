import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

const baseClassName = 'Autocomplete';

const Container = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Container'),
})`
  cursor: pointer;
  width: 300px;
`;

const Styled = applyDisplayNames({
  Container,
});

export default Styled;
