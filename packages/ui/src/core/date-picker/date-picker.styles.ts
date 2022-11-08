import styled from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import InputGroup from '../input-group';

const baseClassName = 'Date-picker';

const DatePicker = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})``;

const DatePickerInput = styled(InputGroup).attrs({
  className: generateClassNames(baseClassName, 'input'),
})`
  & > input::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;

const Styled = applyDisplayNames({
  DatePicker,
  DatePickerInput,
});

export default Styled;
