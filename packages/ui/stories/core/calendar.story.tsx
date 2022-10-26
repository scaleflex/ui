import React, { useEffect, useState } from 'react';
import type { Meta, Story } from '@storybook/react';

import { Popper } from '@scaleflex/ui/core';
import _Calendar, { CalendarProps } from '@scaleflex/ui/core/calender';
import { StoryGroup } from './types';
import { Input } from './input.story';

export const Calendar = _Calendar;

export default {
  title: `${StoryGroup.DataDisplay}/Calender`,
  component: Calendar,
  excludeStories: ['Calender'],
} as Meta;

const defaultArgs = {
  open: true,
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
      <Input value={value} readOnly size="sm" onClick={() => setOpenState(!openState)} />
      <Popper position="auto" open>
        <Calendar
          value={value}
          open={openState}
          setOpenState={setOpenState}
          onChange={(newValue: string): void => handleChange(newValue)}
          {...args}
        />
      </Popper>
    </>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
