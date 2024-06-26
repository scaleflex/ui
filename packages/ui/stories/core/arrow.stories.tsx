import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Arrow from '../../src/core/arrow';
import { Position } from '../../src/utils/types';

const meta: Meta<typeof Arrow> = {
  title: 'DataDisplay/Arrow',
  component: Arrow,
  excludeStories: ['Arrow'],
};

export default meta;
type Story = StoryObj<typeof Arrow>;

const defaultArgs = {
  type: Position.Right,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <Arrow {...args} />,
};
