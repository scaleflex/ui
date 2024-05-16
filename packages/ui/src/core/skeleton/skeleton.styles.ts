import styled, { css, keyframes } from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import { Color as PC } from '../../utils/types/palette';
import type { WithTheme } from '../../theme/entity';
import { SkeletonProps } from './skeleton.props';

const baseClassName = 'Skeleton';

const pulseKeyframe = keyframes`
0% {
  opacity: 1;
}

50% {
  opacity: 0.4;
}

100% {
  opacity: 1;
}
`;

const Skeleton = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<With<WithTheme, SkeletonProps>>(
  ({ theme, width, height }) => css`
    display: block;
    background-color: ${theme.palette[PC.BordersSecondary]};
    width: ${typeof width === 'number' ? `${width}px` : width};
    height: ${typeof height === 'number' ? `${height}px` : height};
    animation: ${pulseKeyframe} 1.5s ease-in-out 0.5s infinite;

    &::before {
      content: '\\00a0';
    }
  `
);

const Styled = applyDisplayNames({ Skeleton });

export default Styled;
