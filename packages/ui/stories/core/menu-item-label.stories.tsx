import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MenuItemLabel } from '../../src/core/menu-item';
import MenuItemDocsTemplate from '../docs/menu-item.mdx';

const meta: Meta<typeof MenuItemLabel> = {
  title: 'Navigation/Menu/MenuItemLabel',
  component: MenuItemLabel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Child of MenuItem component.',
      page: MenuItemDocsTemplate,
    },
  },
  argTypes: {
    children: {
      description: 'The content of the component.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuItemLabel>;

const defaultArgs = {
  children: 'France',
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: ({ children, ...args }) => <MenuItemLabel {...args}>{children}</MenuItemLabel>,
};
