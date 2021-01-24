import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
// import type { With } from '../../utils/types';
// import type { WithTheme } from '../../theme/entity';
// import { Color as PColor } from '../../utils/types/palette';
// import type { SelectGroupProps } from './select-group.props';
import StyledInputGroup from '../input-group/input-group.styles';

const baseClassName = 'SelectGroup';

const SelectGroup = styled(StyledInputGroup.InputGroup).attrs({
  className: generateClassNames(baseClassName, 'root'),
})``;

const Styled = applyDisplayNames({ SelectGroup });

export default Styled;
