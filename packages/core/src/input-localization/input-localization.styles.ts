import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
// import type { With } from '@sfx-ui/utils/types';
import type { WithTheme } from '@sfx-ui/theme/entity';
import { FontVariant as FV } from '@sfx-ui/utils/types/typography';
import { Color as PColor } from '@sfx-ui/utils/types/palette';
// import { BorderRadiusSize as BRSize } from '@sfx-ui/utils/types/shape';

const baseClassName = 'InputLocalization';

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    display: flex;
    flex-shrink: 0;
    color: ${palette[PColor.IconsSecondary]};

    &:first-child {
      margin-right: 4px;
    }

    &:last-child {
      margin-left: 7px;
    }
  `
);

const Container = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Container'),
})`display: inline-flex;`;

const InputLocalization = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme: { palette, typography: { font } } }: WithTheme) => css`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${palette[PColor.IconsSecondary]};

    ${font[FV.TextSmall]};
  `
);

const Label = styled.label.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})`
  flex-grow: 1;
  min-width: 30px;
`;

const Styled = {
  Container,
  InputLocalization,
  Label,
  Icon,
};

export default Styled;
