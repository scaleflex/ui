import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Loader from '../../src/core/loader';

const meta: Meta<typeof Loader> = {
  title: 'Feedback/Loader',
  component: Loader,
  excludeStories: ['Loader'],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
  render: (args) => <Loader {...args} />,
};
