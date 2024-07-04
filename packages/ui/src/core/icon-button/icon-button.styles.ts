import styled, { css } from 'styled-components';

import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import ButtonStyled from '../button/button.styles';
import type { IconButtonColorType, IconButtonSizeType } from './icon-button.props';
import { colorButtonMixin, squarePaddingMixin } from './icon-button.mixin';
import { ButtonSize, IconButtonColor } from '../../utils/types';

const baseClassName = 'IconButton';

const IconButton = styled(ButtonStyled.Button).attrs({
  className: generateClassNames(baseClassName, 'root'),
})<With<WithTheme, { color?: IconButtonColorType; size?: IconButtonSizeType; $active?: boolean }>>(
  ({ theme, color = IconButtonColor.Secondary, size = ButtonSize.Md, $active = false }) => css`
    ${squarePaddingMixin[size]}
    ${colorButtonMixin[color]
      ? colorButtonMixin[color]({ theme, active: $active })
      : colorButtonMixin[IconButtonColor.Basic]({ theme, active: $active })}
  `
);

const Styled = applyDisplayNames({
  IconButton,
});

export default Styled;
