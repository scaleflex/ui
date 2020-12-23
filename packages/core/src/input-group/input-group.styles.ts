import styled from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import StyledLabel from '../label/label.styles';
import StyledFormHint from '../form-hint/form-hint.styles';

const baseClassName = 'InputGroup';

const InputGroup = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  ${StyledFormHint.FormHint} {
    margin-top: 4px;
  }

  ${StyledLabel.Label} {
    margin-bottom: 4px;
  }
`;

const Styled = { InputGroup };

export default Styled;
