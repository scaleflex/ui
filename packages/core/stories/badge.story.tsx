import React from 'react';
import type { Meta, Story } from '@storybook/react';
// import BadgeIcon from '@sfx-ui/icons/badge';
import _Badge, { BadgeProps } from '../src/badge';
import { Color } from '../src/badge/types';

export const Badge = _Badge;

export default {
  title: 'Inputs/Badge',
  component: Badge,
  excludeStories: ['Badge'],
} as Meta;

const defaultArgs = {
  color: Color.Secondary,
  badgeContent: '5',
  size: 20,
  fontSize: 12,
  padding: '0 6px',
};

const BasicTemplate: Story<BadgeProps> = (args) => (
  <Badge {...args} />
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
