import styled, { css } from 'styled-components';

import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

const baseClassName = 'Ellipsed';

const EllipsedTextWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<With<WithTheme, { $maxLinesCount?: number }>>(
  ({ $maxLinesCount }) => css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${$maxLinesCount};
    overflow: hidden;
    width: 100%;
  `
);

const TooltipContent = styled.div.attrs({
  className: generateClassNames(baseClassName, 'tooltip-content'),
})<With<WithTheme, { $customMaxHeight?: number | string }>>(
  ({ $customMaxHeight }) => css`
    max-height: ${$customMaxHeight ? `${$customMaxHeight}px` : '100%'};
  `
);

const Styled = applyDisplayNames({
  EllipsedTextWrapper,
  TooltipContent,
});

export default Styled;
