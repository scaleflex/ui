import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _TimePicker, { TimePickerProps } from '../../src/core/time-picker';
import { StoryGroup } from './types';

export const TimePicker = _TimePicker;

export default {
  title: `${StoryGroup.Inputs}/TimePicker`,
  component: TimePicker,
  excludeStories: ['TimePicker'],
} as Meta;

const defaultArgs = {
  label: 'Label',
  hint: 'Some hint goes here',
  readOnly: false,
  disabled: false,
  fullWidth: false,
  placeholder: '9:54 AM',
  position: 'bottom-start',
};

const BasicTemplate: Story<TimePickerProps> = ({ ...args }) => {
  const [value, setValue] = useState('2:5 PM');

  return <TimePicker {...args} value={value} onChange={(newValue: string): void => setValue(newValue)} />;
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
