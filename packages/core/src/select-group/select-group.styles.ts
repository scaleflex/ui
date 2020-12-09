import styled from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
// import type { With } from '@sfx-ui/utils/types';
// import type { WithTheme } from '@sfx-ui/theme/entity';
// import { Color as PColor } from '@sfx-ui/utils/types/palette';
// import type { SelectGroupProps } from './select-group.props';

const baseClassName = 'SelectGroup';

const SelectGroup = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})``;

const Styled = { SelectGroup };

export default Styled;
