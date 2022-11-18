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
import { ButtonType, SideBar } from './types';

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

const Wrapper = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Body'),
})(
  () => css`
    display: flex;
    align-items: center;
  `
);

const Button = styled.button.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({
    color = ButtonColor.Secondary,
    size = ButtonSize.Md,
    buttonType,
    active,
    theme,
  }: With<WithTheme, ButtonProps>) => css`
    display: inline-flex;
    flex-shrink: 0;
    flex-direction: row;
    align-items: center;
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};
    border: 0;
    cursor: pointer;
    outline: none;

    ${buttonType !== ButtonType.Sidebar && colorButtonMixin[color]}
    ${buttonType === ButtonType.Sidebar ? sizeSidebarMixin[size] : sizeButtonMixin[size]}

    ${Label} {
      ${sizeButtonLabelMixin[size]}
      ${(color === ButtonColor.LinkBasicPrimary || color === ButtonColor.LinkBasicSecondary) && `font-weight: 400`}
    }

    ${Badge} {
      ${sizeButtonLabelMixin[size]}
    }

    ${buttonType === ButtonType.Sidebar &&
    css`
      background-color: ${theme.palette[PaletteColor.ButtonPrimaryText]};
      color: ${theme.palette[PaletteColor.LinkPrimary]};
      border: 1px solid ${theme.palette[PaletteColor.BordersButton]};

      ${!active &&
      css`
        &:hover {
          color: ${theme.palette[PaletteColor.ButtonPrimaryText]};
          background-color: ${theme.palette[PaletteColor.AccentPrimaryHover]};
          border: none;
        }

        &:active {
          color: ${theme.palette[PaletteColor.ButtonPrimaryText]};
          background-color: ${theme.palette[PaletteColor.AccentPrimaryActive]};
          border: none;
        }
      `}

      ${active &&
      css`
        background-color: ${theme.palette[PaletteColor.BackgroundAccentBlue_0_05_Opacity]};
        color: ${theme.palette[PaletteColor.AccentPrimaryActive]};
        border: 1px solid ${theme.palette[PaletteColor.AccentPrimaryActive]};
      `}

      &:disabled {
        color: ${theme.palette[PaletteColor.BordersDisabled]};
        background: ${theme.palette[PaletteColor.AccentPrimaryDisabled]};
        border: none;
        cursor: default;
      }
    `}
  `
);

const StartIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'StartIcon'),
})(
  ({ $loading }: ButtonProps) => css`
    display: flex;
    margin-right: 6px;

    svg {
      animation: ${$loading ? 'spinner 1.2s linear infinite' : '1.2s'};
    }
  `
);

const SideArrows = styled.span.attrs({
  className: generateClassNames(baseClassName, 'SideBar'),
})(
  ({ sideBarType }: ButtonProps) => css`
    display: flex;
    ${`margin-${sideBarType === SideBar.Left ? 'right' : 'left'}`}: 12px;
  `
);

const Divider = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Divider'),
})(
  ({ sideBarType, size = ButtonSize.Md }: ButtonProps) => css`
    border-left-style: solid;
    border-width: 1px;
    ${sizeSidebarDividerMixin[size]}
    ${`margin-${sideBarType === SideBar.Left ? 'right' : 'left'}`}: 12px;
  `
);
const EndIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'EndIcon'),
})`
  display: flex;
  margin-left: 6px;
`;

const Styled = applyDisplayNames({
  Button,
  Wrapper,
  Label,
  SideArrows,
  Divider,
  StartIcon,
  EndIcon,
  Badge,
});

export default Styled;
