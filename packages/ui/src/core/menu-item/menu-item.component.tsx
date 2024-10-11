import React, { useRef, useEffect } from 'react';
import Arrow from '@scaleflex/icons/arrow';

import { intrinsicComponent } from '../../utils/functions';
import type { MenuItemProps, MenuItemListType } from './menu-item.props';
import Menu from '../menu';
import Styled from './menu-item.styles';

const MenuItem = intrinsicComponent<MenuItemProps, HTMLDivElement>((props: MenuItemProps, ref): JSX.Element => {
  const {
    list,
    children,
    disableHover,
    disabled,
    enableScrollIntoView,
    isFocused = false,
    active,
    value,
    dividerStyle,
  } = props;
  const menuItemRef = useRef<HTMLDivElement | null>(null);

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const [selectedIds, setSelectedIds] = React.useState<Array<string>>([]);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleScroll = (): void => {
    menuItemRef.current?.scrollIntoView({ behavior: 'auto', block: 'nearest' });
  };

  useEffect(() => {
    if ((active || isFocused) && enableScrollIntoView) {
      handleScroll();
    }
  }, [active, isFocused]);

  const handleSelectedId = (ev: React.MouseEvent<HTMLDivElement>, selected: string, depthLevel: number): void => {
    const updatedArray = selectedIds.slice(0);
    updatedArray[depthLevel] = selected;
    setSelectedIds(updatedArray);
    handleOpenMenu(ev);
  };

  const handleCloseSubMenu = (depthLevel: number) => {
    const updatedArray = selectedIds.slice(0);
    updatedArray[depthLevel] = '';
    setSelectedIds(updatedArray);
    setAnchorEl(null);
  };

  const renderItems = (options: MenuItemListType[], depthLevel = 0): JSX.Element[] => {
    return options.map((option: MenuItemListType) => {
      const hasOptions = option.subList && option.subList.length > 0;
      let subMenu;

      if (selectedIds[depthLevel] === option.key && hasOptions) {
        const newDepthLevel = depthLevel + 1;

        subMenu = (
          <Menu
            key={option.key}
            position="right"
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            enableOverlay={false}
            {...option.subMenuProps}
          >
            <MenuItem list={option.subList} depth={newDepthLevel} {...props} />
          </Menu>
        );
      }
      if (option.content === 'divider') {
        return <Styled.MenuItemWrapper divider key={option.key} style={option.dividerStyle} />;
      }
      return (
        <Styled.MenuItemWrapper
          disabled={false}
          key={option.key}
          onMouseLeave={() => handleCloseSubMenu(depthLevel)}
          {...props}
        >
          <Styled.MenuItem
            {...props}
            className={option.className}
            ref={ref}
            $isFocused={isFocused}
            $active={Boolean(option.active)}
            onClick={(event: React.MouseEvent<HTMLDivElement>) => option.onClick?.({ event, ...props })}
            onMouseEnter={(ev: React.MouseEvent<HTMLDivElement>) => handleSelectedId(ev, option.key, depthLevel)}
            disableHover={disableHover || option.disableHover}
          >
            {option.prefix && (
              <Styled.MenuPrefix>
                {typeof option.prefix === 'function' ? option.prefix(props) : option.prefix}
              </Styled.MenuPrefix>
            )}
            {option.content && (
              <Styled.MenuContent>
                {typeof option.content === 'function' ? option.content(props) : option.content}
              </Styled.MenuContent>
            )}
            {(option.suffix || option.subList) && (
              <Styled.MenuSuffix>
                {typeof option.suffix === 'function' ? option.suffix(props) : option.suffix}
                {option.subList && <Arrow size={10} color="#768A9F" />}
              </Styled.MenuSuffix>
            )}
          </Styled.MenuItem>
          {subMenu}
        </Styled.MenuItemWrapper>
      );
    });
  };

  if (!list) {
    if (value === 'divider') {
      return <Styled.MenuItemWrapper divider key={value} style={dividerStyle} />;
    }

    return (
      <Styled.MenuItemWrapper disabled={Boolean(disabled)}>
        <Styled.MenuItem
          {...props}
          ref={menuItemRef}
          disableHover={disableHover}
          disabled={disabled}
          $isFocused={isFocused}
          $active={active}
        >
          {children}
        </Styled.MenuItem>
      </Styled.MenuItemWrapper>
    );
  }

  return <>{renderItems(list, 0)}</>;
});

MenuItem.displayName = 'MenuItem';

export default MenuItem;
