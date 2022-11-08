import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _Calendar, { CalendarProps } from '../../src/core/calendar';
import { StoryGroup } from './types';

export const Calendar = _Calendar;

export default {
  title: `${StoryGroup.DataDisplay}/Calender`,
  component: Calendar,
  excludeStories: ['Calender'],
} as Meta;

const defaultArgs = {};

const BasicTemplate: Story<CalendarProps> = () => {
  return <Calendar open />;
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
