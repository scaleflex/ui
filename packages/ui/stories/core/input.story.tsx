import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import CensorIcon from '@scaleflex/icons/censor';
import SearchIcon from '@scaleflex/icons/search';
import _Input, { InputProps } from '../../src/core/input';
import { InputSize } from '../../src/utils/types';
import { StoryGroup } from './types';

export const Input = _Input;

export default {
  title: `${StoryGroup.Inputs}/Input`,
  component: Input,
  excludeStories: ['Input'],
} as Meta;

const defaultArgs = {
  size: InputSize.Md,
  placeholder: 'placeholder',
  readOnly: false,
  disabled: false,
  focusOnClick: true,
};

const BasicTemplate: Story<InputProps> = ({ ...args }) => {
  const [value, setValue] = useState('Text');

  return (
    <Input
      {...args}
      value={value}
      onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => setValue(currentTarget.value)}
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
  iconStart: (props: any) => <SearchIcon {...props} />,
};

// WithIconEnd
export const WithIconEnd = BasicTemplate.bind({});
WithIconEnd.args = {
  ...defaultArgs,
  iconEnd: (props: any) => <CensorIcon {...props} />,
};

// WithIcons
export const WithIcons = BasicTemplate.bind({});
WithIcons.args = {
  ...defaultArgs,
  iconStart: (props: any) => <SearchIcon {...props} />,
  iconEnd: (props: any) => <CensorIcon {...props} />,
};
