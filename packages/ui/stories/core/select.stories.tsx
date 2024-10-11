import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Select, { SelectProps } from '../../src/core/select';
import MenuItem from '../../src/core/menu-item';
import { InputSize } from '../../src/utils/types';

const meta: Meta<typeof Select> = {
  title: 'Inputs/Select',
  component: Select,
  excludeStories: ['Select'],
  argTypes: {
    children: {
      description: 'Menu contents, normally `MenuItem`s.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const defaultArgs = {
  size: InputSize.Md,
  multiple: false,
  readOnly: false,
  disabled: false,
  placeholder: 'placeholder',
};

const BasicTemplate = ({ ...args }: SelectProps): JSX.Element => {
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

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
