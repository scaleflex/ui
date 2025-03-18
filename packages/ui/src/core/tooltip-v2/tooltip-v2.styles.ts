import { applyDisplayNames, generateClassNames } from '../../utils/functions';
import Tippy from 'rb-tippyjs-react';
import styled, { css } from 'styled-components';

import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape/border-radius-size';
import { fontTooltipMixin, sizeTooltipMixin } from '../tooltip/tooltip.mixin';
import { TooltipSizeType, TooltipVariantType } from './tooltip-v2.props';
import { Size } from './types';
import { variantMixin } from './tooltip-v2.mixin';

const baseClassName = 'TooltipV2';

const TooltipV2 = styled(Tippy).attrs({
  className: generateClassNames(baseClassName, 'root'),
})<With<WithTheme, { $variant: TooltipVariantType; $size: TooltipSizeType }>>(
  ({ $variant, $size = Size.Sm, theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 54px;
    min-height: 20px;
    word-break: break-word;
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};

    ${variantMixin[$variant]};

    ${sizeTooltipMixin[$size]};

    .tippy-content {
      padding: 0;
      ${fontTooltipMixin[$size]}
    }
  `
);

const TooltipText = styled.div.attrs({
  className: generateClassNames(baseClassName, 'content'),
})`
  display: flex;
  align-items: center;
`;

const Styled = applyDisplayNames({ TooltipV2, TooltipText });

export default Styled;
