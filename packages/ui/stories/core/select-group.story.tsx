import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import QuestionMarkOutline from '@scaleflex/icons/question-mark-outline';
import _SelectGroup, { SelectGroupProps } from '../../src/core/select-group';
import MenuItem from '../../src/core/menu-item';
import { StoryGroup } from './types';

export const SelectGroup = _SelectGroup;

export default {
  title: `${StoryGroup.Inputs}/Select/SelectGroup`,
  component: SelectGroup,
  excludeStories: ['SelectGroup'],

  argTypes: {
    children: {
      description: 'Menu contents, normally `MenuItem`s.',
    },

    switcherProps: {
      description: 'input attributes applied directly input element.',
    },
  },
} as Meta;

const defaultArgs = {
  label: 'Label',
  hint: 'Some hint goes here',
  readOnly: false,
  disabled: false,
};

const BasicTemplate: Story<SelectGroupProps> = ({ ...args }) => {
  const [valueState, setValueState] = useState();

  return (
    <SelectGroup {...args} value={valueState} onChange={(ev: any) => setValueState(ev)}>
      <MenuItem value="item1">Item 1</MenuItem>
      <MenuItem value="item2">Item 2</MenuItem>
    </SelectGroup>
  );
};

// Select
export const Select = BasicTemplate.bind({});
Select.args = { ...defaultArgs };

// SelectMultiple
export const SelectMultiple = BasicTemplate.bind({});
SelectMultiple.args = {
  ...defaultArgs,
  multiple: true,
};

// Select with iconStart
export const SelectWithIconStart = BasicTemplate.bind({});
SelectWithIconStart.args = {
  ...defaultArgs,
  LabelProps: {
    iconStart: (props: any) => <QuestionMarkOutline {...props} />,
  },
};

// Select with iconEnd
export const SelectWithIconEnd = BasicTemplate.bind({});
SelectWithIconEnd.args = {
  ...defaultArgs,
  LabelProps: {
    iconEnd: (props: any) => <QuestionMarkOutline {...props} />,
  },
};
