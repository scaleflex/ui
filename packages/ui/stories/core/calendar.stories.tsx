import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Calendar from '../../src/core/calendar';
import CalendarDocsTemplate from '../docs/calendar.mdx';

const meta: Meta<typeof Calendar> = {
  title: 'DataDisplay/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: CalendarDocsTemplate,
      subtitle: 'Calendar is a component that allows users to select a date.',
    },
  },
  argTypes: {
    value: {
      description: 'value of the chosen date',
    },
    maxDate: {
      description: 'maximum date that can be chosen',
    },
    minDate: {
      description: 'minimum date that can be chosen',
    },
    onCancel: {
      description: 'Callback fired when the cancel button is clicked',
    },
    onDateClick: {
      description: 'Callback fired when a date is clicked',
    },
    onChange: {
      description: 'Callback fired when the date is changed',
    },
    calendarStyles: {
      description: 'Styles for the calendar',
    },
    // enableAutoSelect: { description: 'if true today date will be selected automatically' },
    autoSelectToday: {
      description: 'if true today date will be selected automatically',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  render: (args) => <Calendar {...args} />,
};
