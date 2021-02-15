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
      description: 'input attributes applied directly input element.'
    }

  }
} as Meta;

const defaultArgs = {
  label: 'Label',
  hint: 'Some hint goes here',
};

const BasicTemplate: Story<SelectGroupProps> = ({
  ...args
}) => {
  const [valueState, setValueState] = useState();

  return (
    <SelectGroup
      {...args}
      value={valueState}
      onChange={setValueState}
    >
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
  multiple: true
};

// Select with icon
export const SelectWithIcon = BasicTemplate.bind({});
SelectWithIcon.args = {
  ...defaultArgs,
  LabelProps: {
    icon: (props) => <QuestionMarkOutline {...props} />,
  },
};
