import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import VisibilityOff from '@sfx-ui/icons/visibility-off';
import _Input, { InputProps } from '../src/input';
import { Size } from '../src/input/types';

export const Input = _Input;

export default {
  title: 'Inputs/Input',
  component: Input,
  excludeStories: ['Input'],
} as Meta;

const defaultArgs = {
  size: Size.Md,
};

const BasicTemplate: Story<InputProps> = ({
  ...args
}) => {
  const [value, setValue] = useState('Text');

  return (
    <Input
      {...args}
      value={value}
      onChange={({ target }) => setValue(target.value)}
    />
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

// WithIcon
export const WithIcon = BasicTemplate.bind({});
WithIcon.args = {
  ...defaultArgs,
  icon: (props) => <VisibilityOff {...props} />,
};
