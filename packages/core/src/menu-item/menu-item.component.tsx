import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '@sfx-ui/utils/functions';
import TickIcon from '@sfx-ui/icons/tick';
import type { MenuItemProps, MenuItemPropsSize } from './menu-item.props';
import { Size } from './types';
import Styled from './menu-item.styles';

const getIconSize = (sizeName: MenuItemPropsSize | undefined): number => {
  switch (sizeName) {
    case Size.Md:
      return 16;

    case Size.Sm:
    default:
      return 12;
  }
};

const MenuItem = intrinsicComponent<MenuItemProps, HTMLDivElement>((
  props,
  ref
): JSX.Element => {
  const {
    children, icon, size, active
  } = props;

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

  return (
    <Styled.MenuItem
      {...props}
      ref={ref}
    >
      {renderIcon(icon)}
      <Styled.Label>
        {children}
      </Styled.Label>
      {active && renderIcon(<TickIcon size={size === Size.Md ? 11 : 9} />)}
    </Styled.MenuItem>
  );
});

export const defaultProps = {
  size: Size.Md,
  active: false,
};

MenuItem.defaultProps = defaultProps;

export const propTypes = {
  size: PT.oneOf(objectValues(Size)),
  icon: PT.oneOfType([PT.node, PT.func]),
  active: PT.bool
};

MenuItem.propTypes = propTypes;

export default MenuItem;
