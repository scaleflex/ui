import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import ButtonStyled from '../button/button.styles';
import type { IconButtonProps } from './icon-button.props';
import { Size } from './types';

const baseClassName = 'IconButton';

const squarePaddingMixin = {
  [Size.Xs]: css`padding: 6px`,
  [Size.Sm]: css`padding: 8px`,
  [Size.Md]: css`padding: 8px`,
  [Size.Lg]: css`padding: 10px`,
  [Size.Xl]: css`padding: 11px`,
};

const IconButton = styled(ButtonStyled.Button).attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ square = false, size = Size.Md }: IconButtonProps) => css`
    ${square && squarePaddingMixin[size]}
  `
);

const Styled = {
  IconButton,
};

export default Styled;
