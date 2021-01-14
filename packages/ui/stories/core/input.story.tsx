import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import CensorIcon from '@scaleflex/icons/censor';
import SearchIcon from '@scaleflex/icons/search';
import _Input, { InputProps } from '../../src/core/input';
import { Size } from '../../src/core/input/types';
import { StoryGroup } from './types';

export const Input = _Input;

export default {
  title: `${StoryGroup.Inputs}/Input`,
  component: Input,
  excludeStories: ['Input'],
} as Meta;

const defaultArgs = {
  size: Size.Md,
  placeholder: 'placeholder',
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

// WithIconStart
export const WithIconStart = BasicTemplate.bind({});
WithIconStart.args = {
  ...defaultArgs,
  iconStart: (props) => <SearchIcon {...props} />,
};

// WithIconEnd
export const WithIconEnd = BasicTemplate.bind({});
WithIconEnd.args = {
  ...defaultArgs,
  iconEnd: (props) => <CensorIcon {...props} />,
};

// WithIcons
export const WithIcons = BasicTemplate.bind({});
WithIcons.args = {
  ...defaultArgs,
  iconStart: (props) => <SearchIcon {...props} />,
  iconEnd: (props) => <CensorIcon {...props} />,
};
