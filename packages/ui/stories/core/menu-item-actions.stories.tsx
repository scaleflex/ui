import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Download } from '@scaleflex/icons';

import { MenuItemActions } from '../../src/core/menu-item';
import MenuItemActionsDocsTemplate from '../docs/menu-item-actions.mdx';
import { Size } from '../../src/core/menu-item/types';

const meta: Meta<typeof MenuItemActions> = {
  title: 'Navigation/Menu/MenuItemActions',
  component: MenuItemActions,
  parameters: {
    docs: {
      subtitle: 'Child of MenuItem component.',
      page: MenuItemActionsDocsTemplate,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The content of the component. React component or a function',
    },
    size: {
      description: 'Size of the icon inside the component, `sm` or `md`',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuItemActions>;

const defaultArgs = {
  size: Size.Sm,
  disabled: false,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: ({ ...args }) => <MenuItemActions size={args.size}>{({ size }) => <Download size={size} />}</MenuItemActions>,
};
