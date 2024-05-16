import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Calendar from '../../src/core/calendar';

const meta: Meta<typeof Calendar> = {
  title: 'DataDisplay/Calendar',
  component: Calendar,
  excludeStories: ['Calendar'],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  render: (args) => <Calendar open {...args} />,
};
