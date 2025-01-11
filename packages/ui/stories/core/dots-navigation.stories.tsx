import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import DotsNavigation from '../../src/core/dots-navigation';
import DotsNavigationDocsTemplate from '../docs/dots-navigation.mdx';

const meta: Meta<typeof DotsNavigation> = {
  title: 'Navigation/DotsNavigation',
  component: DotsNavigation,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DotsNavigationDocsTemplate,
      subtitle: 'The DotsNavigation component displays a list of dots that represent the steps of a process.',
    },
  },
  argTypes: {
    activeItem: {
      description: 'Set the active item (zero based index). Set to -1 to disable all the steps.',
    },
    size: { description: 'The count of how many dots to display ' },
  },
};

export default meta;
type Story = StoryObj<typeof DotsNavigation>;

const defaultArgs = {
  size: 5,
  activeItem: 1,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <DotsNavigation {...args} />,
};
