import React from 'react';
import type { Meta, Story } from '@storybook/react';
import {
  Country,
  Download,
} from '@scaleflex/icons'
import _MenuItem, { MenuItemProps, MenuItemIcon, MenuItemLabel, MenuItemActions } from '../../src/core/menu-item';
import { Size } from '../../src/core/menu-item/types';
import { StoryGroup } from './types';

export const MenuItem = _MenuItem;

export default {
  title: `${StoryGroup.DataDisplay}/MenuItem`,
  component: MenuItem,
  excludeStories: ['MenuItem'],
} as Meta;

const defaultArgs = {
  size: Size.Sm,
  children: 'France',
  active: false,
};

const BasicTemplate: Story<MenuItemProps> = ({ ...args }) => <MenuItem {...args} />;

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

// Active
export const Active = BasicTemplate.bind({});
Active.args = {
  ...defaultArgs,
  active: true,
};

const WithIconTemplate: Story<MenuItemProps> = ({ children, ...args }) => (
  <MenuItem {...args}>
    <MenuItemIcon>
      <Country size={args.size === 'md' ? 16 : 14} />
    </MenuItemIcon>

    <MenuItemLabel>{children}</MenuItemLabel>
  </MenuItem>
);

// WithIcon
export const WithIcon = WithIconTemplate.bind({});
WithIcon.args = { ...defaultArgs };

const WithIconAndActionsTemplate: Story<MenuItemProps> = ({ children, ...args }) => (
  <MenuItem {...args}>
    <MenuItemIcon>
      <Country size={args.size === 'md' ? 16 : 14} />
    </MenuItemIcon>

    <MenuItemLabel>{children}</MenuItemLabel>

    <MenuItemActions>
      <Download size={args.size === 'md' ? 15 : 12} />
    </MenuItemActions>
  </MenuItem>
);

// WithIconAndActions
export const WithIconAndActions = WithIconAndActionsTemplate.bind({});
WithIconAndActions.args = { ...defaultArgs };
