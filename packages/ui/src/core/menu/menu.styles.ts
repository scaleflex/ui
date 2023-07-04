import styled, { css, keyframes } from 'styled-components';
import { generateClassNames, applyDisplayNames, scrollBar } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';

const baseClassName = 'Menu';

const Overlay = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Overlay'),
})(
  () => css`
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: transparent;
    z-index: -1;
  `
);

const opacityKeyframes = keyframes`
  from { opacity: 0;  }
  to { opacity: 1; }
`;

const transformKeyframes = keyframes`
  from {  transform: scale(0.97); margin-top: 0px; }
  to { transform: scale(1); margin-top: 4px; }
`;

const fadeInAnimation = css`
  animation: ${opacityKeyframes} 250ms 0ms cubic-bezier(0.4, 0, 0.2, 1),
    ${transformKeyframes} 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const Menu = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({
    rect,
    theme,
    scroll,
    maxHeight = '',
  }: With<WithTheme, { rect: DOMRect; alignCenter: boolean; maxHeight?: string | number; scroll?: boolean }>) => css`
    min-width: ${rect.width}px;
    width: 195px;
    min-height: 16px;
    overflow-x: hidden;
    overflow-y: auto;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0, 1), transform 250ms cubic-bezier(0.4, 0, 0, 1),
      margin-top 250ms cubic-bezier(0.4, 0, 0, 1);
    outline: 0;
    box-shadow: 0px 1px 2px 0px ${theme.palette[PColor.MediumShadow]};
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};

    ${scroll && scrollBar}

    ${maxHeight &&
    css`
      max-height: ${Number.isNaN(+maxHeight) ? maxHeight : `${maxHeight}px`};
    `}
    margin-top: 4px;
    ${fadeInAnimation}
  `
);

const Styled = applyDisplayNames({
  Menu,
  Overlay,
});

export default Styled;
