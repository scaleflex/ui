import styled, { css } from 'styled-components';
import type { WithTheme } from '../../theme/entity';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';
import { popupContentMixin } from './popup-content.mixin';
import { PopupContentProps } from './popup-content.props';

const baseClassName = 'PopupContent';

const LabelWrapper = styled.span.attrs({
  className: generateClassNames(baseClassName, 'LabelWrapper'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    display: flex;
    flex-grow: 1;
    margin-left: 44px;
    margin-right: 28px;
    padding: 16px;
    padding-right: 0;
    overflow: hidden;
    background: ${palette[PColor.ButtonPrimaryText]};
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
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${palette[PColor.TextPrimary]};

    ${font[FontVariant.TextSmallUp]}
  `
);

const PopupContent = styled.div.attrs({
  className: generateClassNames(baseClassName, 'PopupContent'),
})(
  ({ theme }: WithTheme) => css`
    position: relative;
    display: flex;
    align-items: center;
    width: 360px;
    border-radius: 4px;
    box-shadow: 0px 2px 6px ${theme.palette[PColor.LargeShadow]};
  `
);

const CloseWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'PopupContent'),
})(
  ({ theme }: WithTheme) => css`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 2px;
    height: fit-content;
    cursor: pointer;
    background: ${theme.palette[PColor.BackgroundStateless]};
    border-radius: 0 4px 4px 0;
    height: 100%;
  `
);

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
    border-radius: 4px 0 0 4px;

    ${popupContentMixin[status]}
  `
);

const Styled = applyDisplayNames({
  PopupContent,
  PopupStatus,
  LabelWrapper,
  CloseWrapper,
  Label,
});

export default Styled;
