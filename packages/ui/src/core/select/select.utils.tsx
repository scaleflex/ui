import React from 'react';
import type { ReactNode, ReactElement } from 'react';
import TickIcon from '@scaleflex/icons/tick';
import type { MenuItemProps } from '../menu-item';
import { MenuItemActions, MenuItemLabel } from '../menu-item';
import type { RenderOption, RenderValue, SelectSizeType, SelectSimpleValueType } from './select.props';
import { Size } from './types';
import Styled from './select.styles';

export const getIconSize = (size?: SelectSizeType): number => {
  switch (size) {
    case Size.Md:
      return 13;

    case Size.Sm:
    default:
      return 11;
  }
};

export const renderIcon = (_icon: ReactNode, size?: SelectSizeType): JSX.Element | undefined =>
  _icon ? (
    <Styled.Icon>{typeof _icon === 'function' ? _icon({ size: getIconSize(size) }) : _icon}</Styled.Icon>
  ) : undefined;

const generateChildren = (children: ReactNode, isActive = false, size: SelectSizeType = Size.Md): ReactNode => {
  if (isActive && children) {
    const miActions = (
      <MenuItemActions>
        <TickIcon size={size === Size.Md ? 11 : 9} />
      </MenuItemActions>
    );

    if (React.Children.count(children) === 1) {
      let miChildren = children;

      if (React.isValidElement(children) && (children as JSX.Element)?.type?.displayName !== 'MenuItemLabel') {
        miChildren = <MenuItemLabel>{children}</MenuItemLabel>;
      }

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

  return children;
};

export const renderOption = (
  menuItem: JSX.Element,
  { value, multiple = false, size = Size.Md, onClose, onChange }: RenderOption
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

  return React.cloneElement(menuItem as ReactElement<MenuItemProps>, {
    active,
    size,
    children: generateChildren((menuItem as JSX.Element)?.props?.children, active, size),
    onClick: () => {
      if (!multiple && typeof onClose === 'function') {
        onClose();
      }

      if (typeof onChange === 'function') {
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

const getOptionChild = (option: any) => option.props.children;

const renderOptionValue = (option: any) => {
  if (option && option.children) {
    if (Array.isArray(option.children)) {
      return option.children?.filter((optionChild: any) => typeof optionChild === 'string')?.join(' ');
    }
    let child = option.children;
    while (typeof child !== 'string') {
      child = getOptionChild(child);
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
