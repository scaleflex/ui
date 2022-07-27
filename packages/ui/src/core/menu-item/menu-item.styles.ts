import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
// import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
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
    color: ${palette[PColor.IconsPrimary]};

    &:first-child {
      margin-right: 8px;
    }

    &:last-child {
      margin-left: 8px;
    }
  `
);

const Actions = styled(Icon).attrs({
  className: generateClassNames(baseClassName, 'Actions'),
})(() => css``);

const Label = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})`
  flex-grow: 1;
`;

const MenuItemWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'wrapper'),
})(
  ({
    divider,
    noOptionsText,
    getOptionDisabled,
    theme,
  }: With<WithTheme, { divider: boolean; noOptionsText: boolean; getOptionDisabled: boolean }>) => css`
    ${divider &&
    css`
      width: 100%;
      height: 1px;
      background: ${theme.palette[PColor.BordersSecondary]};
      box-sizing: border-box;
    `}
    ${(noOptionsText || getOptionDisabled) &&
    css`
      color: ${theme.palette[PColor.ButtonDisabledText]};
    `}
  `
);

const MenuItem = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({
    size = Size.Md,
    active,
    theme,
    disableHover = false,
    noOptionsText,
    getOptionDisabled,
  }: With<WithTheme, MenuItemProps>) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background: ${theme.palette[active ? PColor.BackgroundPrimaryHover : PColor.BackgroundSecondary]};
    cursor: pointer;
    box-sizing: border-box;

    ${sizeMenuItemMixin[size]}

    &:focus-within,
    &:focus,
    &:hover {
      ${!disableHover && `background-color: ${theme.palette[PColor.BackgroundPrimaryHover]}`};
      ${(noOptionsText || getOptionDisabled) &&
      css`
        cursor: default;
        background-color: white;
      `}
    }
  `
);

const MenuPrefix = styled.div.attrs({
  className: generateClassNames(baseClassName, 'prefix'),
})(
  () => css`
    display: flex;
    margin-right: 8px;
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
