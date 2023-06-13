import { applyDisplayNames, generateClassNames } from '@scaleflex/ui/utils/functions';
import Tippy from '@tippyjs/react';
import styled, { css } from 'styled-components';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape/border-radius-size';
import { Color as PColor } from '../../utils/types/palette';
import { fontTooltipMixin, sizeTooltipMixin } from '../tooltip/tooltip.mixin';
import { TippyTooltipProps } from './tippy-tooltip.props';
import { Size } from './types';

const baseClassName = 'TippyTooltip';

const TippyTooltip = styled(Tippy).attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ warning, size = Size.Sm, theme }: With<WithTheme, Partial<TippyTooltipProps>>) => css`
    display: inline-flex;
    align-items: center;
    min-width: 54px;
    min-height: 20px;
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};
    background: ${warning ? theme.palette[PColor.BackgroundOrange] : theme.palette[PColor.IconsPlaceholder]};
    color: ${warning ? theme.palette[PColor.TextWarning] : theme.palette[PColor.LinkActive]};

    ${sizeTooltipMixin[size]};

    .tippy-arrow {
      color: ${warning ? theme.palette[PColor.BackgroundOrange] : theme.palette[PColor.IconsPlaceholder]};
    }

    .tippy-content {
      padding: 0;
      ${fontTooltipMixin[size]}
    }
  `
);

const TooltipText = styled.div.attrs({
  className: generateClassNames(baseClassName, 'content'),
})(
  ({ warning, theme }: With<WithTheme, Partial<TippyTooltipProps>>) => css`
    display: flex;
    align-items: center;
    color: ${warning ? theme.palette[PColor.TextWarning] : theme.palette[PColor.LinkActive]};
  `
);

const Styled = applyDisplayNames({ TippyTooltip, TooltipText });

export default Styled;
