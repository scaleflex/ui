import React from 'react';
import type { Meta, Story } from '@storybook/react';
import { StoryGroup } from './types';
import _TimePicker, { TimePickerProps } from '../../src/core/time-Picker';

export const TimePicker = _TimePicker;

export default {
  title: `${StoryGroup.Inputs}/TimePicker`,
  component: TimePicker,
  excludeStories: ['TimePicker'],
} as Meta;

const defaultArgs = {
  readOnly: false,
  position: 'bottom-start',
};

const BasicTemplate: Story<TimePickerProps> = ({ ...args }) => {
  return <TimePicker {...args} />;
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
