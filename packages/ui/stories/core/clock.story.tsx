import React, {useState} from 'react';
import type { Meta, Story } from '@storybook/react';
import _Clock, { ClockProps } from '../../src/core/clock ';
import { StoryGroup } from './types';

export const Clock = _Clock;

export default {
  title: `${StoryGroup.DataDisplay}/Clock`,
  component: Clock,
  excludeStories: ['Clock'],
} as Meta;

const defaultArgs = {};

const BasicTemplate: Story<ClockProps> = ({ ...args }) => {
  const [value, setValue] = useState('2:5 PM');
  return <Clock open {...args} value={value} onChange={(newValue: string): void => setValue(newValue)} />;
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
