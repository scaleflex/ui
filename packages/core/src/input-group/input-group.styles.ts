import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
// import type { With } from '@sfx-ui/utils/types';
// import type { WithTheme } from '@sfx-ui/theme/entity';
// import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
// import type { InputGroupProps } from './input-group.props';
// import { sizeInputGroupMixin, errorMixin } from './input-group.mixin';
// import { Type } from './types';

const baseClassName = 'InputGroup';

const InputGroup = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  () => css`
  `
);

const Styled = { InputGroup };

export default Styled;
