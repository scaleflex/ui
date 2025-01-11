import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import CrossButton from '../../src/core/cross-button';
import { Size } from '../../src/core/cross-button/types';

const meta: Meta<typeof CrossButton> = {
  title: 'Inputs/IconButton/CrossButton',
  component: CrossButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Display a cross button.',
    },
    layout: 'centered',
  },
  argTypes: {
    size: {
      description: 'The size of the cross button. `sm` or `md` or `lg`.',
      options: Object.values(Size),
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CrossButton>;

const defaultArgs = {
  size: Size.Lg,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <CrossButton {...args} />,
};
