import React from 'react';
import type { ReactNode, ReactElement } from 'react';
import { Tick } from '@scaleflex/icons';

import type { MenuItemProps } from '../menu-item';
import { MenuItemActions, MenuItemLabel } from '../menu-item';
import type { RenderOption, RenderValue, SelectSizeType, SelectSimpleValueType } from './select.props';
import { InputSize } from '../../utils/types';
import Styled from './select.styles';

export const getIconSize = (size?: SelectSizeType): number => {
  switch (size) {
    case InputSize.Md:
      return 16;

    case InputSize.Sm:
    default:
      return 14;
  }
};

const generateChildren = (
  children: ReactNode,
  isActive = false,
  size: SelectSizeType,
  hideMenuItemsActions: boolean
): ReactNode => {
  const miChildren = <MenuItemLabel>{children}</MenuItemLabel>;

  if (isActive && children) {
    const miActions = (
      <MenuItemActions>
        <Styled.TickIcon>
          <Tick size={getIconSize(size)} />
        </Styled.TickIcon>
      </MenuItemActions>
    );

    if (React.Children.count(children) === 1) {
      return (
        <>
          {miChildren}
          {!hideMenuItemsActions && miActions}
        </>
      );
    }

    if (
      React.Children.count(children) > 1 &&
      !React.Children.toArray(children).some((child: any) => child?.type?.displayName === 'MenuItemActions')
    ) {
      return (
        <>
          {children}
          {miActions}
        </>
      );
    }
  }

  return miChildren;
};

export const renderOption = (
  menuItem: any,
  { value, multiple = false, size = InputSize.Md, hideMenuItemsActions = false, onClose, onChange }: RenderOption
): JSX.Element => {
  if (!React.isValidElement(menuItem)) {
    return menuItem;
  }

  if ((menuItem as JSX.Element).type?.displayName !== 'MenuItem') {
    return React.cloneElement(menuItem);
  }

  const menuItemValue = (menuItem as JSX.Element)?.props?.value;
  const valueArr = multiple ? (Array.isArray(value) ? value : []) : [value];
  const active = valueArr.length > 0 && valueArr.includes(menuItemValue);
  const isDisabledMenuItem = (menuItem as JSX.Element)?.props?.disabled;

  return React.cloneElement(menuItem as ReactElement<MenuItemProps>, {
    active,
    size,
    children: generateChildren((menuItem as JSX.Element)?.props?.children, active, size, hideMenuItemsActions),
    onClick: () => {
      if (!multiple && typeof onClose === 'function') {
        onClose();
      }

      if (typeof onChange === 'function' && !isDisabledMenuItem && !!menuItemValue?.toString()?.length) {
        let newValue = menuItemValue;

        if (multiple) {
          newValue = [...(Array.isArray(value) ? value : [])];

          const index = newValue.indexOf(menuItemValue);

          if (index > -1) {
            newValue.splice(index, 1);
          } else {
            newValue.push(menuItemValue);
          }
        }

        onChange(newValue);
      }
    },
  });
};

const getOptionValue = (option: any): string => {
  const children = option.props ? option.props.children : option;
  if (Array.isArray(children)) return children.map((child: any) => getOptionValue(child)).join(' ');
  if (typeof children === 'object') return getOptionValue(children.props.children);
  return children;
};

const renderOptionValue = (option: any, showSelectionKey: boolean): any => {
  if (option && option.children) {
    let child = showSelectionKey ? option.value : option.children;
    while (typeof child !== 'string') {
      if (Array.isArray(child)) {
        child = getOptionValue(child[1]);
      } else {
        child = getOptionValue(child);
      }
    }
    return child;
  }
};

export const renderValue = ({
  value,
  multiple = false,
  children,
  showSelectionKey = false,
}: RenderValue): SelectSimpleValueType => {
  const optionsProps: { value: SelectSimpleValueType }[] = [];

  React.Children.forEach(children, (child: ReactElement<MenuItemProps>): void => {
    if (React.isValidElement(child)) {
      const { displayName } = (child as JSX.Element)?.type || {};

      if (displayName === 'MenuItem' && Boolean(child.props)) {
        optionsProps.push({
          ...(child as JSX.Element).props,
        });
      }
    }
  });

  const activeOptions = multiple
    ? optionsProps.filter((itemProps) => Array.isArray(value) && value.includes(itemProps.value))
    : [optionsProps.find((itemProps) => itemProps.value === value)];

  if (activeOptions.length > 0) {
    return activeOptions.map((option) => renderOptionValue(option, showSelectionKey)).join(', ');
  }

  return Array.isArray(value) ? value.join(', ') : value;
};
