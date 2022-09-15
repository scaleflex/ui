import React, { useRef, useEffect } from 'react';
import PT from 'prop-types';
import ArrowTick from '@scaleflex/icons/arrow-tick';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { MenuItemProps, MenuItemListType } from './menu-item.props';
import Menu from '../menu';
import { Size } from './types';
import Styled from './menu-item.styles';

const MenuItem = intrinsicComponent<MenuItemProps, HTMLDivElement>(
  ({ list, depth = 0, children, disableHover, noOptionsText, disabled, groupBy, ...props }, ref): JSX.Element => {
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
      if (props.active) {
        handleScroll();
      }
    }, [props.active]);

    const handleSelectedId = (ev: React.MouseEvent<HTMLElement>, selected: string, depthLevel: number): void => {
      const updatedArray = selectedIds.slice(0);
      updatedArray[depthLevel] = selected;
      setSelectedIds(updatedArray);
      handleOpenMenu(ev);
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
              {/* {renderItems(option.subList, newDepthLevel)} */}
              <MenuItem list={option.subList} depth={newDepthLevel} {...props} />
            </Menu>
          );
        }
        if (option.content === 'divider') {
          return <Styled.MenuItemWrapper divider key={option.key} />;
        }
        return (
          <Styled.MenuItemWrapper disabled={false} key={option.key}>
            <Styled.MenuItem
              {...props}
              className={option.className}
              ref={ref}
              active={Boolean(option.active)}
              onClick={option.onClick ? (event) => option.onClick({ event, ...props }) : undefined}
              onMouseEnter={(ev) => handleSelectedId(ev, option.key, depthLevel)}
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
                  {option.subList && <ArrowTick size={8} color="#768184" />}
                </Styled.MenuSuffix>
              )}
            </Styled.MenuItem>
            {subMenu}
          </Styled.MenuItemWrapper>
        );
      });
    };

    if (!list) {
      return (
        <Styled.MenuItemWrapper noOptionsText={Boolean(noOptionsText)} disabled={Boolean(disabled)} groupBy={groupBy}>
          <Styled.MenuItem
            {...props}
            ref={menuItemRef}
            disableHover={disableHover}
            noOptionsText={noOptionsText}
            disabled={disabled}
            groupBy={groupBy}
          >
            {children}
          </Styled.MenuItem>
        </Styled.MenuItemWrapper>
      );
    }

    return <>{renderItems(list, depth)}</>;
  }
);

MenuItem.displayName = 'MenuItem';

export const defaultProps = {
  size: Size.Md,
  active: false,
};

MenuItem.defaultProps = defaultProps;

MenuItem.propTypes = {
  size: PT.oneOf(objectValues(Size)),
  children: PT.oneOfType([PT.node, PT.func]),
  active: PT.bool,
  value: PT.oneOfType([PT.string, PT.number, PT.oneOf([null])]),
  depth: PT.number,
  disableHover: PT.bool,
  noOptionsText: PT.bool,
  disabled: PT.bool,
};

export default MenuItem;
// list: PT.arrayOf(
//   PT.shape({
//     key: PT.string.isRequired,
//     content: PT.oneOfType([PT.string, PT.node]).isRequired,
//     prefix: PT.oneOfType([PT.string, PT.node]),
//     subList: PT.arrayOf(PT.object),
//     suffix: PT.oneOfType([PT.string, PT.node]),
//     onClick: PT.func,
//     disabled: PT.bool,
//   })
// ),
