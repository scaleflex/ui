import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
// import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';
// import type { AccordionHeaderProps } from './accordion-header.props';

const baseClassName = 'AccordionHeader';

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  () => css`
    display: inline-flex;
    margin-right: 8px;
  `
);

const Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})``;

const AccordionHeader = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme }: WithTheme) => css`
    ${css(theme.typography.font[FontVariant.ButtonXs])}
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${theme.palette[PColor.LinkPrimary]};
  `
);

const Styled = applyDisplayNames({ AccordionHeader, Icon, Label });

export default Styled;
