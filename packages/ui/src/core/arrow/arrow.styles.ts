import styled, { css } from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import type { ArrowProps } from './arrow.props';
import { typeArrowMixin } from './arrow.mixin';
import { Position } from '../../utils/types';

const baseClassName = 'Arrow';

const Arrow = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ type = Position.Right }: With<WithTheme, ArrowProps>) => css`
    display: inline-flex;
    transition: transform 0.15s;

    ${typeArrowMixin[type]}
  `
);

const Styled = applyDisplayNames({ Arrow });

export default Styled;
