import styled, { css } from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { ArrowTickProps } from './arrow-tick.props';
import { typeArrowTickMixin } from './arrow-tick.mixin';
import { Position } from '../../utils/types';

const baseClassName = 'ArrowTick';

const ArrowTick = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ type = Position.Right }: ArrowTickProps) => css`
    display: inline-flex;

    ${typeArrowTickMixin[type]}
  `
);

const Styled = applyDisplayNames({ ArrowTick });

export default Styled;
