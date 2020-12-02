import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { With } from '@sfx-ui/utils/types';
import type { WithTheme } from '@sfx-ui/theme/entity';
// import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import type { ArrowProps } from './arrow.props';
import { typeArrowMixin } from './arrow.mixin';
import { Type } from './types';

const baseClassName = 'Arrow';

const Arrow = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ type = Type.Right }: With<WithTheme, ArrowProps>) => css`
    display: inline-flex;
    transition: transform 0.15s;

    ${typeArrowMixin[type]}
  `
);

const Styled = { Arrow };

export default Styled;
