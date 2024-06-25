import { applyDisplayNames, generateClassNames } from '../../utils/functions';
import Tippy from '@tippyjs/react';
import styled, { css } from 'styled-components';

import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape/border-radius-size';
import { Color as PColor } from '../../utils/types/palette';
import { fontTooltipMixin, sizeTooltipMixin } from '../tooltip/tooltip.mixin';
import { TooltipSizeType } from './tooltip-v2.props';
import { Size } from './types';

const baseClassName = 'TooltipV2';

const TooltipV2 = styled(Tippy).attrs({
  className: generateClassNames(baseClassName, 'root'),
})<With<WithTheme, { $warning?: boolean; $info?: boolean; $size: TooltipSizeType }>>(
  ({ $warning, $info, $size = Size.Sm, theme }) => css`
    display: inline-flex;
    align-items: center;
    min-width: 54px;
    min-height: 20px;
    word-break: break-word;
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};
    background: ${theme.palette[
      ($warning && PColor.BackgroundOrange) || ($info && PColor.BackgroundBlue) || PColor.IconsPlaceholder
    ]};
    color: ${theme.palette[($warning && PColor.TextWarning) || ($info && PColor.TextInfo) || PColor.LinkActive]};

    ${sizeTooltipMixin[$size]};

    .tippy-arrow {
      color: ${theme.palette[
        ($warning && PColor.BackgroundOrange) || ($info && PColor.BackgroundBlue) || PColor.IconsPlaceholder
      ]};
    }

    .tippy-content {
      padding: 0;
      ${fontTooltipMixin[$size]}
    }
  `
);

const TooltipText = styled.div.attrs({
  className: generateClassNames(baseClassName, 'content'),
})<With<WithTheme, { $warning?: boolean; $info?: boolean }>>(
  ({ $warning, $info, theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.palette[($warning && PColor.TextWarning) || ($info && PColor.TextInfo) || PColor.LinkActive]};
  `
);

const Styled = applyDisplayNames({ TooltipV2, TooltipText });

export default Styled;
