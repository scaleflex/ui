import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import StyledInputGroup from '../input-group/input-group.styles';

const baseClassName = 'SelectGroup';

const SelectGroup = styled(StyledInputGroup.InputGroup).attrs({
  className: generateClassNames(baseClassName, 'root'),
})``;

const Styled = applyDisplayNames({ SelectGroup });

export default Styled;
