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
    width: 16px;
  `
);

const Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})(
  ({ theme }: WithTheme) => css`
    color: ${theme.palette[PColor.TextPrimary]};

    ${css(theme.typography.font[FontVariant.TextSmall])}
  `
);

const AccordionHeader = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  () => css`
    display: flex;
    align-items: center;
    cursor: pointer;
  `
);

const Styled = { AccordionHeader, Icon, Label };

export default Styled;
