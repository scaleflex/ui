import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CrossButton from '../../src/core/cross-button';
import { Size } from '../../src/core/cross-button/types';

const meta: Meta<typeof CrossButton> = {
  title: 'Inputs/CrossButton',
  component: CrossButton,
  excludeStories: ['CrossButton'],
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
