import styled, { css } from 'styled-components';

import { generateClassNames, applyDisplayNames, scrollBar } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { Shadows as PShadows } from '../../utils/types/shadows';
import { FontVariant as FV } from '../../utils/types/typography/font-variant';
import Accordion from '../accordion/accordion.component';
import AccordionHeaderStyled from '../accordion-header/accordion-header.styles';
import AccordionDetailsStyled from '../accordion-details/accordion-details.styles';
import { DrawerProps, FontType } from './drawer.props';

const baseClassName = 'Drawer';

const TemporaryDrawer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'temporary'),
})(
  ({ open }: DrawerProps) => css`
    position: absolute;
    inset: 0px;
    z-index: 1200;
    visibility: ${!open && 'hidden'};
  `
);

const PersistentDrawer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'persistent'),
})``;

const Drawer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({
    open,
    isCollapsed,
    top = 0,
    theme: { palette, shadows, breakpoints },
  }: With<
    WithTheme,
    {
      open?: boolean;
      isCollapsed?: boolean;
      top?: number;
    }
  >) => css`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    background-color: ${palette[PColor.BackgroundStateless]};
    box-shadow: ${shadows[PShadows.LeftPanelMd]};
    overflow-y: overlay;
    overflow-x: hidden;
    transform: ${open ? 'none' : 'translateX(-100%)'};
    visibility: ${!open && 'hidden'};
    transition: 200ms;
    height: calc(100% - ${top}px);
    ${breakpoints.down('md')} {
      margin-top: 0px;
      height: 100%;
    }
    ${breakpoints.classes.sm} & {
      margin-top: 0px;
      height: 100%;
    }
    box-sizing: border-box;
    width: ${isCollapsed ? '68px' : '302px'};
    ${scrollBar}
  `
);

const Header = styled.div.attrs({
  className: generateClassNames(baseClassName, 'header'),
})(
  ({ isCollapsed }: { isCollapsed: boolean }) => css`
    display: ${isCollapsed ? 'none' : 'flex'};
    justify-content: flex-start;
    align-items: center;
    position: relative;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    text-align: left;
    margin-top: 12px;
    transition: background-color 100ms ease-out;
  `
);

const Body = styled.div.attrs({
  className: generateClassNames(baseClassName, 'body'),
})`
  flex: 1 1 auto;

  .SfxAccordionDetails-root {
    margin: 0;
  }
`;

const Footer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'footer'),
})(
  ({ isCollapsed }: { isCollapsed: boolean }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${isCollapsed ? '0px' : '0px 8px'};
  `
);

const List = styled.ul.attrs({
  className: generateClassNames(baseClassName, 'list'),
})(
  () => css`
    list-style: none;
    margin: 12px 0;
    padding: 0;
    position: relative;
  `
);

const Item = styled.li.attrs({
  className: generateClassNames(baseClassName, 'item'),
})(
  ({
    theme: { palette },
    isCollapsed,
    selected,
  }: With<WithTheme, { isCollapsed?: boolean; selected?: boolean }>) => css`
    display: ${isCollapsed ? 'none' : 'flex'};
    justify-content: flex-start;
    align-items: center;
    position: relative;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    text-align: left;
    padding: 13px 16px;
    transition: background-color 100ms ease-out;
    margin-bottom: 4px;
    cursor: pointer;
    &:hover {
      background-color: ${palette[PColor.BackgroundActive]};
      & > * {
        color: ${palette[PColor.AccentStateless]};
      }
    }

    ${selected &&
    css`
      background-color: ${palette[PColor.BackgroundActive]};
      & > * {
        color: ${palette[PColor.AccentStateless]} !important;
      }
    `}
  `
);

const ItemText = styled.div.attrs({
  className: generateClassNames(baseClassName, 'text'),
})(
  ({
    theme: {
      palette,
      typography: { font },
    },
    font: fontKey,
    isCollapsed,
  }: With<WithTheme, { isCollapsed?: boolean; font?: FontType }>) => css`
    flex: 1 1 auto;
    color: ${palette[PColor.TextPrimary]};
    ${font[fontKey || FV.LabelLarge]};
    transition: color 100ms ease-out;
    display: ${isCollapsed && 'none'};
    user-select: none;
  `
);

const Icon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'icon'),
})(
  ({ theme: { palette }, isCollapsed }: With<WithTheme, { isCollapsed?: boolean }>) => css`
    display: flex;
    flex-shrink: 0;
    color: ${palette[PColor.IconsPrimary]};
    margin-right: ${isCollapsed ? '0px' : '12px'};
    transition: color 100ms ease-out;
  `
);

const ItemButton = styled.div.attrs({
  className: generateClassNames(baseClassName, 'item-button'),
})(
  ({
    theme: { palette },
    isCollapsed,
    selected,
  }: With<WithTheme, { isCollapsed?: boolean; selected?: boolean }>) => css`
    display: flex;
    justify-content: ${isCollapsed ? 'center' : 'flex-start'};
    align-items: center;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: left;
    padding: ${isCollapsed ? '12px 0px' : '13px 16px'};
    width: ${isCollapsed && '56px'};
    margin-bottom: 8px;
    margin: ${isCollapsed && '8px auto'};
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    cursor: pointer;
    &:hover {
      background-color: ${palette[PColor.BackgroundActive]};
      & > * {
        color: ${palette[PColor.AccentStateless]};
      }
    }

    ${selected &&
    css`
      background-color: ${palette[PColor.BackgroundActive]};
      & > * {
        color: ${palette[PColor.AccentStateless]};
      }
    `}
  `
);

const CollapsedButton = styled(ItemButton).attrs({
  className: generateClassNames(baseClassName, 'item-button'),
})(
  ({ isCollapsed }: { isCollapsed?: boolean }) => css`
    ${!isCollapsed &&
    css`
      padding: 13px 24px;
    `}
  `
);

const DrawerAccordion = styled(Accordion).attrs({
  className: generateClassNames(baseClassName, 'accordion'),
})(
  ({
    theme: {
      palette,
      typography: { font },
    },
    selected,
  }: With<WithTheme, { selected?: boolean }>) => css`
    ${AccordionHeaderStyled.Header} {
      padding: 13px 16px;
      transition: background-color 100ms ease-out;
      ${AccordionHeaderStyled.Label} {
        ${font[FV.LabelLargeEmphasis]};
        color: ${palette[PColor.TextPrimary]};
      }
      &:hover {
        background-color: ${palette[PColor.BackgroundActive]};
        & > * {
          color: ${palette[PColor.AccentStateless]};
        }
      }
      ${selected &&
      css`
        ${AccordionHeaderStyled.Label} {
          color: ${palette[PColor.AccentStateless]};
        }
      `}
    }
    ${AccordionDetailsStyled.AccordionDetails} {
      padding: 0px 16px;
    }
  `
);

const Styled = applyDisplayNames({
  TemporaryDrawer,
  PersistentDrawer,
  Drawer,
  Header,
  Body,
  Footer,
  List,
  Item,
  ItemButton,
  Icon,
  ItemText,
  DrawerAccordion,
  CollapsedButton,
});

export default Styled;
