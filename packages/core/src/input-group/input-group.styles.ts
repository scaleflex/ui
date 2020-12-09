import styled from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';

const baseClassName = 'InputGroup';

const InputGroup = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})``;

const Styled = { InputGroup };

export default Styled;
