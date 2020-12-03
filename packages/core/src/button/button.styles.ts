import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { ButtonProps } from './button.props';
import {
  colorButtonMixin, sizeButtonMixin, sizeButtonLabelMixin
} from './button.mixin';
import { Size, Color, Status } from './types';

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
  margin-left: 4px;
`;

const Button = styled.button.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<ButtonProps>(
  ({
    color = Color.Secondary, status = Status.Stateless, size = Size.Md, theme
  }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 2px;
    border: 0;
    cursor: pointer;
    outline: none;

    ${colorButtonMixin[color].common({ theme })}
    ${colorButtonMixin[color][status]({ theme })}

    ${sizeButtonMixin[size]()}

    ${Label} {
      ${sizeButtonLabelMixin[size]({ theme })}
    }
  `
);

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})`
  display: flex;
  margin-right: 6px;
  margin-left: 1px;
`;

const Styled = {
  Button,
  Label,
  Icon,
  Badge
};

export default Styled;
