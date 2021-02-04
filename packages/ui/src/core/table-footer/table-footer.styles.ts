import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

const baseClassName = 'TableFooter';

const TableFooter = styled.tfoot.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  display: table-footer-group;
 `;

const Styled = applyDisplayNames(
  {
    TableFooter
  }
);

export default Styled;
