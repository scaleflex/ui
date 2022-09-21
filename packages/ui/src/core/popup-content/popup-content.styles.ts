import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';

const baseClassName = 'PopupContent';

const LabelWrapper = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    display: flex;
    flex-grow: 1;
    margin-left: 44px;
    margin-right: 28px;
    padding: 16px;
    background: ${palette[PColor.ButtonPrimaryText]};
    min-height: 41px;
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
  border-radius: 4px;
  filter: drop-shadow(0px 2px 6px rgba(146, 166, 188, 0.32));
`;

const CloseWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'PopupContent'),
})`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 28px;
  height: 100%;
  background-color: #ffff;
`;

const CloseIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'PopupContent'),
})`
  width: 24px;
  height: 24px;
  padding: 8.7px;
`;

const Robot = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Robot'),
})`
  position: absolute;
  display: flex;
  left: 0;
  z-index: 1;
  height: 100%;
  min-width: 44px;
  align-items: center;
  justify-content: center;
  background-color: #edfaf4;
  box-sizing: border-box;
`;

const Styled = applyDisplayNames({
  PopupContent,
  Robot,
  LabelWrapper,
  CloseWrapper,
  CloseIcon,
  Label,
});

export default Styled;
