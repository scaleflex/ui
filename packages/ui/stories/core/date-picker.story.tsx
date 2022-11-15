import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _DatePicker, { DatePickerProps } from '../../src/core/date-picker';
import { StoryGroup } from './types';

export const DatePicker = _DatePicker;

export default {
  title: `${StoryGroup.Inputs}/DatePicker`,
  component: DatePicker,
  excludeStories: ['DatePicker'],
} as Meta;

const defaultArgs = {
  label: 'Label',
  hint: 'Some hint goes here',
  readOnly: false,
  disabled: false,
  placeholder: 'placeholder',
};

const BasicTemplate: Story<DatePickerProps> = ({ ...args }) => {
  const [value, setValue] = useState('');

  return <DatePicker {...args} value={value} onChange={(newValue: string): void => setValue(newValue)} />;
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };