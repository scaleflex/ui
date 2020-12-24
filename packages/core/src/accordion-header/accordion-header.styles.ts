import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
// import type { With } from '@sfx-ui/utils/types';
import type { WithTheme } from '@sfx-ui/theme/entity';
import { Color as PColor } from '@sfx-ui/utils/types/palette';
import { FontVariant } from '@sfx-ui/utils/types/typography';
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

const Styled = { AccordionHeader, Icon, Label };

export default Styled;
