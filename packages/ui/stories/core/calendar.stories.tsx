import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import _Calendar from '../../src/core/calendar';

export const Calendar = _Calendar;

const meta: Meta<typeof Calendar> = {
  title: 'DataDisplay/Calendar',
  component: Calendar,
  excludeStories: ['Calendar'],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  render: () => <Calendar open />,
};
