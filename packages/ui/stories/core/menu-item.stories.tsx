import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Country, Download } from '@scaleflex/icons';

import MenuItem, { MenuItemIcon, MenuItemLabel, MenuItemActions } from '../../src/core/menu-item';
import { Size } from '../../src/core/menu-item/types';
import MenuItemDocsTemplate from '../docs/menu-item.mdx';

const meta: Meta<typeof MenuItem> = {
  title: 'Navigation/Menu/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The content of the component.',
    },
    active: {
      description: 'If true, the component is active.',
    },
    size: {
      description: 'MenuItem Sizes, `sm` or `md`.',
    },
    disabled: {
      description: 'If true, the component is disabled.',
    },
    value: {
      description: 'Value of the component, if equals `divider` the component will act as divider',
    },
    list: {
      description: 'If you want to use `Menu` as sub list',
    },
    disableHover: {
      description: 'If true, the hover is disabled',
    },
    isFocused: {
      description: 'If true, the component is focused',
    },
    enableScrollIntoView: {
      description: 'If true, The component will be scrolled into view',
    },
    dividerStyle: {
      description: 'Update divider styles',
    },
  },
  parameters: {
    docs: {
      subtitle: 'Child of Menu component.',
      page: MenuItemDocsTemplate,
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

const defaultArgs = {
  size: Size.Sm,
  children: 'France',
  active: false,
  disabled: false,
  dividerStyle: {},
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: ({ children, ...args }) => (
    <MenuItem {...args}>
      <MenuItemIcon size={args.size}>{({ size }) => <Country size={size} />}</MenuItemIcon>
      <MenuItemLabel>{children}</MenuItemLabel>
      <MenuItemActions size={args.size}>{({ size }) => <Download size={size} />}</MenuItemActions>
    </MenuItem>
  ),
};
