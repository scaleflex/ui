import React, { useEffect, useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Calendar, { CalendarProps } from '@scaleflex/ui/core/calender';
import { StoryGroup } from './types';

export const Calendar = _Calendar;

export default {
  title: `${StoryGroup.DataDisplay}/Calender`,
  component: Calendar,
  excludeStories: ['Calender'],
} as Meta;

const defaultArgs = {
  open: false,
  maxWidth: false,
};

const BasicTemplate: Story<CalendarProps> = ({ open, ...args }) => {
  const [openState, setOpenState] = useState(open || false);
  const [value, setValue] = useState('');

  const handleChange = (newValue: string): void => {
    setValue(newValue);
  };

  useEffect(() => {
    setOpenState(open || false);
  }, [open]);

  return (
    <>
      <Calendar
        value={value}
        open={openState}
        setOpenState={setOpenState}
        onChange={(newValue: string): void => handleChange(newValue)}
        {...args}
      />
    </>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
