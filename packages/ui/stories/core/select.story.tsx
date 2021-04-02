import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Select, { SelectProps } from '../../src/core/select';
import MenuItem from '../../src/core/menu-item';
import { Size } from '../../src/core/select/types';
import { StoryGroup } from './types';

export const Select = _Select;

export default {
  title: `${StoryGroup.Inputs}/Select`,
  component: Select,
  excludeStories: ['Select'],

  argTypes: {
    children: {
      description: 'Menu contents, normally `MenuItem`s.',
    },
  },
} as Meta;

const defaultArgs = {
  size: Size.Md,
  multiple: false,
  readOnly: false,
  disabled: false,
};

const BasicTemplate: Story<SelectProps> = ({ ...args }) => {
  const [value, setValue] = useState(args.multiple ? [] : '');

  useEffect(() => {
    setValue(args.multiple ? [] : '');
  }, [args.multiple]);

  return (
    <Select {...args} value={value} onChange={(ev: any) => setValue(ev)}>
      <MenuItem value="item1">Menu item 1</MenuItem>
      <MenuItem value="item2">Menu item 2</MenuItem>
      <MenuItem value="item3">Menu item 3</MenuItem>
    </Select>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
