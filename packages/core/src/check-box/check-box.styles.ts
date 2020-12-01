import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
// import type { WithTheme } from '@sfx-ui/theme/entity';
// import type { With } from '@sfx-ui/utils/types';
// import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import type { CheckBoxProps } from './check-box.props';

const baseClassName = 'CheckBox';

const CheckBox = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<CheckBoxProps>(
  () => css`
    display: inline-flex;
    cursor: pointer;
  `
);

const Styled = { CheckBox };

export default Styled;
