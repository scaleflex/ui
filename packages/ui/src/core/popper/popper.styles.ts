import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import type { PopperPositionType } from './popper.props';
import { PopperMixin } from './popper.mixin';
import { Position } from './types';

const baseClassName = 'Popper';

const Popper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(() => css``);

const PopperWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'wrapper'),
})(
  ({ zIndex }: { zIndex: number }) => css`
    position: relative;
    z-index: ${zIndex};
  `
);

const Arrow = styled.div.attrs({
  className: generateClassNames(baseClassName, 'arrow'),
})(
  ({ position = Position.Right, theme }: With<WithTheme, { position: PopperPositionType }>) => css`
    width: 8px;
    height: 8px;
    position: absolute;
    &::before {
      content: '';
      background: ${theme.palette[PColor.IconsPrimary]};
      width: 8px;
      height: 8px;
      transform: rotate(45deg);
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }

    ${PopperMixin[position]}
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
  `
);
const Styled = applyDisplayNames({ Popper, Overlay, Arrow, PopperWrapper });

export default Styled;
