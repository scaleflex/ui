import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { With } from '@sfx-ui/utils/types';
import type { WithTheme } from '@sfx-ui/theme/entity';
// import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import type { ArrowTickProps } from './arrow-tick.props';
import { typeArrowTickMixin } from './arrow-tick.mixin';
import { Type } from './types';

const baseClassName = 'ArrowTick';

const ArrowTick = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ type = Type.Right }: With<WithTheme, ArrowTickProps>) => css`
    display: inline-flex;
    transition: transform 0.15s;

    ${typeArrowTickMixin[type]}
  `
);

const Styled = { ArrowTick };

export default Styled;
