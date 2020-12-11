import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { With } from '@sfx-ui/utils/types';
import type { WithTheme } from '@sfx-ui/theme/entity';
import { Color as PColor } from '@sfx-ui/utils/types/palette';
import { BorderRadiusSize as BRSize } from '@sfx-ui/utils/types/shape/border-radius-size';
import StyledArrowTick from '../arrow-tick/arrow-tick.styles';
import type { TooltipProps } from './tooltip.props';
import { positionTooltipMixin, sizeTooltipMixin } from './tooltip.mixin';
import { Position, Size } from './types';

const baseClassName = 'Tooltip';

const TooltipContainer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  (
    {
      position = Position.Top, rect, open, size = Size.Sm, theme
    }: With<With<WithTheme, TooltipProps>, {rect: DOMRect, open: boolean}>
  ) => css`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    min-width: 16px;
    min-height: 16px;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    transition: opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    visibility: ${open ? 'visible' : 'hidden'};
    opacity: ${open ? '1' : '0'};

    ${positionTooltipMixin[position]({ rect })}
    ${sizeTooltipMixin[size]}

    ${StyledArrowTick.ArrowTick} {
      color: ${theme.palette[PColor.IconsPrimary]};
    }
  `
);

const Tooltip = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme }: WithTheme) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 3px 6px;
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};
    background: ${theme.palette[PColor.IconsPrimary]};
    color: ${theme.palette[PColor.TextPrimaryInvert]};
  `
);

const Styled = { Tooltip, TooltipContainer };

export default Styled;
