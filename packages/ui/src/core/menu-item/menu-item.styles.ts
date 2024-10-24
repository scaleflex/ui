import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import type { MenuItemProps } from './menu-item.props';
import { sizeMenuItemMixin } from './menu-item.mixin';
import { Size } from './types';

const baseClassName = 'MenuItem';

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})<With<WithTheme, MenuItemProps>>(
  ({ theme: { palette }, disabled }) => css`
    flex-shrink: 0;
    margin-right: 10px;
    color: ${disabled ? palette[PColor.TextPlaceholder] : palette[PColor.IconsPrimary]};
  `
);

const Actions = styled(Icon).attrs({
  className: generateClassNames(baseClassName, 'Actions'),
})(
  () => css`
    margin-right: 0px;
    margin-left: 16px;
  `
);

const Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})`
  align-items: center;
  column-gap: 4px;
  flex-grow: 1;
`;

const MenuItemWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'wrapper'),
})<With<WithTheme, { divider?: boolean; disabled?: boolean }>>(
  ({ divider = false, disabled = false, theme }) => css`
    ${divider &&
    css`
      width: 100%;
      height: 1px;
      background: ${theme.palette[PColor.BordersSecondary]};
      box-sizing: border-box;
      margin: 4px 0;
    `}

    ${disabled &&
    css`
      color: ${theme.palette[PColor.ButtonDisabledText]};
    `}
  `
);

const MenuItem = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<With<With<WithTheme, MenuItemProps>, { $active?: boolean; $isFocused: boolean }>>(
  ({ size = Size.Sm, $active, theme, disableHover = false, disabled, $isFocused }) => css`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background: ${theme.palette[$active ? PColor.BackgroundActive : PColor.BackgroundSecondary]};
    color: ${theme.palette[PColor.TextPrimary]};
    cursor: pointer;
    box-sizing: border-box;
    transition: all 100ms ease-out;

    ${sizeMenuItemMixin[size]}

    &:focus-within,
    &:focus,
    &:hover {
      ${!disableHover &&
      css`
        background-color: ${theme.palette[PColor.BackgroundHover]};
      `};
      ${disabled &&
      css`
        cursor: default;
        background-color: white;
      `}
    }

    ${disabled &&
    css`
      & > svg {
        path {
          fill: ${theme.palette[PColor.ButtonDisabledText]};
        }
      }
      color: ${theme.palette[PColor.ButtonDisabledText]};
    `}

    ${$isFocused &&
    !disableHover &&
    css`
      background-color: ${theme.palette[PColor.BackgroundHover]};
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
