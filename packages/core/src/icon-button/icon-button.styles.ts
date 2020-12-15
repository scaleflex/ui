import styled from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import ButtonStyled from '../button/button.styles';

const baseClassName = 'IconButton';

const IconButton = styled(ButtonStyled.Button).attrs({
  className: generateClassNames(baseClassName, 'root'),
})``;

const Styled = {
  IconButton,
};

export default Styled;
