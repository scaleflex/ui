import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
// import type { WithTheme } from '@sfx-ui/theme/entity';
// import { Color as PColor } from '@sfx-ui/utils/types/palette';
// import { FontVariant } from '@sfx-ui/utils/types/typography';
// import { BorderRadiusSize as BRSize } from '@sfx-ui/utils/types/shape';
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

const Styled = {
  Popup,
};

export default Styled;
