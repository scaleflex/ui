import styled, { css } from 'styled-components';

import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

const baseClassName = 'Ellipsed';

const EllipsedTextWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  display: flex;
  align-items: flex-end;
`;

const EllipsedTextContent = styled.div.attrs({
  className: generateClassNames(baseClassName, 'content'),
})<With<WithTheme, { $maxHeight: string | number }>>(
  ({ $maxHeight = 'inherit' }) => css`
    overflow: hidden;
    max-height: ${$maxHeight};
    position: relative;
    display: flex;
    align-items: baseline;
    max-width:  100%;
    word-break: break-all;
    text-align: left;
  `
);

const TooltipContent = styled.div.attrs({
  className: generateClassNames(baseClassName, 'tooltip-content'),
})<With<WithTheme, { $maxHeight: string | number }>>(
  ({ $maxHeight = '100%' }) => css`
    display: inline-block;
    max-height: ${$maxHeight};
    max-width: 100%;
  `
)

const DotsWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'dots-wrapper'),
})`
  flex-shrink: 0;
`

const Styled = applyDisplayNames({
  EllipsedTextWrapper,
  EllipsedTextContent,
  TooltipContent,
  DotsWrapper,
});

export default Styled;
