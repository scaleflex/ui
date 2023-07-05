import React from 'react';
import type { ReactNode, ReactElement } from 'react';
import { Tick } from '@scaleflex/icons/tick';

import type { MenuItemProps } from '../menu-item';
import { MenuItemActions, MenuItemLabel } from '../menu-item';
import type { RenderOption, RenderValue, SelectSizeType, SelectSimpleValueType } from './select.props';
import { InputSize } from '../../utils/types';
import Styled from './select.styles';

export const getIconSize = (size?: SelectSizeType): number => {
  switch (size) {
    case InputSize.Md:
      return 11;

    case InputSize.Sm:
    default:
      return 10;
  }
};

export const renderIcon = (_icon: ReactNode, size?: SelectSizeType): JSX.Element | undefined =>
  _icon ? (
    <Styled.Icon>{typeof _icon === 'function' ? _icon({ size: getIconSize(size) }) : _icon}</Styled.Icon>
  ) : undefined;

const generateChildren = (children: ReactNode, isActive = false, size: SelectSizeType): ReactNode => {
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
          {miActions}
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
  menuItem: JSX.Element,
  { value, multiple = false, size = InputSize.Md, onClose, onChange }: RenderOption
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
    children: generateChildren((menuItem as JSX.Element)?.props?.children, active, size),
    onClick: () => {
      if (!multiple && typeof onClose === 'function') {
        onClose();
      }

      if (typeof onChange === 'function' && !isDisabledMenuItem && menuItemValue) {
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

const renderOptionValue = (option: any) => {
  if (option && option.children) {
    let child = option.children;
    while (typeof child !== 'string') {
      Array.isArray(child) ? (child = getOptionValue(child[1])) : (child = getOptionValue(child));
    }
    return child;
  }
};

export const renderValue = ({ value, multiple = false, children }: RenderValue): SelectSimpleValueType => {
  const optionsProps: { value: SelectSimpleValueType }[] = [];

  React.Children.forEach(children, (child: ReactElement<MenuItemProps>): void => {
    if (React.isValidElement(child)) {
      const { displayName } = (child as JSX.Element)?.type;

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
    return activeOptions.map(renderOptionValue).join(', ');
  }

  return Array.isArray(value) ? value.join(', ') : value;
};
