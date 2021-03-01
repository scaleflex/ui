import styled, { css } from 'styled-components';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { ButtonProps } from './button.props';
import {
  colorButtonMixin, sizeButtonMixin, sizeButtonLabelMixin
} from './button.mixin';
import { Size, Color } from './types';

const baseClassName = 'Button';

const Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})`
  display: flex;
`;

const Badge = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Badge'),
})`
  display: flex;
  margin-left: 5px;
`;

const Button = styled.button.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({
    color = Color.Secondary, size = Size.Md, theme
  }: With<WithTheme, ButtonProps>) => css`
    display: inline-flex;
    flex-shrink: 0;
    flex-direction: row;
    align-items: center;
    border-radius: ${theme.shape.borderRadius[BRSize.Sm]};
    border: 0;
    cursor: pointer;
    outline: none;

    ${colorButtonMixin[color]}
    ${sizeButtonMixin[size]}

    ${Label} {
      ${sizeButtonLabelMixin[size]}
    }
  `
);

const Icon = styled.span.attrs({

  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ $loading }:ButtonProps) => css`
  display: flex;
  margin-right: 4px;
  margin-left: 1px;

  svg {
    animation: ${$loading ? 'spinner 1.2s linear infinite' : '1.2s'} ;
  }
  
`
);

const Styled = applyDisplayNames({
  Button,
  Label,
  Icon,
  Badge
});

export default Styled;
