import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

const baseClassName = 'TableBody';

const TableBody = styled.tbody.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  display: table-row-group;
`;

const Styled = applyDisplayNames(
  {
    TableBody
  }
);

export default Styled;
