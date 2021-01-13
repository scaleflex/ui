import styled, { css } from 'styled-components';
import { generateClassNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
// import { Color as PColor } from '../../utils/types/palette';
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
