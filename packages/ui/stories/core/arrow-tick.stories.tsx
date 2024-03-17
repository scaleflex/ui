import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ArrowTick from '../../src/core/arrow-tick';
import { Position } from '../../src/utils/types';

const meta: Meta<typeof ArrowTick> = {
  title: 'DataDisplay/ArrowTick',
  component: ArrowTick,
  excludeStories: ['ArrowTick'],
};

export default meta;
type Story = StoryObj<typeof ArrowTick>;

const defaultArgs = {
  type: Position.Right,
};

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <ArrowTick {...args} />,
};
