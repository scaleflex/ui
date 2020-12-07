import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { With } from '@sfx-ui/utils/types';
import type { WithTheme } from '@sfx-ui/theme/entity';
import { Color as PColor } from '@sfx-ui/utils/types/palette';
// import { BorderRadiusSize as BRSize } from '@sfx-ui/utils/types/shape';
import type { MenuItemProps } from './menu-item.props';
import { sizeMenuItemMixin } from './menu-item.mixin';
import { Size } from './types';

const baseClassName = 'MenuItem';

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    display: flex;

    &:first-child {
      margin-right: 8px;
    }

    &:last-child {
      margin-left: 8px;
    }

    svg {
      color: ${palette[PColor.IconsPrimary]};
    }
  `
);

const Label = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})`
  display: block;
  color: inherit;
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  outline: none;
`;

const MenuItem = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ size = Size.Md, active, theme }: With<WithTheme, MenuItemProps>) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    background: ${theme.palette[active ? PColor.BackgroundPrimaryHover : PColor.BackgroundSecondary]};
    cursor: pointer;
    min-width: 300px;
    box-sizing: border-box;

    ${sizeMenuItemMixin[size]({ theme, StyledLabel: Label })}

    &:focus-within,
    &:focus,
    &:hover {
      background-color: ${theme.palette[PColor.BackgroundPrimaryHover]};
    }
  `
);

const Styled = {
  MenuItem,
  Label,
  Icon,
};

export default Styled;
