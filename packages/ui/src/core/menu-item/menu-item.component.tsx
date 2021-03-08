import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { MenuItemProps } from './menu-item.props';
import { Size } from './types';
import Styled from './menu-item.styles';

const MenuItem = intrinsicComponent<MenuItemProps, HTMLDivElement>(
  (props, ref): JSX.Element => <Styled.MenuItem {...props} ref={ref} />
);

MenuItem.displayName = 'MenuItem';

export const defaultProps = {
  size: Size.Md,
  active: false,
};

MenuItem.defaultProps = defaultProps;

export const propTypes = {
  size: PT.oneOf(objectValues(Size)),
  children: PT.oneOfType([PT.node, PT.func]),
  active: PT.bool,
  value: PT.oneOfType([PT.string, PT.number, PT.oneOf([null])]),
};

MenuItem.propTypes = propTypes;

export default MenuItem;
