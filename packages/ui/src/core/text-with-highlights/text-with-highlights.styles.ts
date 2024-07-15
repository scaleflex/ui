import styled, { css } from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
import type { WithTheme } from '../../theme/entity';

const baseClassName = 'TextWithHighlights';

const TextWithHighlights = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<With<WithTheme, { highlightColor?: string }>>(
  ({ highlightColor, theme }) => css`
    background-color: ${highlightColor || theme.palette[PColor.Accent_1_8_Opacity]};
  `
);

const Styled = applyDisplayNames({ TextWithHighlights });

export default Styled;
