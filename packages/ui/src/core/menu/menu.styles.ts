import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';

const baseClassName = 'Menu';

const Wrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Wrapper'),
})(
  ({ open }: {open: boolean}) => css`
    position: fixed;
    right: 0px;
    bottom: 0px;
    top: 0px;
    left: 0px;
    z-index: 1300;
    visibility: ${open ? 'visible' : 'hidden'};
  `
);

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

const Container = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Container'),
})(
  ({
    open, fullWidth, rect, theme
  }: With<WithTheme, {open: boolean, fullWidth: boolean, rect: DOMRect}>) => css`
    position: absolute;
    max-width: calc(100% - 32px);
    min-width: 16px;
    /* max-height: calc(100% - 32px); */
    min-height: 16px;
    overflow-x: hidden;
    overflow-y: auto;
    transform: translate(-50%);
    transition: opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 167ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transform-origin: 0px 26px;
    outline: 0;
    filter: drop-shadow(0px 2px 4px ${theme.palette[PColor.LightShadow]});
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};

    visibility: ${open ? 'visible' : 'hidden'};
    opacity: ${open ? '1' : '0'};

    ${open && css`
      top: ${rect.top + rect.height}px;
      left: ${rect.left + rect.width / 2}px;

      ${fullWidth && css`
        min-width: ${rect.width}px;
      `}
    `}
  `
);

const Menu = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  () => css`
    position: relative;
    padding-top: 8px;
    padding-bottom: 8px;
    margin: 0;
    padding: 0;
    outline: 0;
    display: flex;
    flex-direction: column;
    max-height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
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
  Wrapper,
  Overlay,
  Container,
});

export default Styled;
