import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
// import type { WithTheme } from '../../theme/entity';
// import { Color as PColor } from '../../utils/types/palette';
// import { FontVariant } from '../../utils/types/typography';
// import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { PopupProps } from './popup.props';
import { positionHorizontalMixin, positionVerticalMixin } from './popup.mixin';
import { Horizontal, Vertical } from './types';

const baseClassName = 'Popup';

const Popup = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ anchorOrigin }: PopupProps) => css`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1400;

    ${positionHorizontalMixin[anchorOrigin?.horizontal || Horizontal.Left]}
    ${positionVerticalMixin[anchorOrigin?.vertical || Vertical.Bottom]}
  `
);

const Styled = applyDisplayNames({
  Popup,
});

export default Styled;
