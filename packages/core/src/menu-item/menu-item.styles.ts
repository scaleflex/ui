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

const Icon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    display: flex;
    flex-shrink: 0;

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

const Actions = styled(Icon).attrs({
  className: generateClassNames(baseClassName, 'Actions'),
})(
  () => css`
  `
);

const Label = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})`
  flex-grow: 1;
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
    /* min-width: 300px; */
    box-sizing: border-box;

    ${sizeMenuItemMixin[size]}

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
  Actions,
};

export default Styled;
