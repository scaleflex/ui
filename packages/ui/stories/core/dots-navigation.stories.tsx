import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DotsNavigation from '../../src/core/dots-navigation';

const meta: Meta<typeof DotsNavigation> = {
  title: 'Navigation/DotsNavigation',
  component: DotsNavigation,
  excludeStories: ['DotsNavigation'],
  argTypes: {
    activeItem: {
      description: 'Set the active item (zero based index). Set to -1 to disable all the steps.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DotsNavigation>;

const defaultArgs = {
  size: 5,
  activeItem: 1,
};

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <DotsNavigation {...args} />,
};
