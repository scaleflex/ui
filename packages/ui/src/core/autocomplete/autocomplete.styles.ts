import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

const baseClassName = 'Autocomplete';

const Container = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  cursor: pointer;
  width: 300px;
  margin: 5px 0px 5px 0px;
`;

const Styled = applyDisplayNames({
  Container,
});

export default Styled;
