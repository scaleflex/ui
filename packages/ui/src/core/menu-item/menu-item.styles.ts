import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
// import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { MenuItemProps, MenuItemIconProps } from './menu-item.props';
import { sizeMenuItemMixin } from './menu-item.mixin';
import { Size } from './types';

const baseClassName = 'MenuItem';

const Icon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ info , theme: { palette } }: With<WithTheme, MenuItemIconProps>) => css`
    display: flex;
    flex-shrink: 0;
    margin-right: ${info ? 0 : 10}px;
    color: ${info ? palette[PColor.IconsSecondary] : palette[PColor.IconsPrimary]};
  `
);

const Actions = styled(Icon).attrs({
  className: generateClassNames(baseClassName, 'Actions'),
})(() => css`
  margin-right: 0px;
  margin-left: 16px;
`);

const Label = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})`
  display: flex;
  align-items: center;
  column-gap: 4px;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MenuItemWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'wrapper'),
})(
  ({
    divider = false,
    noOptionsText = false,
    disabled = false,
    theme,
  }: With<WithTheme, { divider?: boolean; noOptionsText?: boolean; disabled?: boolean }>) => css`
    ${divider &&
    css`
      width: 100%;
      height: 1px;
      background: ${theme.palette[PColor.BordersSecondary]};
      box-sizing: border-box;
    `}
    ${(noOptionsText || disabled) &&
    css`
      color: ${theme.palette[PColor.ButtonDisabledText]};
    `}
  `
);

const MenuItem = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({
    size = Size.Sm,
    active,
    theme,
    disableHover = false,
    noOptionsText,
    disabled,
  }: With<WithTheme, MenuItemProps>) => css`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background: ${theme.palette[active ? PColor.BackgroundActive : PColor.BackgroundSecondary]};
    color: ${theme.palette[PColor.TextPrimary]};
    cursor: pointer;
    box-sizing: border-box;
    transition: all 100ms ease-out;

    ${sizeMenuItemMixin[size]}

    &:focus-within,
    &:focus,
    &:hover {
      ${!disableHover && `background-color: ${theme.palette[PColor.BackgroundHover]}`};
      ${(noOptionsText || disabled) &&
      css`
        cursor: default;
        background-color: white;
      `}
    }
    ${(noOptionsText || disabled) &&
    css`
      & > svg {
        path {
          fill: ${theme.palette[PColor.ButtonDisabledText]};
        }
      }
      color: ${theme.palette[PColor.ButtonDisabledText]};
    `}
  `
);

const MenuPrefix = styled.div.attrs({
  className: generateClassNames(baseClassName, 'prefix'),
})(
  () => css`
    display: flex;
  `
);

const MenuContent = styled.div.attrs({
  className: generateClassNames(baseClassName, 'content'),
})(
  () => css`
    flex-grow: 1;
    line-height: 16px;
  `
);

const MenuSuffix = styled.div.attrs({
  className: generateClassNames(baseClassName, 'suffix'),
})(
  () => css`
    display: flex;
    margin-left: 8px;
  `
);

const Styled = applyDisplayNames({
  MenuItemWrapper,
  MenuItem,
  MenuPrefix,
  MenuContent,
  MenuSuffix,
  Label,
  Icon,
  Actions,
});

export default Styled;
