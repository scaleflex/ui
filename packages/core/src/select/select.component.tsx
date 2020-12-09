import React, { useState, cloneElement } from 'react';
import type { ReactElement } from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '@sfx-ui/utils/functions';
import TickIcon from '@sfx-ui/icons/tick';
import ArrowTick from '../arrow-tick';
import { MenuItemActions, MenuItemLabel } from '../menu-item';
import Menu from '../menu';
import type { AnchorElType } from '../menu/menu.props';
import type { SelectProps, SelectPropsSizeType, SelectPropsSimpleValueType } from './select.props';
import { Size } from './types';
import Styled from './select.styles';

const getIconSize = (sizeName: SelectPropsSizeType | undefined): number => {
  switch (sizeName) {
    case Size.Md:
      return 13;

    case Size.Sm:
    default:
      return 11;
  }
};

const Select = intrinsicComponent<SelectProps, HTMLDivElement>((
  {
    children, size, error, multiple, onChange, value
  },
  ref
// eslint-disable-next-line sonarjs/cognitive-complexity
): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<AnchorElType>(undefined);
  const open = Boolean(anchorEl);
  const handleClick = (event: any): void => setAnchorEl(event.currentTarget);
  const handleClose = (): void => setAnchorEl(undefined);

  const renderIcon = (_icon: React.ReactNode): JSX.Element | undefined => (
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

  const renderValue = (): SelectPropsSimpleValueType => {
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

    if (value) {
      const optionsProps: {value: SelectPropsSimpleValueType}[] = [];

      React.Children.forEach(children, (child: ReactElement<any, any>): void => {
        if (child && child.type) {
          const displayName = child.type.displayName || child.type.name;

          if (displayName === 'MenuItem' && Boolean(child.props)) {
            optionsProps.push(
              { ...(child.props || {}), children: child.props.children }
            );
          }
        }
      });

      const activeOptions = multiple
        ? optionsProps
          .filter((itemProps) => Array.isArray(value) && value.includes(itemProps.value))
        : [optionsProps.find((itemProps) => itemProps.value === value)];

      if (activeOptions.length > 0) {
        return activeOptions.map(renderOptionValue).join(', ');
      }
    }

    if (Array.isArray(value)) {
      return value.join(', ');
    }

    return value;
  };

  const renderOption = (menuItem: ReactElement): ReactElement => {
    const menuItemValue = menuItem.props?.value;
    const valueArr = multiple
      ? (Array.isArray(value) ? value : [])
      : [value];
    const isActive = valueArr.length > 0 && valueArr.includes(menuItemValue);
    const miChildren = menuItem.props.children;

    const generateChildren = () => {
      if (isActive && miChildren) {
        const miActions = (
          <MenuItemActions>
            <TickIcon size={size === Size.Md ? 11 : 9} />
          </MenuItemActions>
        );

        if (React.Children.count(miChildren) === 1) {
          return (
            <>
              {miChildren?.type?.displayName !== 'MenuItemLabel'
                ? <MenuItemLabel>{miChildren}</MenuItemLabel>
                : miChildren}

              {miActions}
            </>
          );
        }

        if (
          React.Children.count(miChildren) > 1
          && !miChildren.some((child: any) => child?.type?.displayName === 'MenuItemActions')
        ) {
          return (
            <>
              {miChildren}
              {miActions}
            </>
          );
        }
      }

      return miChildren;
    };

    return cloneElement(
      menuItem,
      {
        active: isActive,
        size,
        children: generateChildren(),
        onClick: () => {
          if (!multiple) {
            handleClose();
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
      }
    );
  };

  return (
    <Styled.Container>
      <Styled.Select
        ref={ref}
        size={size}
        error={error}
        onClick={handleClick}
      >
        <Styled.Label>
          {renderValue()}
        </Styled.Label>

        {renderIcon(<ArrowTick type={open ? 'top' : 'bottom'} />)}
      </Styled.Select>

      <Styled.Input />

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        fullWidth
      >
        {React.Children.map(children, renderOption)}
      </Menu>
    </Styled.Container>
  );
});

export const defaultProps = {
  size: Size.Md,
  error: false,
  multiple: false,
};

Select.defaultProps = defaultProps;

Select.propTypes = {
  size: PT.oneOf(objectValues(Size)),
  error: PT.bool,
  multiple: PT.bool,
  children: PT.arrayOf(PT.element).isRequired,
};

export default Select;
