import styled, { css } from 'styled-components';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { ButtonProps } from './button.props';
import { colorButtonMixin, warningButtonMixin, sizeButtonMixin, sizeButtonLabelMixin } from './button.mixin';
import { Color as PColor } from '../../utils/types/palette';
import { ButtonSize, ButtonColor } from '../../utils/types';

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
  ({ color = ButtonColor.Secondary, size = ButtonSize.Md, iconDirection, warning, link, theme }: With<WithTheme, ButtonProps>) => css`
    display: inline-flex;
    flex-shrink: 0;
    flex-direction: ${iconDirection === 'right' ? 'row-reverse' : 'row'};
    align-items: center;
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};
    border: 0;
    cursor: pointer;
    outline: none;

    ${warning ? warningButtonMixin[color] : colorButtonMixin[color]}
    ${sizeButtonMixin[size]}

    ${Label} {
      ${sizeButtonLabelMixin[size]}

      ${link && color === ButtonColor.Basic && `font-weight: 400`}
    }

    ${Badge} {
      ${sizeButtonLabelMixin[size]}
    }

    ${link && css`
      color: ${theme.palette[PColor.AccentStateless]};
      background-color: transparent;
      border: none;
      padding: 0px;

      &:hover {
        background-color: transparent;
        color: ${theme.palette[PColor.AccentPrimaryHover]};
      }

      &:active {
        color: ${theme.palette[PColor.AccentPrimaryActive]};
      }

      &:disabled {
        background-color: transparent;
        color: ${theme.palette[PColor.ButtonDisabledText]};
      }`
    }

    ${link && color === ButtonColor.Secondary && `color: ${theme.palette[PColor.LinkHover]}`}}
  `
);

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ $loading, iconDirection }: ButtonProps) => css`
    display: flex;
    margin-right: 6px;

    ${iconDirection === 'right' && css`
      margin-left: 6px;
    `}

    svg {
      animation: ${$loading ? 'spinner 1.2s linear infinite' : '1.2s'};
    }
  `
);

const Styled = applyDisplayNames({
  Button,
  Label,
  Icon,
  Badge,
});

export default Styled;
