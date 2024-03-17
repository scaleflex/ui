import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Country, Download } from '@scaleflex/icons';
import MenuItem, { MenuItemIcon, MenuItemLabel, MenuItemActions, MenuItemProps } from '../../src/core/menu-item';
import { Size } from '../../src/core/menu-item/types';

const meta: Meta<typeof MenuItem> = {
  title: 'DataDisplay/MenuItem',
  component: MenuItem,
  excludeStories: ['MenuItem'],
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

const defaultArgs = {
  size: Size.Sm,
  children: 'France',
  active: false,
  disabled: false,
};

const BasicTemplate = (args: MenuItemProps): JSX.Element => <MenuItem {...args} />;

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <BasicTemplate {...args} />,
};

export const Active: Story = {
  args: {
    ...defaultArgs,
    active: true,
  },
  render: (args) => <BasicTemplate {...args} />,
};

export const WithIcon: Story = {
  args: defaultArgs,
  render: ({ children, ...args }) => (
    <MenuItem {...args}>
      <MenuItemIcon {...args}>
        <Country size={args.size === 'md' ? 16 : 14} />
      </MenuItemIcon>

      <MenuItemLabel>{children}</MenuItemLabel>
    </MenuItem>
  ),
};

export const WithIconAndActions: Story = {
  args: defaultArgs,
  render: ({ children, ...args }) => (
    <MenuItem {...args}>
      <MenuItemIcon>
        <Country size={args.size === 'md' ? 16 : 14} />
      </MenuItemIcon>

      <MenuItemLabel>{children}</MenuItemLabel>

      <MenuItemActions>
        <Download size={args.size === 'md' ? 15 : 12} />
      </MenuItemActions>
    </MenuItem>
  ),
};
