import styled, { css } from 'styled-components';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';
import { popupContentMixin } from './popup-content.mixin';
import { PopupContentProps } from './popup-content.props';

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
})<PopupContentProps>(
  ({ theme }: With<WithTheme, PopupContentProps>) => css`
    position: relative;
    display: flex;
    align-items: center;
    width: 256px;
    border-radius: 4px;
    box-shadow: 0px 2px 6px ${theme.palette[PColor.HeavyShadow]};
  `
);

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
  cursor: pointer;
`;

const CloseIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'PopupContent'),
})`
  width: 10px;
  height: 10px;
  padding: 8.7px;
`;

const PopupStatus = styled.div.attrs({
  className: generateClassNames(baseClassName, 'PopupStatus'),
})<PopupContentProps>(
  ({ status = 'success' }: PopupContentProps) => css`
    position: absolute;
    display: flex;
    left: 0;
    z-index: 1;
    height: 100%;
    min-width: 44px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    ${popupContentMixin[status]}
  `
);

const Styled = applyDisplayNames({
  PopupContent,
  PopupStatus,
  LabelWrapper,
  CloseWrapper,
  CloseIcon,
  Label,
});

export default Styled;
