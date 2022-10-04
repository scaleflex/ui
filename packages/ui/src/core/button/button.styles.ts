import styled, { css } from 'styled-components';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { ButtonProps } from './button.props';
import {
  colorButtonMixin,
  sizeButtonMixin,
  sizeButtonLabelMixin,
  sizeSidebarMixin,
  sizeSidebarDividerMixin,
} from './button.mixin';
import { Color as PaletteColor } from '../../utils/types/palette';
import { ButtonSize, ButtonColor } from '../../utils/types';
import { ButtonTypes } from './types';

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

const Body = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Body'),
})(
  () => css`
    display: flex;
  `
);

const Button = styled.button.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ color = ButtonColor.Secondary, size = ButtonSize.Md, ButtonType, active, leftSlide, theme }: With<WithTheme, ButtonProps>) => css`
    display: inline-flex;
    flex-shrink: 0;
    flex-direction: ${leftSlide ? 'row-reverse' : 'row'};
    align-items: center;
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};
    border: 0;
    cursor: pointer;
    outline: none;

    ${ButtonType !== ButtonTypes.Sidebar && colorButtonMixin[color]}
    ${ButtonType === ButtonTypes.Sidebar ? sizeSidebarMixin[size] : sizeButtonMixin[size]}

    ${Label} {
      ${sizeButtonLabelMixin[size]}
    }

    ${Badge} {
      ${sizeButtonLabelMixin[size]}
    }

    ${ButtonType === ButtonTypes.Sidebar && css `
      background-color: ${theme.palette[PaletteColor.ButtonPrimaryText]};
      color: ${theme.palette[PaletteColor.LinkHover]};
      border: 1px solid ${theme.palette[PaletteColor.LinkHover]};

      ${!active && css `
        &:hover {
          color: ${theme.palette[PaletteColor.ButtonPrimaryText]};
          background-color: ${theme.palette[PaletteColor.AccentPrimaryHover]};
          border: none;
        }

        &:active {
          background-color: ${theme.palette[PaletteColor.AccentPrimaryActive]};
        }
      `}

      ${active && css`
        background-color: ${theme.palette[PaletteColor.BackgroundAccentBlue_0_05_Opacity]};
        color: ${theme.palette[PaletteColor.AccentPrimaryActive]};
        border: 1px solid ${theme.palette[PaletteColor.AccentPrimaryActive]};
      `}
    `}
  `
);

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ $loading }: ButtonProps) => css`
    display: flex;
    margin-right: 8px;
    margin-left: 1px;

    svg {
      animation: ${$loading ? 'spinner 1.2s linear infinite' : '1.2s'};
    }
  `
);

const Slidebar = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Slidebar'),
})(
  ({ leftSlide }: ButtonProps) => css`
    display: flex;
    ${leftSlide ? 'margin-right: 12px': 'margin-left: 12px'};
  `
);

const Divider = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Divider'),
})(
  ({ leftSlide, size = ButtonSize.Md }: ButtonProps) => css`
    border-left-style: solid;
    border-width: 1px;
    ${sizeSidebarDividerMixin[size]}
    ${leftSlide ? 'margin-right: 12px': 'margin-left: 12px'};
  `
);

const Styled = applyDisplayNames({
  Button,
  Body,
  Label,
  Icon,
  Slidebar,
  Divider,
  Badge,
});

export default Styled;
