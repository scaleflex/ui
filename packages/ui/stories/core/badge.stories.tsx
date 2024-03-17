import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Badge from '../../src/core/badge';
import { BadgeColor } from '../../src/utils/types';

const meta: Meta<typeof Badge> = {
  title: 'DataDisplay/Badge',
  component: Badge,
  excludeStories: ['Badge'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

const defaultArgs = {
  color: BadgeColor.Secondary,
  badgeContent: '5',
  size: 20,
  fontSize: 12,
  padding: '0 6px',
};

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <Badge {...args} />,
};
