import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Dot from '../../src/core/dot';

const meta: Meta<typeof Dot> = {
  title: 'Navigation/DotsNavigation/Dot',
  component: Dot,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'The Dot component is used to display a dot.',
    },
  },
  argTypes: {
    active: { description: 'If true the dot will be active' },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof Dot>;

const defaultArgs = {
  active: false,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <Dot {...args} />,
};
