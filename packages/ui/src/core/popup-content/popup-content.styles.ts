import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';

const baseClassName = 'PopupContent';

const LabelWrapper = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})(
  ({ theme: { palette, shape } }: WithTheme) => css`
    flex-grow: 1;
    margin-left: 31px;
    padding: 8px 8px 8px 39px;
    background: ${palette[PColor.ButtonPrimaryText]};
    border-radius: ${shape.borderRadius[BRSize.Sm]};
  `
);

const Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})(
  ({
    theme: {
      palette,
      typography: { font },
    },
  }: WithTheme) => css`
    display: flex;
    align-items: center;
    color: ${palette[PColor.TextSecondary]};

    ${font[FontVariant.LabelSmall]}
  `
);

const PopupContent = styled.div.attrs({
  className: generateClassNames(baseClassName, 'PopupContent'),
})`
  position: relative;
  display: flex;
  align-items: center;
  width: 256px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Robot = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Robot'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    position: absolute;
    left: 0;
    display: flex;
    z-index: 1;
    border-radius: 50%;
    background: ${palette[PColor.ButtonPrimaryText]};
    border: 1px solid ${palette[PColor.BackgroundSecondary]};
    box-sizing: border-box;
  `
);

const Styled = applyDisplayNames({
  PopupContent,
  Robot,
  LabelWrapper,
  Label,
});

export default Styled;
