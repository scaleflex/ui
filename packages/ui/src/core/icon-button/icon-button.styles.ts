import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import ButtonStyled from '../button/button.styles';
import type { IconButtonProps } from './icon-button.props';
import { colorButtonMixin, squarePaddingMixin } from './icon-button.mixin';
import { ButtonSize, IconButtonColor } from '../../utils/types';

const baseClassName = 'IconButton';

const IconButton = styled(ButtonStyled.Button).attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({
    color = IconButtonColor.Secondary,
    size = ButtonSize.Md,
  }: IconButtonProps) => css`
    ${squarePaddingMixin[size]}
    ${colorButtonMixin[color]}
  `
);

const Styled = applyDisplayNames({
  IconButton,
});

export default Styled;
