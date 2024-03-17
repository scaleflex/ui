import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Dot from '../../src/core/dot';

const meta: Meta<typeof Dot> = {
  title: 'DataDisplay/Dot',
  component: Dot,
  excludeStories: ['Dot'],
} as Meta;

export default meta;
type Story = StoryObj<typeof Dot>;

const defaultArgs = {
  active: false,
};

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <Dot {...args} />,
};
