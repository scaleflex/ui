import React from 'react';
import type { ReactElement, ReactNode } from 'react';
import TickIcon from '@sfx-ui/icons/tick';
import { MenuItemActions, MenuItemLabel } from '../menu-item';
import type {
  RenderOption, RenderValue, SelectPropsSizeType, SelectPropsSimpleValueType
} from './select.props';
import { Size } from './types';
import Styled from './select.styles';

export const getIconSize = (size?: SelectPropsSizeType): number => {
  switch (size) {
    case Size.Md:
      return 13;

    case Size.Sm:
    default:
      return 11;
  }
};

export const renderIcon = (
  _icon: ReactNode, size?: SelectPropsSizeType
): JSX.Element | undefined => (
  _icon
    ? (
      <Styled.Icon>
        {
          typeof _icon === 'function'
            ? _icon({ size: getIconSize(size) })
            : _icon
        }
      </Styled.Icon>
    )
    : undefined
);

const generateChildren = (
  children?: ReactNode | ReactNode[],
  isActive = false,
  size: SelectPropsSizeType = Size.Md
): ReactNode | ReactNode[] | undefined => {
  if (isActive && children) {
    const miActions = (
      <MenuItemActions>
        <TickIcon size={size === Size.Md ? 11 : 9} />
      </MenuItemActions>
    );

    if (React.Children.count(children) === 1) {
      return (
        <>
          {children?.type?.displayName !== 'MenuItemLabel'
            ? <MenuItemLabel>{children}</MenuItemLabel>
            : children}

          {miActions}
        </>
      );
    }

    if (
      React.Children.count(children) > 1
      && !React.Children.toArray(children).some((child: any) => child?.type?.displayName === 'MenuItemActions')
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
  menuItem: ReactElement,
  {
    value, multiple = false, size = Size.Md, onClose, onChange,
  }: RenderOption
// eslint-disable-next-line sonarjs/cognitive-complexity
): ReactElement => {
  const menuItemValue = menuItem.props?.value;
  const valueArr = multiple
    ? (Array.isArray(value) ? value : [])
    : [value];
  const isActive = valueArr.length > 0 && valueArr.includes(menuItemValue);

  return React.cloneElement(
    menuItem,
    {
      active: isActive,
      size,
      children: generateChildren(menuItem.props.children, isActive, size),
      onClick: () => {
        if (!multiple && typeof onClose === 'function') { onClose(); }

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
    }
  );
};

const renderOptionValue = (option: any) => {
  if (option && option.children) {
    if (Array.isArray(option.children)) {
      return option.children
        ?.filter((optionChild: any) => typeof optionChild === 'string')
        ?.join(' ');
    }

    return option.children;
  }
};

export const renderValue = (
  {
    value, multiple = false, children,
  }: RenderValue
// eslint-disable-next-line sonarjs/cognitive-complexity
): SelectPropsSimpleValueType => {
  if (value) {
    const optionsProps: {value: SelectPropsSimpleValueType}[] = [];

    React.Children.forEach(children, (child: ReactElement<any, any>): void => {
      if (child && child.type) {
        const displayName = child.type.displayName || child.type.name;

        if (displayName === 'MenuItem' && Boolean(child.props)) {
          optionsProps.push({ ...(child.props || {}), children: child.props.children });
        }
      }
    });

    const activeOptions = multiple
      ? optionsProps.filter((itemProps) => Array.isArray(value) && value.includes(itemProps.value))
      : [optionsProps.find((itemProps) => itemProps.value === value)];

    if (activeOptions.length > 0) {
      return activeOptions.map(renderOptionValue).join(', ');
    }
  }

  return Array.isArray(value) ? value.join(', ') : value;
};
