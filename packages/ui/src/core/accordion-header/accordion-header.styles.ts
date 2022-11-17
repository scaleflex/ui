import styled, { css } from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';

const baseClassName = 'AccordionHeader';

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'icon'),
})(
  () => css`
    display: inline-flex;
    padding-left: 8px;
  `
);

const Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'label'),
})(
  ({ theme }: WithTheme) => css`
    ${theme.typography.font[FontVariant.ButtonXs]}
  `
);

const Header = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme, fullWidth }: With<WithTheme, { fullWidth?: boolean }>) => css`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    cursor: pointer;
    width: ${fullWidth ? '100%' : 'auto'};
    color: ${theme.palette[PColor.LinkPrimary]};
    user-select: none;
  `
);

const Wrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'wrapper'),
})(
  ({ theme }: WithTheme) => css`
    color: ${theme.palette[PColor.LinkPrimary]};
  `
);

const Styled = applyDisplayNames({ Header, Wrapper, Icon, Label });

export default Styled;
