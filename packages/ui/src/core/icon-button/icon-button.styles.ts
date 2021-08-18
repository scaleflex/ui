import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import ButtonStyled from '../button/button.styles';
import type { IconButtonProps } from './icon-button.props';
import { ButtonSize } from '../../utils/types';

const baseClassName = 'IconButton';

const squarePaddingMixin = {
  [ButtonSize.Xs]: css`
    padding: 6px;
  `,
  [ButtonSize.Sm]: css`
    padding: 8px;
  `,
  [ButtonSize.Md]: css`
    padding: 8px;
  `,
  [ButtonSize.Lg]: css`
    padding: 10px;
  `,
  [ButtonSize.Xl]: css`
    padding: 11px;
  `,
};

const IconButton = styled(ButtonStyled.Button).attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ square = false, size = ButtonSize.Md }: IconButtonProps) => css`
    ${square && squarePaddingMixin[size]}
  `
);

const Styled = applyDisplayNames({
  IconButton,
});

export default Styled;
