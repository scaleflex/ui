import { WithTheme } from '@sfx-ui/theme/entity';
import { css } from 'styled-components';
// import type { WithTheme } from '@sfx-ui/theme/entity';
// import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import { FontVariant as FV } from '@sfx-ui/utils/types/typography';
import StyledArrowTick from '../arrow-tick/arrow-tick.styles';
import { Position, Size } from './types';

export const positionTooltipMixin = {
  [Position.Right]: ({ rect }: {rect: DOMRect}) => css`
    top: ${rect.top + rect.height / 2}px;
    left: ${rect.left + rect.width}px;
    transform: translate(0, -50%);

    ${StyledArrowTick.ArrowTick} {
      transform: translate(1px);
    }
  `,

  [Position.Left]: ({ rect }: {rect: DOMRect}) => css`
    top: ${rect.top + rect.height / 2}px;
    left: ${rect.left}px;
    transform: translate(-100%, -50%);

    ${StyledArrowTick.ArrowTick} {
      order: 2;
      transform: translate(-1px);
    }
  `,

  [Position.Top]: ({ rect }: {rect: DOMRect}) => css`
    flex-direction: column;
    top: ${rect.top}px;
    left: ${rect.left + rect.width / 2}px;
    transform: translate(-50%, -100%);

    ${StyledArrowTick.ArrowTick} {
      order: 2;
      transform: translate(0, -1px);
    }
  `,

  [Position.Bottom]: ({ rect }: {rect: DOMRect}) => css`
    flex-direction: column;
    top: ${rect.top + rect.height}px;
    left: ${rect.left + rect.width / 2}px;
    transform: translate(-50%);

    ${StyledArrowTick.ArrowTick} {
      transform: translate(0, 1px);
    }
  `,
};

export const sizeTooltipMixin = {
  [Size.Sm]: ({ theme: { typography: { font } } }: WithTheme) => font[FV.TextSmall],

  [Size.Md]: ({ theme: { typography: { font } } }: WithTheme) => font[FV.TextNormal],
};
