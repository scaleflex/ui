import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
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
    right: 0px;
    bottom: 0px;
    top: 0px;
    left: 0px;
    background-color: transparent;
    z-index: -1;
  `
);

const Menu = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({
    rect,
    theme,
    maxHeight = '',
  }: With<WithTheme, { rect: DOMRect; alignCenter: boolean; maxHeight?: string | number }>) => css`
    min-width: ${rect.width}px;
    min-height: 16px;
    overflow-x: hidden;
    overflow-y: auto;
    transition: opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 167ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    outline: 0;
    box-shadow: 0 2px 4px ${theme.palette[PColor.LightShadow]};
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};
    ${maxHeight &&
    css`
      max-height: ${Number.isNaN(+maxHeight) ? maxHeight : `${maxHeight}px`};
    `}

    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.35);
      border-radius: 2px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.5);
    }
  `
);

const Styled = applyDisplayNames({
  Menu,
  Overlay,
});

export default Styled;
