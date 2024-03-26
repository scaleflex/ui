import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';

import { InputSize } from '../../src/utils/types';
import _DatePicker, { DatePickerProps } from '../../src/core/date-picker';
import { StoryGroup } from './types';

export const DatePicker = _DatePicker;

export default {
  title: `${StoryGroup.Inputs}/DatePicker`,
  component: DatePicker,
  excludeStories: ['DatePicker'],
  argTypes: {
    maxDate: {
      description: 'yyyy-mm-dd',
    },
    minDate: {
      description: 'yyyy-mm-dd',
    },
  },
} as Meta;

const defaultArgs = {
  label: 'Label',
  size: InputSize.Md,
  hint: 'Some hint goes here',
  readOnly: false,
  disabled: false,
  autoSelectToday: false,
  placeholder: 'mm/dd/yyyy',
  fullWidth: false,
  maxDate: '',
  minDate: '',
  position: 'bottom-start',
};

const BasicTemplate: Story<DatePickerProps> = ({ ...args }) => {
  const [value, setValue] = useState('');

  return <DatePicker {...args} value={value} onChange={(newValue: string): void => setValue(newValue)} />;
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
