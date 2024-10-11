import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@scaleflex/icons';

import { MenuItemIcon } from '../../src/core/menu-item';
import MenuItemIconDocsTemplate from '../docs/menu-item-icon.mdx';
import { Size } from '../../src/core/menu-item/types';

const meta: Meta<typeof MenuItemIcon> = {
  title: 'Navigation/Menu/MenuItemIcon',
  component: MenuItemIcon,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The content of the component. React component or a function',
    },
    size: {
      description: 'Size of the icon inside the component, `sm` or `md`',
    },
    disabled: {
      description: 'If true, the component is disabled.',
    },
  },
  parameters: {
    docs: {
      subtitle: 'Child of MenuItem component.',
      page: MenuItemIconDocsTemplate,
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuItemIcon>;

const defaultArgs = {
  size: Size.Sm,
  disabled: false,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: ({ ...args }) => <MenuItemIcon size={args.size}>{({ size }) => <Country size={size} />}</MenuItemIcon>,
};
