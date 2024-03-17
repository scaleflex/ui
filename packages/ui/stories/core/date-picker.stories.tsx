import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DatePicker from '../../src/core/date-picker';
import { Position } from '../../src/core/popper/types';

const meta: Meta<typeof DatePicker> = {
  title: 'Inputs/DatePicker',
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
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

const defaultArgs = {
  label: 'Label',
  hint: 'Some hint goes here',
  readOnly: false,
  disabled: false,
  autoSelectToday: false,
  placeholder: 'mm/dd/yyyy',
  fullWidth: false,
  maxDate: '',
  minDate: '',
  position: Position.BottomStart,
};

const BasicTemplate = ({ ...args }): JSX.Element => {
  const [value, setValue] = useState('');

  return <DatePicker {...args} value={value} onChange={(newValue: string): void => setValue(newValue)} />;
};

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <BasicTemplate {...args} />,
};
