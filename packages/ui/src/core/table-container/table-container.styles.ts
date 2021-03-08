import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

const baseClassName = 'TableContainer';

const TableContainer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  width: 100%;
  overflow-x: auto;
  background-color: #ffffff;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.35);
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Styled = applyDisplayNames({
  TableContainer,
});

export default Styled;
