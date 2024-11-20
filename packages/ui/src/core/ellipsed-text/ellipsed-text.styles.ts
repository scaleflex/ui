import styled, { css } from 'styled-components';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

const baseClassName = 'Ellipsed';

const EllipsedTextWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  () => css`
    display: flex;
  `
);

const PrefixTextWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Prefix-content'),
})<With<WithTheme, { $maxLinesCount?: number }>>(
  ({ $maxLinesCount }) => css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${$maxLinesCount};
    overflow: hidden;
    width: 100%;

    ${$maxLinesCount === 1 &&
    css`
      word-break: break-all;
    `}
  `
);

const TooltipContent = styled.div.attrs({
  className: generateClassNames(baseClassName, 'tooltip-content'),
})<With<WithTheme, { $customMaxHeight?: number | string }>>(
  ({ $customMaxHeight }) => css`
    max-height: ${$customMaxHeight ? `${$customMaxHeight}px` : '100%'};
  `
);

const textSuffixTextWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Text-suffix-content'),
})(
  () => css`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  `
);

const Styled = applyDisplayNames({
  EllipsedTextWrapper,
  PrefixTextWrapper,
  TooltipContent,
  textSuffixTextWrapper,
});

export default Styled;
