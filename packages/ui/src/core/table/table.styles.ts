import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

const baseClassName = 'Table';

const Table = styled.table.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

const Styled = applyDisplayNames({
  Table,
});

export default Styled;
