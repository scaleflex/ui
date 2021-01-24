import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
// import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { FontVariant as FV } from '../../utils/types/typography';
import { Color as PColor } from '../../utils/types/palette';
// import { BorderRadiusSize as BRSize } from '../../utils/types/shape';

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

    ${font[FV.LabelSmall]};
  `
);

const Label = styled.label.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})`
  flex-grow: 1;
  min-width: 30px;
`;

const Styled = applyDisplayNames({
  Container,
  InputLocalization,
  Label,
  Icon,
});

export default Styled;
