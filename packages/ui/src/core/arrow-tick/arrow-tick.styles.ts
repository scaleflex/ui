import styled, { css } from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import type { ArrowTickProps } from './arrow-tick.props';
import { typeArrowTickMixin } from './arrow-tick.mixin';
import { Position } from '../../utils/types';

const baseClassName = 'ArrowTick';

const ArrowTick = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ type = Position.Right }: With<WithTheme, ArrowTickProps>) => css`
    display: inline-flex;
    margin-left: 6px;

    ${typeArrowTickMixin[type]}
  `
);

const Styled = applyDisplayNames({ ArrowTick });

export default Styled;
